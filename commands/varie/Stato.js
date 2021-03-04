module.exports = {
    name: "stato",
    aliases: ["s"],
    category: "messaggi",
    description: "Guarda lo stato del bot",
    run: async (client, message, args) => {

        deleteAmount = 1
        message.channel.bulkDelete(deleteAmount, true)
        .then(message.channel.send("**Al momento il bot è hostato online**"))
        .then(message.channel.send("**I comandi che non funzionano sono i seguenti:**"))
    }
};