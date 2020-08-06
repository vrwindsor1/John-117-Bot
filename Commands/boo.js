const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("Yikes! You scared me!");
}

module.exports.help = {
    name: "boo"
}