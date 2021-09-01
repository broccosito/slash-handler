const config = require("../../config");
const ora = require("ora");
const empty = require("is-empty");

const slash = {
  register: async (clientId, commands) => {
    const loadSlash = ora(`Registering Slash Commands`).start();

    const { REST } = require("@discordjs/rest");
    const { Routes } = require("discord-api-types/v9");

    const rest = new REST({ version: "9" }).setToken(config?.bot?.token);

    try {
      const guildId = config.bot?.guildId;
      if (!empty(guildId) ?? !isNaN(guildId)) {
        await rest
          .put(Routes.applicationGuildCommands(clientId, guildId), {
            body: commands,
          })
          .then(() => {
            return loadSlash.succeed(`Loaded Guild Slash Commands`);
          });
      } else {
        await rest
          .put(Routes.applicationCommands(clientId), { body: commands })
          .then(() => {
            loadSlash.succeed(`Loaded Slash Commands`);
          });
      }
    } catch (error) {
      loadSlash.warn(`Could not load Slash Commands: \n ${error}`);
    }
  },
};

module.exports = slash;
