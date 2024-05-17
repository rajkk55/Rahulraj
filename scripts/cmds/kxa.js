const fs = require('fs');
module.exports = {
 config: {
 name: "k xa",
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
 if (event.body && event.body.toLowerCase() === "k xa") {
 return message.reply({
 body: "K xa mero payaro mitr 😗",
 attachment: fs.createReadStream("k xa.mp3"),
 });
 }
 }
};