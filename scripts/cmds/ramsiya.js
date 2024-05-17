const fs = require('fs');
module.exports = {
 config: {
 name: "ram siya ram",
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
 if (event.body && event.body.toLowerCase() === "ram siya ram") {
 return message.reply({
 body: "जिसके मन में होते हैं श्रीराम का एहसास जिंदगी भर हर ख़ुशियाँ होती है उनके पास💗💗 ",
 attachment: fs.createReadStream("ramram.mp4"),
 });
 }
 }
};