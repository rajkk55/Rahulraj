module.exports = {
  config: {
    name: "?",
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
    if (event.body && event.body.toLowerCase() === "?") {
      return message.reply({
        body: "「 kya dekh raha hai? 」",
        attachment: await global.utils.getStreamFromURL("https://cdn.fbsbx.com/v/t59.3654-21/346470309_983966379645392_7038911810073806622_n.mp3/kya.mp3?_nc_cat=108&ccb=1-7&_nc_sid=7272a8&_nc_ohc=Yf7cSwM9xi8AX-w6wBE&_nc_ht=cdn.fbsbx.com&oh=03_AdR2AD6PKm8z3PRgwVZLIg0sP5yoGj-K_sSd6itC0O7-uw&oe=65240332&dl=1")
      });
    }
  }
}