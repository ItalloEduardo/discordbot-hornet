//const { joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice');
const config = require('../config.json')
const color = config.color;
// Hornet\node_modules\discord.js\src\structures\BaseGuildVoiceChannel.js
// Hornet\node_modules\discord.js\src\structures\VoiceChannel.js
// Hornet\node_modules\discord.js\src\structures\VoiceState.js
module.exports = {
  name: "join",
  aliases: ["entrar", "j"],
  
  run: async(client, message, args) => {
    const channel = client.channels.cache.get("1009509530717147231");
    const user = message.author

    if(channel.type !== 'voice') return message.channel.send('This is not a voice channel!');
    // if (!channel) return console.error("❌O canal não existe!");
    //   channel.join().then(c => {
    //   console.log("Conectado✅.");
    // })
  }
};

// Check if the channel is a voice channel

//------------------------------------------------------
    /*if (getVoiceConnection(user.myVoiceChannel.guild.id)){ 
      connection = await user.myVoiceChannel.guild.id.join();
      
      let embed = new Discord.EmbedBuilder()
      .setColor(color)
      .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
      .setDescription(`${user}, entrei!📻⚡`);
    
      message.reply({ embeds: [embed] });

    } else {
      let embed = new Discord.EmbedBuilder()
      .setColor(color)
      .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
      .setDescription(`${user}, você precisa estar em um canal de voz!🤦🏻‍♀️👌🏻`);
    
      message.reply({ embeds: [embed] });
    }*/
//------------------------------------------------------
    //const connection = getVoiceConnection(user.myVoiceChannel.guild.id)
    //connection.joinVoiceChannel();

// checar serverinfo do projeto A
// message.author.user.id [captura id de quem mandou a mensagem]
/* if (message.member.permissions.missing('ADMINISTRATOR')) return;
const channels = message.guild.channels.filter(c => c.parentID === '497908108803440653' && c.type === 'voice');

for (const [channelID, channel] of channels) {
  for (const [memberID, member] of channel.members) {
    member.setVoiceChannel('497910775512563742')
      .then(() => console.log(`Moved ${member.user.tag}.`))
      .catch(console.error);
  }
}*/