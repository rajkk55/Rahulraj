const fs = require('fs');

module.exports = {
  config: {
    name: "happy diwali",
    version: "1.0",
    author: "Rahul Raj",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function () {},
  onChat: async function ({ event, message, getLang }) {
    const lowercaseMessage = event.body.toLowerCase();

    if (lowercaseMessage.includes("happy diwali") || lowercaseMessage.includes("diwali")) {
      const videoAttachment = fs.createReadStream("ramsiya.mp4");

      return message.reply({
        body: "Wishing my precious family a very shubh and Prosperous Diwali🤗☺️. Jai Siya Ram💗 May this Diwali burn all the darkness, and traces of complexities in our hearts and ignite the kindle of hope and a new beginning💗💗.",
        attachment: videoAttachment,
      });
    }
  }
};