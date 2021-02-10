module.exports = {
    name: "play",
    aliases: ["p"],
    category: "voice",
    description: "Lancia una nuke indiana",
	run: async (client, message, args) => {
	
	if (message.content == "%play") {
    const voiceChannel = message.member.voice.channel;
    if (voiceChannel) {
        voiceChannel.join()
            .then(connection => {
                connection.play('loud indian music (lol mega earrape)(MP3_160K).mp3'); //Scrivere il nome del file audio nella cartella o il path
            });
    else {
        message.channel.send("Entra in una chat vocale, coglione"); //Messaggio se l'utente non è in nessun canale vocale
    }
}
}
}
}