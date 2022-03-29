import axios from "axios";
import { Request, Response, Router } from "express";
import Coversation from "./Conversation";
import config from "./config";
import { scenarios, defaults } from "./constants/dialog";
import { BotUpdate } from "./types";

import { validate, updateConversation } from "./helpers";

export const txRouter = (): Router => {
  const router = Router();

  router.post("/update", async (req: Request, res: Response) => {
    console.log("new");
    const body: BotUpdate = req.body;
    try {
      if (body.message?.text === "/start startwithxpbot") {
        const {
          message: {
            message_id,
            text,
            from,
            chat: { id },
          },
        } = body;

        await Coversation.deleteMany({
          telegram: from.username,
        });

        await axios({
          url: `https://api.telegram.org/bot${config.bot}/sendMessage`,
          method: "post",
          data: {
            reply_markup: JSON.stringify({
              inline_keyboard: [
                [
                  { text: "User", callback_data: "user" },
                  { text: "Project", callback_data: "project" },
                ],
              ],
            }),
            text: "Identity yourself",
            chat_id: id,
          },
        });
      } else {
        const { message, callback_query } = body;

        if (callback_query) {
          console.log(callback_query);
          await axios({
            url: `https://api.telegram.org/bot${config.bot}/editMessageReplyMarkup`,
            method: "post",
            data: {
              reply_markup: JSON.stringify({
                inline_keyboard: [[]],
              }),
              message_id: callback_query.message.message_id,
              chat_id: callback_query.message.chat.id,
            },
          });
        }

        let conversation = callback_query
          ? await Coversation.createNew({
              type: callback_query.data,
              telegram: callback_query.from.username,
              stage: 0,
            })
          : await Coversation.findOne({
              telegram: message.from.username,
            });

        if (
          conversation &&
          conversation.stage < scenarios[conversation.type].length - 1
        ) {
          const isValid = await validate(conversation, callback_query, message);
          console.log(isValid);
          if (!isValid) return res.end();

          conversation = callback_query
            ? conversation
            : await updateConversation(conversation, message);

          const type = conversation?.type;
          const stage = callback_query
            ? conversation!.stage
            : conversation!.stage;

          if (type && scenarios[type][stage]?.text) {
            await axios({
              url: `https://api.telegram.org/bot${config.bot}/sendMessage`,
              method: "post",
              data: {
                text: scenarios[type][stage].text,
                chat_id: callback_query
                  ? callback_query.message.chat.id
                  : message.chat.id,
              },
            });
          }
        } else {
          console.log("sending");

          if (conversation) {
            const isValid = await validate(
              conversation,
              callback_query,
              message
            );
            console.log(isValid);
            if (!isValid) return res.end();

            conversation = await updateConversation(conversation, message);

            if (conversation) {
              await axios({
                url: `https://api.telegram.org/bot${config.bot}/sendMessage`,
                method: "post",
                data: {
                  text: defaults[conversation.type].final,
                  chat_id: callback_query
                    ? callback_query.message.chat.id
                    : message.chat.id,
                },
              });

              await axios({
                url: `${config.backend}${defaults[conversation.type].url}`,
                method: "post",
                data: {
                  ...defaults[conversation.type].keys.reduce((acc, cur) => {
                    return {
                      ...acc,
                      [cur.backendKey]: conversation![cur.localKey],
                    };
                  }, {}),
                  ContactAddress: `@${conversation?.telegram}/${conversation?.email}`,
                },
              });
            }
          }
        }
      }

      res.end();
    } catch (e: any) {
      console.log(e);
      res.end();
    }
  });

  return router;
};
