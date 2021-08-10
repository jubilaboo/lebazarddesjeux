const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`**pour écouter de la musique il faut juste aller dans le salon <#842788229241634856> puis d'écire le nom de la musique que vous voulez écouter**`)
        .setColor(`#5a4fcf`))
    },
    name: 'hydra-help'
}