module.exports = {
  config: {
    name: "sakura",
    version: "1.0",
    author: "Jaychris Garcia",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function () {},
  onChat: async function ({ event, message, getLang }) {
    const text = event.body.toLowerCase();
    if (text.includes("sakura")) {
      return message.reply({
        body: "Trash 🗑️",
        attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?export=download&id=11G_7PdmcajCEo1L3hmNyR2C9SIVlqR7d")
      });
    }
  }
};