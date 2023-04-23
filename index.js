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
    if (selected == "javascript") {
      await interaction.reply("Documentação do Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript")
    } else if (selected == "python") {
      await interaction.reply("Documentação do Python: https://www.python.org/doc/")
    }
    else if (selected == "csharp") {
      await interaction.reply("Documentação do C#: https://learn.microsoft.com/en-us/dotnet/csharp/")
    }
    else if (selected == "discordjs") {
      await interaction.reply("Documentação do Discord.js: https://discordjs.guide/#before-you-begin")
    } 
    // Build
    else if (selected == "kayn") {
      await interaction.reply("https://u.gg/lol/champions/kayn/build")
    }
    else if (selected == "zed") {
      await interaction.reply("https://u.gg/lol/champions/zed/build")
    }
    else if (selected == "yasuo") {
      await interaction.reply("https://u.gg/lol/champions/yasuo/build")
    }
    else if (selected == "yone") {
      await interaction.reply("https://u.gg/lol/champions/yone/build")
    }
    else if (selected == "gragas") {
      await interaction.reply("https://www.mobafire.com/league-of-legends/champion/gragas-45")
    }
    else if (selected == "jayce") {
      await interaction.reply("https://www.mobafire.com/league-of-legends/champion/jayce-100")
    }
    else if (selected == "hecarim") {
      await interaction.reply("https://u.gg/lol/champions/hecarim/build")
    }
    else if (selected == "vex") {
      await interaction.reply("https://u.gg/lol/champions/vex/build")
    }
    else if (selected == "elise") {
      await interaction.reply("https://u.gg/lol/champions/elise/build")
    }
    else if (selected == "caitlyn") {
      await interaction.reply("https://u.gg/lol/champions/caitlyn/build")
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