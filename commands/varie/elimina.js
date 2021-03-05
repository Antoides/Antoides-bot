module.exports = {
    name: "cancella",
    aliases: ["clear"],
    category: "messaggi",
    description: "Cancella i messaggi",
    run: async (client, message, args) => {
      if (message.deletable) {
          message.delete();
      }
 
      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
          return message.reply("**Non puoi eliminare i messaggi altrui!!!**")
      }
 
      if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.reply("**Devi mettere un numero di messaggi**")
      }
 
      let deleteAmount;
 
      let deleteAmountNumber = 0;
 
 
      if (parseInt(args [0]) > 100) {
          deleteAmount = 100;
      } else {
          deleteAmount = parseInt(args[0]);
      }
 
      message.channel.bulkDelete(deleteAmount, true)
    }
};