const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('***COMFIRMATION***')
        .setColor('#FF4949')
        .setDescription(`**Vous avez bien compris?**`)).then(sent => sent.react('822540183404412968'))
    },
    name: 'code_6546-5465-4646'
}