// require the necessary discord.js classes
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

// list of commands and its description
const commands = [
        new SlashCommandBuilder().setName('miembros').setDescription('Gives list of members'),
        new SlashCommandBuilder().setName('morite').setDescription('Desconnects bot'),
        new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
    ]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);