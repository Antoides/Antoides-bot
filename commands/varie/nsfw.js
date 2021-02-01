const Embed = require("embedcord");
const randomPuppy = require("nsfw bello");
 
module.exports = {
    name: "nsfw",
    description: "Manda un nsfw",
    run: async (client, message, args) => {
 
       const subReddits = ["", "", ""];
       const random = subReddits[Math.floor(Math.random() * subReddits.length)];
 
       const img = await randomPuppy(random);
       const embed = new Embed.DiscordEmbed()
           .setURL(`https://reddit.com/r/${random}`)
           .setColor("RANDOM")
           .setImage(img)
           .setTitle(`Tieni questo NSFW ಠ_ಠ`);
 
       message.channel.send(embed);
 
    }
 
 
}