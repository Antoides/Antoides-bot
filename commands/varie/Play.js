module.exports = {
    name: "Play",
    aliases: ["p"],
    category: "voice",
    description: "Lancia una nuke indiana",
	run: async (client, message, args) => {
	
	message.channel.bulkDelete
          .catch(err => message.reply("**ERRORE**"))
          .then(message.channel.send("Nuke indiana in arrivo"))
	
	}
	
}