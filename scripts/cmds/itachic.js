module.exports = {
  config: {
    name: "itachi uchiha",
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
    if (event.body && event.body.toLowerCase() === "itachi uchiha") {
      return message.reply({
        body: "Sono sharingan",
        attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?export=download&id=10s47E3FXWuXS-t4FzLhDg_7acD717_xV")
      });
    }
  }
}