module.exports = {
  config: {
    name: "p",
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
    if (text.includes("🙂")) {
      return message.reply({
        body: "😊",
        attachment: await global.utils.getStreamFromURL("https://i.ibb.co/JjQV5Dn/image.jpg")
      });
    }
  }
};