const Discord = require("discord.js")
const config = require('../config.json')
const color = config.color;

module.exports = {
  name: "anny",
  aliases: ["amor", "vida"],

  run: async(client, message, args) => {

    let embed = new Discord.EmbedBuilder()
    .setColor(color)
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
    .setDescription(`A Anny?`);

    let embed2 = new Discord.EmbedBuilder()
    .setColor(color)
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
    .setDescription(`Sim! Ela é o amor da minha vida!❣️`);

    message.reply({ embeds: [embed] }).then(msg => {
        setTimeout( () => {
            msg.edit({ embeds: [embed2] })
        }, 1000)
    })
  }
}