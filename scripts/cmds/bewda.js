const fs = require('fs');
module.exports = {
 config: {
 name: "bewda zoro",
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
 if (event.body && event.body.toLowerCase() === "bewda zoro") {
 return message.reply({
 body: "Roronoa Zoro",
 attachment: fs.createReadStream("bewda Zoro.mp4"),
 });
 }
 }
};