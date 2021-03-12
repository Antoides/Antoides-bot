module.exports = {
    name: "lista",
    aliases: ["list"],
    category: "message",
    description: "Lista dei comandi",
	run: async (client, message, args) => {
	
        deleteAmount = 1
        message.channel.bulkDelete(deleteAmount, true)
        
        .then(message.channel.send(message.author.toString()+"**, la lista dei comandi è questa: \n %minigame : Carta forbice sasso \n %ciao : My name is Giovanni Giorgio, but everybody call me Giorgio \n %coffin : Coffin dance earrape \n %dance : Dancin \n %disconnect : Disconnette il bot \n %clear : Elimina i messaggi \n %list : Lista dei comandi \n %play : Autodistuzione \n %stato : Stato del bot \n %stop : Stacca, stacca \n %zucchina : Mi piace la zucchina \n %2007 : Giorgio e le 2007**"))

  }
};