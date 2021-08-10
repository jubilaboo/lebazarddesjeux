const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setColor('#5a4fcf')
        .setDescription('le prochain event est le **10/08/2021**')
        .setThumbnail(''))
        },
    name: 'test'
}