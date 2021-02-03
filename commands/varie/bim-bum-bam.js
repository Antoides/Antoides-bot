const Embed = require("embedcord");
const Discord = require("discord.js");
const { promptMessage } = require("app/functions.js");
 
const chooseArr = [":hand_splayed:", ":v:", ":punch:"];
 
module.exports = {
    name: "minigame",
    description: "Carta forbice sasso",
    usage: "minigame",
    run: async (client, message, args) => {
      const embed = new Embed.DiscordEmbed()
          .setColor('#666666')
          .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
          .setDescription("**Scegli tra carta, forbice o sasso**")
          .setTimestamp();
 
      const m = await message.channel.send(embed);
      const reacted = await promptMessage(m, message.author, 30, chooseArr);
 
      const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)]
 
      const result = await getResult(reacted, botChoice)
 
      embed
          .setDescription("GAME OVER! PARTITA FINITA!")
          .addField(result, `${reacted} vs ${botChoice}`);
 
      m.edit(embed);
 
      function getResult(me, clientChosen) {
         if ((me === ":hand_splayed:" && clientChosen === ":punch:") ||
            (me === ":punch:" && clientChosen === ":v:") ||
            (me === ":v:" && clientChosen === ":hand_splayed:")) {
                return "**Hai vinto** ora me lo puoi appoggiare!";
         } else if (me === clientChosen) {
             return "Pareggio";
         } else {
             return "Hai perso, ora te lo appoggio";
         }
 
 
 
            }
      }
 
    }