const fs = require('fs');

module.exports = {
  config: {
    name: "Demo",
    version: "2.1.3",
    hasPermission: 0,
    credits: "Hazeyy",
    description: "( 𝙂𝙋𝙏-4 𝙑𝙤𝙲𝙚 𝙭 𝙄𝙢𝙖𝙜𝙚 𝙧𝙚𝙘𝙤𝙜𝙣𝙞𝙩𝙞𝙤𝙞𝙤𝙞𝙥𝙙 )",
    commandCategory: "your_prefix_here", // Add your prefix here
    prefix: "your_prefix_here", // Add your prefix here
    usages: "( Model-v3 Demo GPT-4 )",
    cooldowns: 3,
  },
  
  formatFont: function(text) {
    // ... (your existing code)
  },
  
  convertImageToText: async function(imageURL) {
    // ... (your existing code)
  },
  
  handleEvent: async function ({ api, event, prefix }) {
    if (!event.body.startsWith(prefix + "demo") && !event.body.startsWith(prefix + "Demo")) return;
  
    const { threadID, messageID, type, messageReply, body } = event;
  
    let question = '';
    let hasImage = false;
  
    if (type === 'message_reply') {
      if (messageReply?.attachments[0]?.type === 'photo') {
        hasImage = true;
        const attachment = messageReply.attachments[0];
        const imageURL = attachment.url;
        question = await this.convertImageToText(imageURL);
  
        if (!question) {
          api.sendMessage('❗ 𝖴𝗇𝖺𝖻𝗅𝖾 𝗍𝗈 𝖼𝗈𝗇𝗏𝖾𝗋𝗍 𝗍𝗁𝖾 𝗉𝗁𝗈𝗍𝗈, 𝗉𝗅𝖾𝖺𝗌𝖾 𝖾𝗇𝗌𝗎𝗋𝖾 𝗂𝗆𝖺𝗀𝖾𝗌 𝖺𝗋𝖾 𝖼𝗅𝖾𝖺𝗋 𝖻𝖾𝖿𝗈𝗋𝖾 𝗌𝖾𝗇𝖾𝗂𝗇𝗀.', threadID, messageID);
          return;
        }
      } else {
        question = messageReply?.body?.trim() || '';
      }
    } else { 
      question = body.slice((prefix + "demo").length).trim();
    }
  
    if (!question) {
      api.sendMessage("𝖧𝖾𝗅𝗅👋, 𝖨 𝖺𝗆 𝖬𝗈𝖾𝗅-𝖼3 𝖣𝖾𝗆𝗈 𝖦𝖯𝖳-4, 𝖣𝖾𝗌𝗂𝗀𝗇 𝖺𝗇𝖽 𝗋𝖾𝗆𝗈𝖉𝖾𝖽 𝖻𝗒 𝖧𝖺𝗓𝖾𝗒𝗒. \n\n𝖧𝗈𝗐 𝖼𝖺𝗇 𝗂 𝖺𝗌𝗌𝗂𝗌𝗍 𝗒𝗈𝗎 𝗍𝗈𝖺𝗎?", threadID);
      return;
    }
  
    try {
      api.sendTypingIndicator(event.threadID);
  
      api.sendMessage('🗨️ | 𝖣𝖾𝗆𝗈 𝖦𝖯𝖳-4 𝗂𝗌 𝗍𝗁𝗂𝗇𝗄𝗂𝗇𝗀...', event.threadID);
  
      const response = await axios.get(`https://hazeyy-gpt4-api.kyrinwu.repl.co/api/gpt4/v-3beta?content=${encodeURIComponent(question)}`);
  
      const reply = response.data.reply;
  
      if (reply.trim() !== "") {
        const formattedReply = this.formatFont(reply);
  
        const gttsService = new gtts(formattedReply, 'en');
        gttsService.save('gpt4_response.mp3', function () {
          api.sendMessage(`🤖 𝗚𝗣𝗧-4 ( 𝗗𝗲𝗺𝗼 )\n\n🗨️: ${formattedReply}\n\n𝖨 𝗁𝗈𝗉𝖾 𝗂𝗍 𝗁𝖾𝗅𝗉𝗌 ✨`, event.threadID);
  
          api.sendMessage(
            {
              attachment: fs.createReadStream('gpt4_response.mp3'),
              body: '🔊 𝗗𝗲𝗺𝗼 𝗚𝗣𝗧-4 ( 𝗩𝗼𝗶𝗰𝗲 )',
              mentions: [
                {
                  tag: 'GPT-4 Response',
                  id: api.getCurrentUserID(),
                },
              ],
            },
            event.threadID
          );
        });
      } else {
        api.sendMessage("🤖 𝗗𝗲𝗺𝗼 𝗚𝗣𝗧-4 𝗰𝗼𝘂𝗹𝗱𝗻'𝘁 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝘁𝗼 𝘆𝗼𝘂𝗿 𝗾𝘂𝗲𝗿𝘆.", event.threadID);
      }
    } catch (error) {
      console.error(error);
      api.sendMessage("🔴 𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗲𝗱. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿.", event.threadID);
    }
  },
  
  onStart: async function ({ api, event }) {}
};
