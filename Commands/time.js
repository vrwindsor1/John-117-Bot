const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("You have a clock on your screen.");
}

module.exports.help = {
    name: "time"
}