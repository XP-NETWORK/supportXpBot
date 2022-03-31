
export const liftPremissions = {
  can_send_messages:true,
  can_send_media_messages:true,
  can_send_polls:true,
  can_add_web_page_previews:true,
  can_change_info:false,
  can_invite_users:true,
  can_pin_messages:false
}


export const scenarios = {
  user: [
    {
      text: "Please write your contact name",
      field: "ContactName",
    },
    {
      text: "Please tell us about the problem/issue you encountered with our bridge.",
      field: "IssueDescr",
    },
    {
      text: "Please write your Wallet Address",
      field: "walletAddress",
      validError: "Wallet address is not valid",
      isValid: (text: string) => {
        return text.length > 15;
      },
    },
    {
      text: "Please write your email",
      field: "email",
      validError: "Email is not valid",
      isValid: (text: string) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(text);
      },
    },
    
  ],

  project: [
    {
      text: "Please write your Project Name",
      field: "ProjectName",
    },
    {
      text: "Please write your website",
      field: "ProjectWebsite",
      validError: "Website link is not valid (Should begin with https or www)",
      isValid: (text: string) => {
        var re =
          /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/gi;
        return re.test(text);
      },
    },
    {
      text: "Please write your contact name",
      field: "ContactName",
    },
    {
      text: "Please write your email",
      field: "email",
      validError: "Email is not valid",
      isValid: (text: string) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(text);
      },
    },
    {
      text: "Please tell us about the problem/issue you encountered with our bridge.",
      field: "IssueDescr",
    },
  ],
};

export const defaults = {
  user: {
    final: "Thanks! we will contact you soon.",
    url: "/supportele",
    keys: [
      {
        localKey: "walletAddress",
        backendKey: "WalletAddress",
      },
      {
        localKey: "ContactName",
        backendKey: "Name",
      },
      {
        localKey: "IssueDescr",
        backendKey: "Message",
      },
      {
        localKey: "email",
        backendKey: "Email",
      },
      {
        localKey: "telegram",
        backendKey: "ContactAddress",
      },

    ]
  },

  project: {
    final: `Thanks! For further details you can contact our CBO, @DimauXP`,
    url: "/plantele",
    keys: [
      {
        localKey: "ProjectName",
        backendKey: "ProjectName",
      },
      {
        localKey: "ProjectWebsite",
        backendKey: "ProjectWebsite",
      },
      {
        localKey: "ContactName",
        backendKey: "ContactName",
      },
      {
        localKey: "IssueDescr",
        backendKey: "Message",
      },
      {
        localKey: "email",
        backendKey: "Email",
      },
      {
        localKey: "telegram",
        backendKey: "ContactAddress",
      }
    ],
  },
};
