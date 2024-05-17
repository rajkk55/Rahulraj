const fs = require('fs');
module.exports = {
 config: {
 name: "hinata",
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
 if (event.body && event.body.toLowerCase() === "hinata") {
 return message.reply({
 body: "👉👈😚",
 attachment: fs.createReadStream("hinata.mp4"),
 });
 }
 }
};