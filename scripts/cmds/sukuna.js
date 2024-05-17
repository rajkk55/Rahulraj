const fs = require('fs');
module.exports = {
 config: {
 name: "sukuna",
 version: "1.0",
 author: "rahul",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 },
 onStart: async function(){},
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "sukuna") {
 return message.reply({
 body: "Ryomen Sukuna😈",
 attachment: fs.createReadStream("sukuna.mp4"),
 });
 }
 }
};