module.exports = {
  config: {
    name: "friezaa",
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
    if (event.body && event.body.toLowerCase() === "friezaa") {
      return message.reply({
        body: "「 ඞ 」",
        attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?export=download&id=1-WpFTDSpHhiUddKGM60cm3yIsLF1DXte")
      });
    }
  }
}