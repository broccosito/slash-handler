const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("slash")
    .setDescription("slash-handler Test Command"),
  run: async (interaction) => {
    const embed = new MessageEmbed()
      .setTitle("slash-handler")
      .setURL("https://github.com/enjoyablee/slash-handler")
      .setColor("#71B8FF")
      .setDescription(
        "Just trying out slash commands using [slash-handler](https://github.com/enjoyablee/slash-handler)!"
      );
    interaction.reply({ embeds: [embed] });
  },
};
