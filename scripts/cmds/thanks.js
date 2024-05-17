const fs = require('fs');

module.exports = {
  config: {
    name: "thanks",
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

    if (lowercaseMessage.includes("arigato") || lowercaseMessage.includes("thank")) {
      return message.reply({
        body: "Arigato Gozaimasu",
        attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?export=download&id=11ohudzGpv1vzLFyUqviB43sfs5iRcMN4")
      });
    }
  }
};