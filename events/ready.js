const { ActivityType } = require('discord.js')

module.exports = async (client) => {
  const config = require("../config.json");
  const activities = [
    `${config.prefix}help.`,
    `${client.users.cache.size} usuários`,
  ]
  let i = 0
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: ActivityType.Listening,
  }), 10000)

  console.log(`📗log ${client.user.username}Bot 🟢 Online!🔥`);
  console.log(`📗log Há ${client.users.cache.size} usuários online no servidor!`);
  
  client.user.setStatus('online')
    // .catch(console.log)
}