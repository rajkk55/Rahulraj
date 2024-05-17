const fs = require('fs');
module.exports = {
 config: {
 name: "hero banxas",
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
 if (event.body && event.body.toLowerCase() === "hero banxas") {
 return message.reply({
 body: "Yasto Hanxu 🙄",
 attachment: fs.createReadStream("hero.mp3"),
 });
 }
 }
};