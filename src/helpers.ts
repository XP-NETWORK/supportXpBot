import axios from "axios";
import config from "./config";
import Coversation, {
  IConversation,
  IConversationDocument,
} from "./Conversation";
import { scenarios } from "./constants/dialog";

export const validate = async (
  conversation: IConversationDocument,
  callback_query,
  message
) => {
  if (callback_query) return true;
  let valid = true;
  //@ts-ignore
  if (scenarios[conversation.type][conversation.stage].isValid) {
    //@ts-ignore
    valid = scenarios[conversation.type][conversation.stage].isValid(
      message.text
    );
  }

  if (!valid) {
    await axios({
      url: `https://api.telegram.org/bot${config.bot}/sendMessage`,
      method: "post",
      data: {
        text: scenarios[conversation.type][conversation.stage].validError,
        chat_id: callback_query
          ? callback_query.message.chat.id
          : message.chat.id,
      },
    });

    await axios({
      url: `https://api.telegram.org/bot${config.bot}/sendMessage`,
      method: "post",
      data: {
        text: scenarios[conversation.type][conversation.stage].text,
        chat_id: callback_query
          ? callback_query.message.chat.id
          : message.chat.id,
      },
    });
  }
  return valid;
};

export const updateConversation = async (
  conversation: IConversationDocument,
  message
) => {
  return await Coversation.findByIdAndUpdate(
    conversation.id,
    {
      stage: conversation.stage + 1,
      [scenarios[conversation.type][conversation.stage].field]: message.text,
    },
    { useFindAndModify: false, new: true }
  );
};
