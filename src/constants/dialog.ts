export const scenarios = {
    user: [
      {
        text: "Please write your Wallet Address",
        field: "walletAddress",
        validError: 'Wallet address is not valid',
        isValid: (text:string) => {
          return text.length > 15;
        }
      },
      {
        text: "Please write your contact name",
        field: "ContactName",
      },
      {
        text: "Please write your email",
        field: "email",
        validError: 'Email is not valid',
        isValid: (text:string) => {
          var re = /\S+@\S+\.\S+/;
          return re.test(text);
        }
      },
      {
        text: "Please tell us about the problem/issue you encountered with our bridge.",
        field: "IssueDescr",
      }
    ],
  
    project: [
      {
        text: "Please write your Project Name",
        field: "ProjectName",
      },
      {
        text: "Please write your website",
        field: "ProjectWebsite",
      },
      {
        text: "Please write your contact name",
        field: "ContactName",
      },
      {
        text: "Please write your email",
        field: "email",
        validError: 'Email is not valid',
        isValid: (text:string) => {
          var re = /\S+@\S+\.\S+/;
          return re.test(text);
        }
      },
      
    ],
  };

export const defaults = {
    user: {
        final: 'Thanks! we will contact you soon.',
        url: '/supportele',
        keys: [{
          localKey: 'walletAddress',
          backendKey: 'WalletAddress'
        },{
          localKey: 'ContactName',
          backendKey: 'Name'
        },{
          localKey: 'IssueDescr',
          backendKey: 'Message'
        },/*'Wallet Address', 'Name', 'ContactAddress', 'Message'*/]
    },

    project: {
        final: `Thanks! For further details you can contact our CBO, @DimauXP`,
        url: '/plantele',
        keys: [{
          localKey: 'ProjectName',
          backendKey: 'ProjectName'
        }, {
          localKey: 'ProjectWebsite',
          backendKey: 'ProjectWebsite'
        }, {
          localKey: 'ContactName',
          backendKey: 'ContactName'
        }]
    }
}