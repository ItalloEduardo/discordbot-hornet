const Discord = require('discord.js');
const { Collection } = require('discord.js');
const client = new Discord.Client({ intents: [1, 512, 32768, 2, 128] })
const { loadCommands, loadEvents } = require('./utils');
const {token} = require('./config.json');
client.login(token);

client.commands = new Collection();
client.aliases = new Collection();

loadCommands(client, './commands');
loadEvents('./events', client);
/*/--------------------------------------------------------------/*/
/*/
[βConcluΓ­dos |πEm processo/Postergados |πTΓ‘ nas mΓ£os de Deus.]
> Colocar bot Online: β
> Organizar Handler: β
> Organizar Subpastas: π loadCommands()
> Finalizar funΓ§Γ΅es: β
> Comando join: π
> Comando play: π
> Comando stop: π
> Comando next: π
> Comando back: π
> Comando pause: π
> Comando queue: π
> Comando clear: π
> Comando random: π
> Comando search: π
> Comando prefix: π
> Comando disconnect: π
> Fila de ReproduΓ§Γ£o: π
> Compatibilidade com YouTube: π
> Compatibilidade com Spotify: π
/*/
/*/--------------------------------------------------------------/*/