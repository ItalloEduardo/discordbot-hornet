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
[✅Concluídos |🔃Em processo/Postergados |🆘Tá nas mãos de Deus.]
> Colocar bot Online: ✅
> Organizar Handler: ✅
> Organizar Subpastas: 🆘 loadCommands()
> Finalizar funções: ✅
> Comando join: 🔃
> Comando play: 🔃
> Comando stop: 🔃
> Comando next: 🔃
> Comando back: 🔃
> Comando pause: 🔃
> Comando queue: 🔃
> Comando clear: 🔃
> Comando random: 🔃
> Comando search: 🔃
> Comando prefix: 🔃
> Comando disconnect: 🔃
> Fila de Reprodução: 🔃
> Compatibilidade com YouTube: 🔃
> Compatibilidade com Spotify: 🆘
/*/
/*/--------------------------------------------------------------/*/