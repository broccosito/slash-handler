const { Intents } = require("discord.js");

const config = {
  bot: {
    token: process.env.DISCORD_TOKEN || "",
    intents: [], // You can find the available intents on https://discord.js.org/#/docs/main/stable/class/Intents?scrollTo=s-FLAGS
    guildId: "", // Update this field to only register commands a guild, this will make the commands to load instantly in the selected gulld (Optional)
  },
};

module.exports = config;
