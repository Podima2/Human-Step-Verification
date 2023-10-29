require('dotenv').config({path: '/Users/maharajababu/Documents/Projects/ETH_LONDON/discord_bot/.env'});
const { Client, IntentsBitField, Routes, REST, SlashCommandBuilder, PermissionFlagsBits, ChannelType, SlashCommandChannelOption, GuildTextBasedChannel, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { DISCORD_BOT_TOKEN, GUILD_ID, VERIFY_CHANNEL, CLIENT_ID } = process.env;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const rest = new REST({ version: '10' }).setToken(DISCORD_BOT_TOKEN);

client.on('ready', (bot) => {
  console.log(`Bot ${bot.user.tag} is online.`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'hello') {
    message.reply('hello');
  }
});


async function login() {
    try {
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: [
                new SlashCommandBuilder()
                .setName("verify")
                .setDescription("Verify POH")
                .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
                .addChannelOption(option => option
                    .setName('channel')
                    .setDescription('text channel')
                    .addChannelTypes(ChannelType.GuildText)
                    .setRequired(true)
                )
                .toJSON(),
            ]
        });

        client.login(DISCORD_BOT_TOKEN);
    }

    catch(e) {
        console.log("Error connecting to BOT: ", e);
    }
    
}

login();


/*
    Interaction create
*/
client.on('interactionCreate', (interaction) => {
    if(interaction.isChatInputCommand()){
        switch(interaction.commandName) {
            case 'verify': {
                const channel = interaction.options.getChannel("channel");
                channel.send({embeds: [
                    new EmbedBuilder().setDescription('Welcome! Please verify yourself').setColor('Aqua').setTitle(`welcome to ${interaction.guild.name}`)
                ],
                components: [
                    new ActionRowBuilder().setComponents(
                        new ButtonBuilder().setCustomId('verifiy_yourself').setLabel('verify').setStyle(ButtonStyle.Primary)
                    )
                ]
            });
            }
            break;
        }

        interaction.reply({content: 'Please check verify channel'});
    }
    
    else if (interaction.isButton){
        switch(interaction.customId) {
            case 'verifiy_yourself':
                console.log("Verifying member");
                //interaction.reply(`Click the button below to verify yourself: [Verify](${verificationLink})`);
    
    
                    const verificationURL = 'http://localhost:3000'; // Replace with your desired URL
                    interaction.reply(`Click the button below to verify yourself: [Verify](${verificationURL})`);
                    break;
            
        }
    }
});
