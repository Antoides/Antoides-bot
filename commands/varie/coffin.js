module.exports = {
    name: "coffin",
    category: "voice",
    description: "Coffin dance earrape",
	run: async (client, message, args) => {
	
        deleteAmount = 1
        message.channel.bulkDelete(deleteAmount, true)
  }
};