module.exports = {
    name: "disconnect",
    category: "voice",
    description: "Disconnect",
	run: async (client, message, args) => {
	
        deleteAmount = 1
        message.channel.bulkDelete(deleteAmount, true)
  }
};