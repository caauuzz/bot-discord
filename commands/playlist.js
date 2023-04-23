const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('playlist')
    .setDescription("Ouça a playlist sugerida do meu criador'"),

  async execute(interaction) {
    await interaction.reply("https://open.spotify.com/playlist/0kMPPypebsXZ4E34u209Ac?si=53b0ea9d411a4c0c");
  }
}