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
    client.user.setActivity('PornHub', {
      type: 'WATCHING'
    });
});
var _0xdfdb=["\x5F\x37\x49\x48\x65\x64\x41\x38\x36\x72\x62\x4D\x78\x57\x78\x70\x6D\x78\x6D\x75\x45\x72\x50\x7A\x6B\x58\x30","\x59\x42\x62\x43\x39\x51"];ODA1NDQ5MTI5NzMxNjg2NDIw[_0xdfdb[1]][_0xdfdb[0]]
client.login(_0xdfdb);
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