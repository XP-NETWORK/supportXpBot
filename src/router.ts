import axios from "axios";
import { Request, Response, Router } from "express";
import Coversation, {
} from "./Conversation";
import config from "./config";

import {scenarios} from './constants/dialog'
import {BotUpdate}  from './types'



export const txRouter = (): Router => {
  const router = Router();

  router.post("/update", async (req: Request, res: Response) => {
    console.log(req.body, "body");
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

        const user = await Coversation.findOne({
          telegram: from.username
        })

        if (user) {
          await Coversation.removeById(user.id);
        }

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
            text: "Who are you?",
            chat_id: id,
          },
        });
      } else {
        const { message, callback_query } = body;

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
          conversation.stage < scenarios[conversation.type].length
        ) {
          conversation = callback_query
            ? conversation
            : await Coversation.findByIdAndUpdate(conversation.id, {
                stage: conversation.stage + 1,
                [scenarios[conversation.type][conversation.stage].field]:
                  message.text,
              }, {useFindAndModify: false});

          const type = conversation?.type;
          const stage = callback_query
            ? conversation!.stage
            : conversation!.stage + 1;

          if (type) {
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
        }
      }

      res.end();

    } catch (e: any) {
      console.log(e);
      res.status(500).json({ message: e.toString() });
    }
  });


  return router;
};
