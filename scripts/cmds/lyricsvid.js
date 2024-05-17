module.exports = {
  config: {
    name: "lyricsvid",
    aliases: ["hapimoment", "lovevid"],
    version: "1.0",
    author: "RAHUL",
    countDown: 10,
    role: 0,
    shortDescription: "Get a Random Lyrics Video",
    longDescription: "This command sends you a random lyrics video to enjoy.",
    category: "Fun",
    guide: "{pn} lyricsvid",
  },

  onStart: async function ({ api, event }) {
    const sentMessage = await api.sendMessage("🎵 Loading a random lyrics video...\nPlease hold on!", event.threadID);
    const videoLinks = [
      "https://drive.google.com/uc?export=download&id=10510iBLSMrAKvM06bAyZ6or81I-5aLMi",
"https://drive.google.com/uc?export=download&id=1070Gk3yvyxhHsH9yIh5FE3Pda0STgWRG",
"https://drive.google.com/uc?export=download&id=108fj9QMBPL8lJIMAop7RVoXSZWQvepQ7",
"https://drive.google.com/uc?export=download&id=10CqBA_wIZ94MukuE9GW7g8bwBIG-FAi9",
"https://drive.google.com/uc?export=download&id=10HbJu3I71AfUXI3fAtLKfstXR_o6Vu-Q",
"https://drive.google.com/uc?export=download&id=10e5nww1I8ZcgC5EEMT7Q-MFDqkeP4qtG",
"https://drive.google.com/uc?export=download&id=10G9njjRlU2XbbvEa763AB4dNK3lk2sMt",
",https://drive.google.com/uc?export=download&id=10ZiuF-lMazpR5SJ4yMsF4D9OKFTxrRWj",
"https://drive.google.com/uc?export=download&id=10XgEdsnyFaeeLflBexNw5MZ0nt5pizyJ",
"https://drive.google.com/uc?export=download&id=10KkFnuLL0Q1wFFCYzhxMx3_yc8pzOvBk",
"https://drive.google.com/uc?export=download&id=10UiO7bd-JXXh-lqllgsmOc5o5DA1KV42",
"https://drive.google.com/uc?export=download&id=10TaeFIVgDYgRJTFGhCiGIj_mvcdwB0_P",
"https://drive.google.com/uc?export=download&id=10RCaIQydCFc1My8QX1wcaN808xEK1piS",
"https://drive.google.com/uc?export=download&id=10JxUW8ZlIgfW8yPY1e8H9ipdlt49l99w",
"https://drive.google.com/uc?export=download&id=10VYIQS7pTG70JY3RsTeo2VkRT0_8k2Jn",

    ];

    const randomIndex = Math.floor(Math.random() * videoLinks.length);
    const randomVideo = videoLinks[randomIndex];

    await api.sendMessage({
      body: 'Relax and enjoy the music! 🎶',
      attachment: await global.utils.getStreamFromURL(randomVideo),
    }, event.threadID);

    setTimeout(() => {
      api.unsendMessage(sentMessage.messageID);
    }, 10000);
  },
};