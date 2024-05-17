const fs = require('fs');
module.exports = {
 config: {
 name: "who r u",
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
 if (event.body && event.body.toLowerCase() === "who r u") {
 return message.reply({
 body: "🐽🐽🐽",
 attachment: fs.createReadStream("who r u.mp4"),
 });
 }
 }
};