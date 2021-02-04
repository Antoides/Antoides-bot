const { readdirSync } = require("fs");
 
const ascii = require("ascii-table");

module.exports = {
    name: "lista",
    aliases: ["list"],
    category: "messaggi",
    description: "Mostra la lista dei comandi",
    run: async (client, message, args) => {
	
	  var msgs = "I comandi del bot sono:\n";
      readdirSync("../../commands/").forEach(dir => {
        const commands = readdirSync(`../../commands/varie/${dir}/`).filter(file => file.endsWith(".js"));
		for (let file of commands) {
			let pull = require(`../../commands/varie/${dir}/${file}`);
			var cmd = pull.aliases[0];
			var desc = pull.description;
			var msgs = cmd + ": " + desc + "\n";
		}
      });
      return message.reply(msgs)
    }
};