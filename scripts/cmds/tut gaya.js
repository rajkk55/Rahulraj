const fs = require('fs');
module.exports = {
  config: {
    name: "tut gaya",
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
    if (event.body && event.body.toLowerCase() === "tut gaya") {
      return message.reply({
        body: "Tut gaya",
        attachment: fs.createReadStream("tut gaya.mp4"),
      });
    }
  }
};