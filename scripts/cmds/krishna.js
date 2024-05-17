module.exports = {
 config: {
 name: "guide0",
 version: "1.0",
 author: "XyryllPanget",
 countDown: 5,
 role: 0,
 shortDescription: "guide of non prefix cmd",
 longDescription: "ai will help you to guide ant cmds",
 category: "guide",
 },
onStart: async function(){}, 
onChat: async function({
 event,
 message,
 getLang
}) {
 if (event.body && event.body.toLowerCase() == "$krishna") return message.reply("$ is not required in non prefix or god category cmd. Just type krishna normally ");
}
};