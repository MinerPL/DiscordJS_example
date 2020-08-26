const Discord = require("discord.js")
const client = new Discord.Client()

const config = require(`./config.json`)

client.on(`ready`, () => {
    console.log(`Zalogowano jako ${client.user.tag}`)
})

client.on('message', message => {
if (!message.content.startsWith(config.prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

if(command == "KOMENDA") {
    //co ma się dziać
}
})

client.login(config.token)