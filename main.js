const Discord = require("discord.js")

const TOKEN = "OTE5MTkzOTI4Njk4MzE4ODY4.YbSQDg.JGjDzl_rd7vuYOo90WNE58BL-TA"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)

})

client.on("messageCreate", (message) => {
    if (message.content == "help"){
        message.reply("Cowmenzile actuale sunt:\n -ok and?\n -amogus\n -Salut ")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "Salut"){
        message.reply("Bună")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "amogus"){
        message.reply("https://tenor.com/view/sus-pizza-among-us-among-us-meme-sussy-gif-24581549")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "ok and?"){
        message.reply("https://tenor.com/view/ice-eating-ok-and-gif-19666657")
    }
})


client.login(TOKEN)