const { Client, Collection } = require('discord.js');
const { config } = require("dotenv");
const fs = require("fs");
 
const client = new Client({
    disableEveryone: true
});
 
client.commands = new Collection();
client.aliases = new Collection();
 
client.categories = fs.readdirSync("./commands/");
 
config({
    path: __dirname + "/.env"
});
 
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
 
client.on("ready", () => {
    console.log(`I am now connected to discord with account: ${client.user.username}!`);
    client.user.setActivity('%stato', {
		type: 'WATCHING'
	});
});

client.login(process.env.TOKEN)
client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
 
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
 
   if(!command.startsWith('%')) return;
 
});
 
client.on("message", async message => {
    const prefix = "%";
 
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
 
    if (cmd.length === 0) return;
 
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
 
    if (command)
        command.run(client, message, args);
});

client.on("message", (message) => {
	if (message.content == "%play") {
    const voiceChannel = message.member.voice.channel;
    if (voiceChannel) {
        voiceChannel.join()
            .then(connection => {
                connection.play('loud indian music (lol mega earrape)(MP3_160K).mp3'); //Scrivere il nome del file audio nella cartella o il path
            });
	}
    else {
        message.channel.send("Devi entrare in una chat vocale"); //Messaggio se l'utente non è in nessun canale vocale
    }
}
})