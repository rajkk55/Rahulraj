module.exports = {
	config: {
		name: "motu patlu",
		aliases: ["mp"],
		version: "1.0",
		author: "KSHITIZ",
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of motu",
		longDescription: "sends u pic of patlu",
		category: "image",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.imgur.com/rkd3I1m.jpg",
 ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
 body: '「 motu aur patlu ki jodi  」',attachment: await global.utils.getStreamFromURL(img)
})
}
 }