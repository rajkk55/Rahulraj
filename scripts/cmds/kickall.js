module.exports.config = {
  name: "kickall",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Khánh Milo",
  description: "Kick out all the members inside the group.",
  commandCategory: "group",
  usages: "[]",
  cooldowns: 3,
  usePrefix: true
};

module.exports.onStart = async function({ api, event }) {
  try {
    const threadInfo = await api.getThreadInfo(event.threadID);
    const participantIDs = threadInfo.participantIDs;
    
    for (let userID of participantIDs) {
      if (userID !== api.getCurrentUserID()) {
        await api.removeUserFromGroup(userID, event.threadID);
        await sleep(3000); // Wait for 3 seconds between each removal to avoid rate limits
      }
    }
    
    return api.sendMessage("All members have been kicked from the group.", event.threadID);
  } catch (error) {
    console.error(error);
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}