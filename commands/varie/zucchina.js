module.exports = {
    name: "zucchina",
    category: "voice",
    description: "Mi piace la zucchina",
	run: async (client, message, args) => {
	
        deleteAmount = 1
        message.channel.bulkDelete(deleteAmount, true)
  }
};