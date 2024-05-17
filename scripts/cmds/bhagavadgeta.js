const fs = require('fs');require('fs')
 
module.exports = {
 config: {
 name: "bhagavadgeeta",// cmd name slok // cmd name chapter
 version: "1.0",
 author: "KSHITIZ",//kar bhai kar chng kar
 countDown: 5,
 role: 0,
 shortDescription: "This cmd will send you chapter or slok of bhagwat geta",
 longDescription: "please choose either slok or chapter // like bhagwat geeta slok // or bhagwatgeeta chapter",
 category: "god",
 guide: {
 en: ""
 }
 },
 
 onStart: async function ({ api, args, message }) {
 
 const [arg1] = args;
 
 if (!arg1) {
 message.reply("If you want to read slok type {prefix} bhagwatgeeta slok // or if you want to read chapter type bhagwatgeeta chapter");
 return;
 }
 
 if (arg1.toLowerCase() === 'slok') {
 const slokQuestions = JSON.parse(fs.readFileSync(`${__dirname}/assist_json/SLOK.json`));
 const randomIndex = Math.floor(Math.random() * slokQuestions.length);
 const randomQuestion = slokQuestions[randomIndex];
 
 message.reply(`Random slok:- ${randomQuestion}`);
 } else if (arg1.toLowerCase() === 'chapter') {
 const chapterChallenges = JSON.parse(fs.readFileSync(`${__dirname}/assist_json/CHAPTER.json`));
 const randomIndex = Math.floor(Math.random() * chapterChallenges.length);
 const randomChallenge = chapterChallenges[randomIndex];
 
 message.reply(`random chapter:- ${randomChallenge}`);
 } else {
 message.reply("Invalid input.");
 }
 }
};