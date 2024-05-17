const fs = require('fs');
module.exports = {
 config: {
 name: "ani",
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
 if (event.body && event.body.toLowerCase() === "ani") {
 return message.reply({
 body: "jaldi waha se hato 🐽",
 attachment: fs.createReadStream("hatbc.mp4"),
 });
 }
 }
};