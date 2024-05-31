const fs = require("fs-extra");
const { utils } = global;

// Array of image URLs
const imageUrls = [
    "https://i.imgur.com/e86WwHd.gif",
    "https://i.imgur.com/grcQ3oT.gif",
    "https://i.imgur.com/4NAv86j.gif",

"https://i.imgur.com/LRmHU6f.gif",
 "https://i.imgur.com/EzBzn8u.gif",
"https://i.imgur.com/PvfxA4u.gif",
"https://i.imgur.com/W31mBGY.gif",
"https://i.imgur.com/wEbJuHi.gif",
"https://i.imgur.com/DH3dgH5.gif",
"https://i.imgur.com/z3tdVxg.gif",
"https://i.imgur.com/uSriDZJ.gif",
    // Add more image URLs as needed
];

module.exports = {
    config: {
        name: "prefix",
        version: "1.4",
        author: "NTKhang // Raj",
        countDown: 5,
        role: 0,
        description: "Change the bot's command prefix in your chat box or system-wide (admin only)",
        category: "config",
        guide: {
            vi: "   {pn} <new prefix>: change new prefix in your box chat"
                + "\n   Example:"
                + "\n    {pn} #"
                + "\n\n   {pn} <new prefix> -g: change new prefix in system bot (admin only)"
                + "\n   Example:"
                + "\n    {pn} # -g"
                + "\n\n   {pn} reset: reset prefix in your box chat to default",
            en: "   {pn} <new prefix>: change new prefix in your box chat"
                + "\n   Example:"
                + "\n    {pn} #"
                + "\n\n   {pn} <new prefix> -g: change new prefix in system bot (admin only)"
                + "\n   Example:"
                + "\n    {pn} # -g"
                + "\n\n   {pn} reset: reset prefix in your box chat to default"
        }
    },

    langs: {
        vi: {
            reset: "Reset your prefix to default: %1",
            onlyAdmin: "Only admin can change the system bot prefix",
            confirmGlobal: "Please react to this message to confirm changing the system bot prefix",
            confirmThisThread: "Please react to this message to confirm changing the prefix in your chat box",
            successGlobal: "Changed system bot prefix to: %1",
            successThisThread: "Changed prefix in your chat box to: %1",
            myPrefix: "🌐 System prefix: %1\n🛸 Your box chat prefix: %2"
        },
        en: {
            reset: "Your prefix has been reset to default: %1",
            onlyAdmin: "Only admin can change the system bot prefix",
            confirmGlobal: "Please react to this message to confirm changing the system bot prefix",
            confirmThisThread: "Please react to this message to confirm changing the prefix in your box chat",
            successGlobal: "Changed system bot prefix to: %1",
            successThisThread: "Changed prefix in your chat box to: %1",
            myPrefix: "🌐 System prefix: %1\n🛸 Your box chat prefix: %2"
        }
    },

    onStart: async function ({ message, role, args, commandName, event, threadsData, getLang }) {
        if (!args[0])
            return message.SyntaxError();

        if (args[0] == 'reset') {
            await threadsData.set(event.threadID, null, "data.prefix");
            return message.reply(getLang("reset", global.GoatBot.config.prefix));
        }

        const newPrefix = args[0];
        const formSet = {
            commandName,
            author: event.senderID,
            newPrefix
        };

        if (args[1] === "-g")
            if (role < 2)
                return message.reply(getLang("onlyAdmin"));
            else
                formSet.setGlobal = true;
        else
            formSet.setGlobal = false;

        return message.reply(args[1] === "-g" ? getLang("confirmGlobal") : getLang("confirmThisThread"), (err, info) => {
            formSet.messageID = info.messageID;
            global.GoatBot.onReaction.set(info.messageID, formSet);
        });
    },

    onReaction: async function ({ message, threadsData, event, Reaction, getLang }) {
        const { author, newPrefix, setGlobal } = Reaction;
        if (event.userID !== author)
            return;
        if (setGlobal) {
            global.GoatBot.config.prefix = newPrefix;
            fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
            return message.reply(getLang("successGlobal", newPrefix));
        }
        else {
            await threadsData.set(event.threadID, newPrefix, "data.prefix");
            return message.reply(getLang("successThisThread", newPrefix));
        }
    },

    onChat: async function ({ event, message, getLang }) {
        if (event.body && event.body.toLowerCase() === "prefix") {
            const systemPrefix = global.GoatBot.config.prefix;
            const boxPrefix = utils.getPrefix(event.threadID);
            const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)]; // Select a random image URL
            const attachment = await global.utils.getStreamFromURL(randomImageUrl);

            return message.reply({
                body: getLang("myPrefix", systemPrefix, boxPrefix),
                attachment
            });
        }
    }
};
