const Discord = require("discord.js")
const config = require('../config.json')
const color = config.color;

module.exports = {
  name: "ping",
  aliases: ["ms", "latencia"],
  
  run: async(client, message, args) => {

    let embed = new Discord.EmbedBuilder()
    .setColor(color)
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
    .setDescription(`🏓Pong! Olá ${message.author}, seu ping está em: \`calculando...\`.`);

    let embed2 = new Discord.EmbedBuilder()
    .setColor(color)
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
    .setDescription(`🏓Pong! Olá ${message.author}, seu ping está em: \`${client.ws.ping}ms\`.`);

    message.reply({ embeds: [embed] }).then(msg => {
        setTimeout( () => {
            msg.edit({ embeds: [embed2] })
        }, 1000)
    })
  }
};

/*
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong, seu arrombado!');
	},
};
*/