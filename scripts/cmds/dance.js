const axios = require('axios');

module.exports = {
	config: {
		name: "dance2",
		version: "1.0",
		author: "Rahul Raj",
		countDown: 5,
		role: 0,
		shortDescription: "Dance",
		longDescription: "Anime Dance",
		category: "anime",
		guide: "{pn}"
	},

	onStart: async function ({ message, args }) {
			const BASE_URL = `https://apiservice1.kisara.app/satou/api/endpoint/dance`;
 message.reply(" "); 
			try {
				let res = await axios.get(BASE_URL)
				let dance = res.data.url;
				const form = {
					body: ``
				};
		 if (dance)
					form.attachment = await global.utils.getStreamFromURL(dance);
				message.reply(form); 
			} catch (e) { message.reply(`An Error Occured While Processing Your Request.`)
 console.log(e);
 }

		}
	};