const Discord = require('discord.js');
const config = require("../config.json");
const prefix = config.prefix;

module.exports = async (client, message) => {

  if(message.author.bot) return;
  if(message.channel.type === Discord.ChannelType.DM) return;
  if(message.content.indexOf(prefix) !== 0) return;
  if(!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g)
  
  let cmd = args.shift().toLowerCase()
  if(cmd.length === 0) return;
  let command = client.commands.get(cmd)
  if(!command) command = client.commands.get(client.aliases.get(cmd));
  if(!command) return;

  console.log(
  '📙log',
  `👤${message.author.username} executou o comando: ${cmd}`
  );

  try {
    command.run(client, message, args)
    } catch (err) { 
    console.error('📕Erro:' + err); 
  }
}