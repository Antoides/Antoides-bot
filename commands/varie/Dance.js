module.exports = {
    name: "dance",
    category: "voice",
    description: "Dancin",
	run: async (client, message, args) => {
	
        deleteAmount = 1
        message.channel.bulkDelete(deleteAmount, true)
  }
};