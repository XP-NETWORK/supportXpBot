export  interface BotUpdate {
    callback_query: {
      data: "user" | "project";
      from: {
        username: string;
      };
      message: {
        chat: {
          id: number;
        };
      };
    };
    message: {
      text?: string;
      message_id?: number;
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