module.exports = {
    name: "play",
    aliases: ["p"],
    category: "voice",
    description: "Lancia una nuke indiana",
	run: async (client, message, args) => {
	
        deleteAmount = 1
        message.channel.bulkDelete(deleteAmount, true)
  }
};