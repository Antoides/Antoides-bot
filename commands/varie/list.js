const { readdirSync } = require("fs");
 
const ascii = require("ascii-table");

module.exports = {
    name: "lista",
    aliases: ["list"],
    category: "messaggi",
    description: "Mostra la lista dei comandi",
    run: async (client, message, args) => {
	  var msgs = "I comandi del bot sono:\n";
      readdirSync("/app/commands/").forEach(dir => {
        const commands = readdirSync(`/app/commands/${dir}/`).filter(file => file.endsWith(".js"));
		for (let file of commands) {
			let pull = require(`/app/commands/${dir}/${file}`);
			var cmd = pull.name[0];
			var desc = pull.description;
			var msgs = msgs + "%" + cmd + ": " + desc + "\n";
		}
      });
      return message.reply(msgs)
    }
};
