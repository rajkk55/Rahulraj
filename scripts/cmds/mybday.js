const fs = require('fs');
module.exports = {
 config: {
 name: "wish nhi chahiyai",
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
 if (event.body && event.body.toLowerCase() === "wish nhi chahiyai") {
 return message.reply({
 body: "Wish nhi chahiyai 200 rupya esewa kro😑",
 attachment: fs.createReadStream("mybday.mp4"),
 });
 }
 }
};