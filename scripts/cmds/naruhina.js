const fs = require('fs');
module.exports = {
 config: {
 name: "naru hina",
 version: "1.0",
 author: "Rahul Raj",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 },
 onStart: async function(){},
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "naru hina") {
 return message.reply({
 body: "💗💗💗 ",
 attachment: fs.createReadStream("Naru Hina.mp4"),
 });
 }
 }
};