const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

// dotenv
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

// Importação dos comandos
const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(`Esse comando em ${filePath} está com "data" ou "execute" ausentes.`)
  }
}

// Login do Bot
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado com sucesso como ${c.user.tag}`);
});

client.login(TOKEN);

// Listener de interações com o bot
client.on(Events.InteractionCreate, async interaction => {
  if (interaction.isStringSelectMenu()) {
    const selected = interaction.values[0];

    switch (selected) {
      //#region League Of Legends - Builds
      case 'caitlyn':
        await interaction.reply("https://u.gg/lol/champions/caitlyn/build")
        break;
      case 'elise':
        await interaction.reply("https://u.gg/lol/champions/elise/build")
        break;
      case 'gragas':
        await interaction.reply("https://u.gg/lol/champions/gragas/build")
        break;
      case 'hecarim':
        await interaction.reply("https://u.gg/lol/champions/hecarim/build")
        break;
      case 'jayce':
        await interaction.reply("https://u.gg/lol/champions/jayce/build")
        break;
      case 'kayn':
        await interaction.reply("https://u.gg/lol/champions/kayn/build")
        break;
      case 'vex':
        await interaction.reply("https://u.gg/lol/champions/vex/build")
        break;
      case 'yasuo':
        await interaction.reply("https://u.gg/lol/champions/yasuo/build")
        break;
      case 'yone':
        await interaction.reply("https://u.gg/lol/champions/yone/build")
        break;
      case 'zed':
        await interaction.reply("https://u.gg/lol/champions/zed/build")
        break;
      case 'yorick':
        await interaction.reply("https://u.gg/lol/champions/yorick/build")
        break;
      case 'aurelionsol':
        await interaction.reply("U.GG: https://u.gg/lol/champions/aurelionsol/build\nMobafire: https://www.mobafire.com/league-of-legends/build/13-7-vicksys-reworked-master-asol-guide-529167")
        break;
      case 'veigar':
        await interaction.reply("U.GG: https://u.gg/lol/champions/veigar/build\nMobafire: https://www.mobafire.com/league-of-legends/build/patch-13-8-my-veigars-build-all-matchups-607093")
        break;
      case 'lissandra':
        await interaction.reply("U.GG: https://u.gg/lol/champions/lissandra/build\nMobafire: https://www.mobafire.com/league-of-legends/build/new-season-13-updated-13-8-the-midlane-ice-queen-of-death-603019")
        break;
      //#endregion
      
      //#region Documentação das Linguagens
      case 'javascript':
        await interaction.reply("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
        break;
      case 'python':
        await interaction.reply("https://www.python.org/doc/")
        break;
      case 'csharp':
        await interaction.reply("Documentação do C#: https://learn.microsoft.com/en-us/dotnet/csharp/")
        break;
      case 'discordjs':
        await interaction.reply("https://discordjs.guide/#before-you-begin")
        break;
      //#endregion
    }
  }
  
  if (!interaction.isChatInputCommand()) return
  // Debug para saber quem mandou as mensagens
  //console.log(interaction);
  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) {
    console.error(`Comando não encontrado!`);
    return;
  }
  try {
    await command.execute(interaction);
  } catch(error) {
    console.error(error);
    await interaction.reply(`Houve um erro ao executar esse comando!`);
  }
});