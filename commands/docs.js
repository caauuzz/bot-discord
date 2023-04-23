const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

const row = new ActionRowBuilder()
  .addComponents(
    new StringSelectMenuBuilder()
      .setCustomId("select")
      .setPlaceholder("Selecione uma linguagem")
      .addOptions(
        {
        label: 'Javascript',
        description: 'Veja a documentação da linguagem "Javascript"',
        value: 'javascript'
        },
        {
          label: 'Python',
          description: 'Veja a documentação da linguagem "Python"',
          value: 'python'
        },
        {
          label: 'C#',
          description: 'Veja a documentação da linguagem "C#"',
          value: 'csharp'
        },
        {
          label: 'Discord.js',
          description: 'Veja a documentação do Discord.js, linguegem usada para criar esse e outros bots do mercado',
          value: 'discordjs'
        },
      )
  )

module.exports = {
  data: new SlashCommandBuilder()
    .setName('docs')
    .setDescription("Acesse a documentação da tecnologia que quiser!"),

  async execute(interaction) {

    await interaction.reply({
      content: `Selecione uma das tecnologias abaixo:`,
      components: [row]
    });
  }
}