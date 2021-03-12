module.exports = {
    name: "stop",
    category: "voice",
    description: "Stacca Stacca, ci stanno tracciando",
	run: async (client, message, args) => {
	
        deleteAmount = 1
        message.channel.bulkDelete(deleteAmount, true)
  }
};