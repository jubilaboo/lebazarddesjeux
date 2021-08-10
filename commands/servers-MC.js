const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('servers Minecraft list')
            .setColor('#5a4fcf')
            .addField(`**__serveur minecraft n°1__**`, `**version** <:traix:824341967684632646> __4.tcp.eu.ngrok.io:19268__`, false))
    },
    name: 'servers-MC'
}