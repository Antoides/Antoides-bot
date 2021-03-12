module.exports = {
    name: "ciao",
    category: "voice",
    description: "My name is Giovanni Giorgio, but everybody call me Giorgio",
	run: async (client, message, args) => {
	
        deleteAmount = 1
        message.channel.bulkDelete(deleteAmount, true)
  }
};