import axios from "axios";
import { Request, Response, Router } from "express";
import Coversation,{IConversationDocument} from "./Conversation";
import config from "./config";
import { scenarios, defaults, liftPremissions } from "./constants/dialog";
import { BotUpdate } from "./types";

import { validate, updateConversation } from "./helpers";


export const getTelegramTemplate = (conversation:IConversationDocument) => {
  return `
  <strong>NEW PROJECT - ${conversation.ProjectName}</strong>

  ContactName: <strong>${conversation.ContactName}</strong>
  
  ProjectWebsite: <a href="${conversation.ProjectWebsite}">${conversation.ProjectWebsite}</a>
  
  Email: <strong>${conversation.email}</strong>
  
  Telegeram: <strong>@${conversation.telegram}</strong>
  
  Issue: ${conversation.IssueDescr}
  `;
};


export const txRouter = (): Router => {
  const router = Router();

  router.post("/update", async (req: Request, res: Response) => {

    const body: BotUpdate = req.body;
    if (String(body?.message?.chat?.id) === '-1001564042174') return res.status(200).json({})

    if (String(body?.message?.chat?.id) === config.chat) return res.status(200).json({})

    console.log("new");

    /*if (body?.message?.new_chat_member) {

    

     /*await axios({
        url: `https://api.telegram.org/bot${config.bot}/restrictChatMember`,
        method: "post",
        data: {
          user_id: body.message.new_chat_member.id,
          chat_id: body.message.chat.id,
          permissions: JSON.stringify(liftPremissions)
        },
      });

      return res.status(200).json({})
    }*/

    //https://t.me/test_bot7770
    try {
      if (body.message?.text === "/start startwithxpbot" || body.message?.text === '/start') {
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
          await axios({
            url: `https://api.telegram.org/bot${config.bot}/editMessageReplyMarkup`,
            method: "post",
            data: {
              reply_markup: JSON.stringify({
                inline_keyboard: [[
                  //{ text: "Restart", url: "https://t.me/XP_NETWORK_Bridge_Support_Bot?start=startwithxpbot" },
                ]],
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

          if (conversation) {
            console.log("sending");
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
                  text: `${defaults[conversation.type].final}\nJoin XP.NETWORK Technical Support Group`,
                  chat_id: callback_query
                    ? callback_query.message.chat.id
                    : message.chat.id,

                  reply_markup: JSON.stringify({
                    inline_keyboard: [
                      [
                        { text: "JOIN", url: 'https://t.me/XP_NETWORK_Technical_Support' },
                      ],
                    ],
                  }),
                },
              });

              conversation.type === 'project' &&  axios.get(
                `https://api.telegram.org/bot${config.bot}/sendMessage?chat_id=${config.target}&text=${getTelegramTemplate(conversation)}&parse_mode=HTML`
              );


              axios({
                url: `${config.backend}${defaults[conversation!.type].url}`,
                method: "post",
                data: defaults[conversation!.type].keys.reduce((acc, cur) => {
                  return {
                    ...acc,
                    [cur.backendKey]: conversation![cur.localKey],
                  };
                }, {}),
              });


              
            }
          }
        }
      }

      res.end();
    } catch (e: any) {
      console.log(e);
      res.status(200).json({})
    }
  });

  return router;
};


