module.exports = {
	config: {
		name: "geetaqouts",
		aliases: ["gq"],
		version: "1.0",
		author: "Rahul Raj Kumar ",
		countDown: 5,
		role: 0,
		shortDescription: "send you pictures of  bhagavad Gita ",
		longDescription: "sends u picture of bhagavad gita",
		category: "image",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = ["https://i.imgur.com/DyxSjg4.jpg",

"https://i.imgur.com/4RFAabs.jpg",

"https://i.imgur.com/M8NmrWD.jpg",

"https://i.imgur.com/QmkSSM6.jpg",

"https://i.imgur.com/HpimGdU.jpg",

 "https://i.imgur.com/U02bDkU.jpg",

"https://i.imgur.com/vZrlGkP.jpg",

"https://i.imgur.com/GeRJNeZ.jpg",

"https://i.imgur.com/0eg0Xxp.jpg",

"https://i.imgur.com/9lhEeyg.jpg",

"https://i.imgur.com/AmwAc3n.jpg",

"https://i.imgur.com/kydrgTg.jpg",

"https://i.imgur.com/zXqaQDs.jpg",

"https://i.imgur.com/tDGCYur.jpg",

] 

let img = link[Math.floor(Math.random()*link.length)]
message.send({
 body: 'Geta quotes ',attachment: await global.utils.getStreamFromURL(img)
})
}
 }