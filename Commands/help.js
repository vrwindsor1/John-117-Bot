const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("Here's what I am able to do right now... Try typing: !trump, !time, !boo, !hello, !hi, or, !ping.");
}

module.exports.help = {
    name: "help"
}