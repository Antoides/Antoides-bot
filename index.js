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
    client.user.setActivity('%list', {
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
                connection.play('Autodistruzione.mp3'); //Scrivere il nome del file audio nella cartella o il path 
 });
	}
    else {
        message.channel.send("Devi entrare in una chat vocale"); //Messaggio se l'utente non è in nessun canale vocale
    }
}
})

client.on("message", (message) => {
	if (message.content == "%ciao") {
    const voiceChannel = message.member.voice.channel;
    if (voiceChannel) {
        voiceChannel.join()
            .then(connection => {
                connection.play('Giorgio.mp3'); //Scrivere il nome del file audio nella cartella o il path
            });
	}
    else {
        message.channel.send("Devi entrare in una chat vocale"); //Messaggio se l'utente non è in nessun canale vocale
    }
}
})

client.on("message", (message) => {
	if (message.content == "%stop") {
    const voiceChannel = message.member.voice.channel;
    if (voiceChannel) {
        voiceChannel.join()
            .then(connection => {
                connection.play('Stacca.mp3');
            });
	}
    else {
        message.channel.send("Devi entrare in una chat vocale");
    }
}
})

client.on("message", (message) => {
	if (message.content == "%dance") {
    const voiceChannel = message.member.voice.channel;
    if (voiceChannel) {
        voiceChannel.join()
            .then(connection => {
                connection.play('Dance.mp3'); //Scrivere il nome del file audio nella cartella o il path
            });
	}
    else {
        message.channel.send("Devi entrare in una chat vocale");
    }
}
})

client.on("message", (message) => {
	if (message.content == "%disconnect") {
    const voiceChannel = message.member.voice.channel;
    if (voiceChannel) {
        voiceChannel.leave()
	}
    else {
        message.channel.send("Devi entrare in una chat vocale");
    }
}
})

client.on("message", (message) => {
	if (message.content == "%zucchina") {
    const voiceChannel = message.member.voice.channel;
    if (voiceChannel) {
        voiceChannel.join()
            .then(connection => {
                connection.play('zucchina.mp3'); //Scrivere il nome del file audio nella cartella o il path
            });
	}
    else {
        message.channel.send("Devi entrare in una chat vocale");
    }
}
})

client.on("message", (message) => {
	if (message.content == "%coffin") {
    const voiceChannel = message.member.voice.channel;
    if (voiceChannel) {
        voiceChannel.join()
            .then(connection => {
                connection.play('coffin.mp3'); //Scrivere il nome del file audio nella cartella o il path
            });
	}
    else {
        message.channel.send("Devi entrare in una chat vocale");
    }
}
})

client.on("message", (message) => {
	if (message.content == "%2007") {
    const voiceChannel = message.member.voice.channel;
    if (voiceChannel) {
        voiceChannel.join()
            .then(connection => {
                connection.play('xan.mp3'); //Scrivere il nome del file audio nella cartella o il path
            });
	}
    else {
        message.channel.send("Devi entrare in una chat vocale");
    }
}
})