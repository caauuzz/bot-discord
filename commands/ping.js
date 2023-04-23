const Discord = require("discord.js");
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription("Responde com um 'Pong!'"),

  async execute(interaction) {
    await interaction.reply("Pong!");
  }
}