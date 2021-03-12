module.exports = {
    name: "2007",
    category: "voice",
    description: "Giorgio e le 2007",
	run: async (client, message, args) => {
	
        deleteAmount = 1
        message.channel.bulkDelete(deleteAmount, true)
  }
};