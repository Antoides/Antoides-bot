const Embed = require("embedcord");
const randomPuppy = require("random-puppy");
 
module.exports = {
    name: "Meme",
    description: "Manda una meme",
    run: async (client, message, args) => {
 
       const subReddits = ["memes", "dankmemes", "lol"];
       const random = subReddits[Math.floor(Math.random() * subReddits.length)];
 
       const img = await randomPuppy(random);
       const embed = new Embed.DiscordEmbed()
           .setURL(`https://reddit.com/r/${random}`)
           .setColor("RANDOM")
           .setImage(img)
           .setTitle(`Tieni questa meme bella ಠ_ಠ`);
 
       message.channel.send(embed);
 
    }
 
 
}