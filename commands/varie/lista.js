module.exports = {
    name: "lista",
    aliases: ["list"],
    category: "messaggi",
    description: "Mostra la lista dei comandi",
    run: async (client, message, args) => {
     
      if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("**Lista comandi: %meme (manda un meme), %clear (elimina i messaggi), %list (lista dei comandi), %minigame (carta forbice sasso)**")
      }
    }
};