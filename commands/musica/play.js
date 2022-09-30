const Discord = require("discord.js")
const config = require('../config.json')
const color = config.color;

module.exports = {
  name: "play",
  aliases: ["p"],
  
  run: async(client, message, args) => {

    let embed = new Discord.EmbedBuilder()
    .setColor(color)
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
    .setDescription(`dale chefe, tamo funcionandinhos😎👌🏻`);

    message.reply({ embeds: [embed] });
  }
};