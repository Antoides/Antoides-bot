module.exports = {
    name: "lista",
    aliases: ["list"],
    category: "message",
    description: "Lista dei comandi",
	run: async (client, message, args) => {
	
        deleteAmount = 1
        message.channel.bulkDelete(deleteAmount, true)
        
        .then(message.channel.send(message.author.toString()+"**, la lista dei comandi è questa: \n %clear : Elimina i messaggi \n %list : Lista dei comandi \n %minigame : Carta forbice sasso \n %stato : Stato del bot**"))

  }
};