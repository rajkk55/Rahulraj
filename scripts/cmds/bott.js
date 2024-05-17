module.exports = {
	config: {
		name: "bot",
		aliases: ["botu"],
		version: "1.0",
		author: "KSHITIZ",
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of prefix",
		longDescription: "sends u pic of prefix",
		category: "boxchat",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.imgur.com/JLD2An6.png",
 ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
 body: '「 my prefix  」',attachment: await global.utils.getStreamFromURL(img)
})
}
 }