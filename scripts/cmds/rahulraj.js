module.exports = {
  config: {
    name: "rahul raj",
    version: "1.0",
    author: "Jaychris Garcia",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "rahul raj") {
      return message.reply({
        body: "🤏🕶️😗",
        attachment: await global.utils.getStreamFromURL("https://i.imgur.com/ZSPrU7S.jpg")
      });
    }
  }
}