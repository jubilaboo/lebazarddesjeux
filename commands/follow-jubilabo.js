const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setColor('#5a4fcf')
        .setImage('https://cdn.discordapp.com/attachments/830743265342914570/856589050362331146/twitchpourleserv.png')
        .setURL('https://www.twitch.tv/jubilaboo')
        .setTitle('**Clique ici pour pouvoir voir le twitch de __JUBILABO__**'))
        message.channel.send(new Discord.MessageEmbed()
        .setColor('#5a4fcf')
        .setImage('https://cdn.discordapp.com/attachments/830743265342914570/856589944989417522/instagrampourleserv.png')
        .setURL('https://www.instagram.com/jubilabo_the_line/?hl=fr')
        .setTitle('**Clique ici pour pouvoir voir l\'instagram de __JUBILABO__**'))
        message.channel.send(new Discord.MessageEmbed()
        .setColor('#5a4fcf')
        .setImage('https://cdn.discordapp.com/attachments/830743265342914570/856590550023405608/twitterpourleserv.png')
        .setURL('https://twitter.com/thelastzero2')
        .setTitle('**Clique ici pour pouvoir voir le twitter de __JUBILABO__**')).then(sent => sent.react('819323441278091264'))
    },
    name: 'follow-jubilabo'
}