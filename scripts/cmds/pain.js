module.exports = {
  config: {
    name: "pain",
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
    if (text.includes("pain")) {
      return message.reply({
        body: "shinara tensai!",
        attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?export=download&id=113QRKrl3NoOQC-QsbmsF5ZvzPHp7Fs8U")
      });
    }
  }
};