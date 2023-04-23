const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

const row = new ActionRowBuilder()
  .addComponents(
    new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Escolha um personagem")
      .addOptions(
        {
        label: 'Kayn',
        description: 'Veja a build do Kayn',
        value: 'kayn'
        },
        {
          label: 'Zed',
          description: 'Veja a build do Zed',
          value: 'zed'
        },
        {
          label: 'Yasuo',
          description: 'Veja a build do Yasuo',
          value: 'yasuo'
        },
        {
          label: 'Yone',
          description: 'Veja a build do Yone',
          value: 'yone'
        },
        {
          label: 'Gragas',
          description: 'Veja a build do Gragas',
          value: 'gragas'
        },
        {
          label: 'Jayce',
          description: 'Veja a build do Jayce',
          value: 'jayce'
        },
        {
          label: 'Hecarim',
          description: 'Veja a build do Hecarim',
          value: 'hecarim'
        },
        {
          label: 'Vex',
          description: 'Veja a build do Vex',
          value: 'vex'
        },
        {
          label: 'Elise',
          description: 'Veja a build do Elise',
          value: 'elise'
        },
        {
          label: 'Caitlyn',
          description: 'Veja a build do Caitlyn',
          value: 'caitlyn'
        },
      )
  )

module.exports = {
  data: new SlashCommandBuilder()
    .setName('build')
    .setDescription("Veja as 'Hot Builds' dos personagens de League Of Legends"),

  async execute(interaction) {

    await interaction.reply({
      content: `Selecione um dos personagens abaixo:`,
      components: [row]
    });
  }
}