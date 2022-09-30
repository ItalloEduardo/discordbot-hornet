const { readdirSync, lstatSync } = require('fs');

function loadCommands(client, directory) {
  const cmdFiles = readdirSync(directory);
  
  console.log('📘log', `Carregando o total de ${cmdFiles.length} comandos em ${directory}`);
  
  for (const file of cmdFiles) {
    const puxar = require(`${directory}/${file}`) 

    try {
      if (file.endsWith('.js')) {
        console.log('📘log', `Carregando comando: ${puxar.name}✅`)

        client.commands.set(puxar.name, puxar)

        if(puxar.aliases && Array.isArray(puxar.aliases)){
          puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
        }
      } else if (lstatSync(puxar).isDirectory()){
          loadCommands(client, puxar)
      } // `./commands/${puxar}` tb n funciona
    } catch (e) {
      console.error(`📕log Não foi possível carregar o comando ${file}: ❌ERRO: ${e}`)
    }
  }
}

// carregar os arquivos de eventos
  function loadEvents(directory, client) {
    const eventFiles = readdirSync(directory)
    console.log('📘log', `Carregando o total de ${eventFiles.length} eventos`)
    for (const file of eventFiles) {
      const eventName = file.split('.')[0]
      const event = require(`./events/${file}`)

      try {
        client.on(eventName, event.bind(null, client))
      } catch (error) {
        console.error(`📕log Não foi possível carregar o evento ${eventName}: error`)
      }
    }
  }

exports.loadEvents = loadEvents 
exports.loadCommands = loadCommands