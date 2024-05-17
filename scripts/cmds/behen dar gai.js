const fs = require('fs');
module.exports = {
  config: {
    name: "behen dar gai",
    version: "1.0",
    author: "JARiF",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "behen dar gai") {
      return message.reply({
        body: "Behen dar gai",
        attachment: fs.createReadStream("behen dar gai.mp3"),
      });
    }
  }
};