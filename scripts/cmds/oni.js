oni.js const fs = require('fs');
module.exports = {
 config: {
 name: "oni chan",
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
 if (event.body && event.body.toLowerCase() === "oni chan") {
 return message.reply({
 body: "Oni chan",
 attachment: fs.createReadStream("oni chan.mp3"),
 });
 }
 }
};
