const Discord = require("discord.js"); //this makes the discord.js library active for this file.
const config = require("./config.json"); //this reads the bot prefix in .json file.
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const { send } = require("process");
bot.commands = new Discord.Collection();

fs.readdir("./Commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("No commands were found...")
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(`${f} loaded!`)
        bot.commands.set(props.help.name, props);
    })
    })

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("Waiting on Halo Infinite to come out.", {type: "HELLO"});
});

bot.on("guildMemberAdd", async member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "general");
    if(!channel) return;
    channel.send(`I would like to be the first to welcome you to Vaylin's server, ${member}. I hope you have a good time!`);
    member.send("I would like to be the first to welcome you to Vaylin's server. I hope you have a good time!");
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = config.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
});

bot.login(process.env.TOKEN);