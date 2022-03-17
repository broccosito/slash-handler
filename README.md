![slash-handler](https://i.imgur.com/J5JMYVD.png)

# slash-handler

## Table of Contents

- [About](#about)

- [Getting Started](#getting_started)

- [Usage](#usage)

## About <a  name = "about"></a>

[Discord.js](https://discord.js.org/) Slash Command & Event Handler

### Prerequisites

[NodeJS 16.6.0](https://nodejs.org/es/download/current/) Or Higher

## Getting Started

Install The Project Node Dependencies

```
npm install
```

Fill out the config.js

```js
const { Intents } = require("discord.js");

const config = {
  bot: {
    token: "", // Your discord bot token, you must have authorized the bot with the application.commands scope in order to use slash commands

    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS], // You can find the available intents on https://discord.js.org/#/docs/main/stable/class/Intents?scrollTo=s-FLAGS

    guildId: "", // Update this field to only register commands a guild, this will make the commands to load instantly in the selected gulld (Optional)
  },
};

module.exports = config;
```

## Usage <a  name = "usage"></a>

Note: There are some examples of usage in the `commands` and `events` folder inside the `src` folder.

# New Command Template

```js
const { SlashCommandBuilder } = require("@discordjs/builders");

const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()

    .setName("command-name") // /command-name

    .setDescription("command description"),

  run: async (interaction) => {
    // code to run
  },
};
```

# New event template

```js
module.exports = {
  event: "event-name", // Name of the event e.g. 'ready'

  oneTime: false, // If set to true the event will only be fired once until the client is restarted

  run: async (i) => {
    // code to run
  },
};
```

# Reporting Issues
Open a issue in the GitHub Repo and i will try to solve it ASAP

This is everything you need to know! Have a good one :)
