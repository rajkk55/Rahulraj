const fs = require('fs');
module.exports = {
  config: {
    name: "jaldi waha se hato",
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
    if (event.body && event.body.toLowerCase() === "jaldi waha se hato") {
      return message.reply({
        body: "Jaldi waha se hato",
        attachment: fs.createReadStream("jaldi waha se hato.mp3"),
      });
    }
  }
};