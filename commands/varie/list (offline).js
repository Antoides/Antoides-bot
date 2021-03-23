module.exports = {
    name: "lista",
    aliases: ["list"],
    category: "message",
    description: "Lista dei comandi",
	run: async (client, message, args) => {
	
        deleteAmount = 1
        message.channel.bulkDelete(deleteAmount, true)
        
        .then(message.channel.send(message.author.toString()+"**, la lista dei comandi è questa:\n %ban @utente : Banna l'utente taggato \n %clear : Elimina i messaggi \n %kick @utente : kicka l'utente taggato \n %list : Lista dei comandi \n %minigame : Carta forbice sasso \n %stato : Stato del bot**"))

  }
};