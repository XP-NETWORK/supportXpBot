export  interface BotUpdate {
    callback_query: {
      data: "user" | "project";
      from: {
        username: string;
      };
      message: {
        message_id: number,
        chat: {
          id: number;
        };
      };
    };
    my_chat_member?:{
      old_chat_member?: {
        status?: string
      }
    },
    message: {
      text?: string;
      message_id?: number;
      left_chat_member: {
        id: number;
        username: string,
      },
      new_chat_member?: {
        id: number;
        is_bot: false,
        first_name: string,
        last_name: string,
        username: string,
        language_code: string
      },
      chat: {
        id: number;
      };
      from: {
        username: string;
      };
      reply_to_message: {
        chat: {
          id: number;
        };
        from: {
          username: string;
        };
        text: string;
      };
    };
  }