const fs = require('fs');
module.exports = {
 config: {
 name: "naruto",
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
 if (event.body && event.body.toLowerCase() === "naruto") {
 return message.reply({
 body: "Dattebayo🥷",
 attachment: fs.createReadStream("naruto.mp4"),
 });
 }
 }
};