module.exports = {
    config: {
        name: "kalawa",
        version: "1.0",
        author: "Rahul Raj",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "kalawa") return message.reply("Papa Bol Haramkhor bete 😒 ");
}
};