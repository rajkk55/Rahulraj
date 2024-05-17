const axios = require("axios");

module.exports = {
  config: {
    name: "loveguru",
    aliases: ["lg","loveai"],
    version: "1.0",
    author: "SiAM",
    countDown: 10,
    role: 0,
    shortDescription: {
      vi: "",
      en: "AI of an Love Expert"
    },
    longDescription: {
      vi: "",
      en: "AI of an Love Expert"
    },
    category: "AI",
		guide: {
			en: "{pn} 'prompt'\nExample:\n{pn} who are you"
		}
  },
  onStart: async function ({ message, event, args, commandName }) {
		const { getPrefix } = global.utils;
    const p = getPrefix(event.threadID);
    const prompt = args.join(' ');
		if (!prompt) {
      message.reply(`Please provide some text, and love Expert will answer your question. \n\nExample: ${p}loveAI hi there`);
      return;
		}

    try {
      const response = await axios.get("https://apis.marinmain.repl.co/chatbot/loveguru", {
        params: {
          ask: prompt,
          apikey: "siamxmarin77"
        }
      });

      if (response.status === 200 && response.data.status === "success") {
        message.reply({ body: `𝙇𝙤𝙫𝙚 𝙀𝙭𝙥𝙚𝙧𝙩:\n\n${response.data.answer}` }, (err, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName,
            messageID: info.messageID,
            author: event.senderID
          });
        });
      } else {
        console.error("API Error:", response.data);
        sendErrorMessage(message, "I don't know the answer to this question.");
      }

    } catch (error) {
      console.error("Request Error:", error.message);
      sendErrorMessage(message, "Oops! Error");
    }
  },
  onReply: async function ({ message, event, Reply, args }) {
    let { author, commandName } = Reply;
    if (event.senderID != author) return;
    const prompt = args.join(' ');

    try {
      const response = await axios.get("https://apis.siam-ai.repl.co/chatbot/loveguru", {
        params: {
          ask: prompt,
          apikey: "temp69"
        }
      });

      if (response.status === 200 && response.data.status === "success") {
        message.reply({ body: `𝙇𝙤𝙫𝙚 𝙀𝙭𝙥𝙚𝙧𝙩:\n\n${response.data.answer}` }, (err, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName,
            messageID: info.messageID,
            author: event.senderID
          });
        });
      } else {
        console.error("API Error:", response.data);
        sendErrorMessage(message, "I don't know the answer to this question.");
      }

    } catch (error) {
      console.error("Request Error:", error.message);
      sendErrorMessage(message, "Oops! Error");
    }
  }
};

function sendErrorMessage(message, errorMessage) {
  message.reply({ body: errorMessage });
}