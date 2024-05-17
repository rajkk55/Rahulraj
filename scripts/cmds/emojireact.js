module.exports = {
    config: {
        name: "emojiReaction",
        version: "1.0",
        author: "Rahul Raj",
        countDown: 5,
        role: 0,
        shortDescription: "Emoji Reaction",
        longDescription: "Reacts with 💚 to any message",
        category: "reply",
    },
    onStart: async function () {},
    onChat: async function ({
        event,
        message,
        getLang
    }) {
        // React with 💚 to any message
        message.react("💚");
    }
};