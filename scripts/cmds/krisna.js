const fs = require('fs');
module.exports = {
  config: {
    name: "krishna",
    version: "1.0",
    author: "JARiF",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix $ is not required",
    longDescription: "no prefix",
    category: "God",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "krishna") {
      return message.reply({
        body: "May Lord Krishna’s flute invite the melody of love into your life.  ♥️💫",
        attachment: fs.createReadStream("krishna.mp4"),
      });
    }
  }
};