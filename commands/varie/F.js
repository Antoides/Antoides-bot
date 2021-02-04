const Embed = require("embedcord");
const Discord = require("discord.js");
const { promptMessage } = require("../../functions.js");
 
const chooseArr = ["🅿"];
 
module.exports = {
    name: "F",
    description: "Press F to pay respect",
    usage: "F",
    run: async (client, message, args) => {
      const embed = new Embed.DiscordEmbed()
          .setColor('#666666')
          .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
          .setDescription("**PRESS [F] TO PAY RESPECT**")
          .setTimestamp();
      }
 
    }