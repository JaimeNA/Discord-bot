// require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./.gitignore/config.json');

// create a new client instance - to connect with discord
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// checking if client is ready
client.once('ready', () => {
    console.log('Bot is ready');
});

// listening to interactions
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    // command setup on deploy commands file

    if (commandName === 'miembros') {
        await interaction.reply(`Miembros totales: ${interaction.guild.memberCount}`);
    } else if (commandName === 'morite') {
        await interaction.reply(`Ok :(`);
        console.log('Bot disconnected');
        client.destroy();
    } else if (commandName === 'user') {
        await interaction.reply('User info.');
    }
});

// Login to Discord with your client's token
client.login(token);