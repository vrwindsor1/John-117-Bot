const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("He is the President of the United States! And the best one we've ever had if I do say so myself.");
}

module.exports.help = {
    name: "trump"
}