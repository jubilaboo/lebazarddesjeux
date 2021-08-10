const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setColor('#5a4fcf')
        .setImage('https://cdn.discordapp.com/attachments/830743265342914570/856589050362331146/twitchpourleserv.png')
        .setURL('https://twitter.com/albertamere')
        .setTitle('**Clique ici pour pouvoir voir le twitch de __Albertamere__**'))
        message.channel.send(new Discord.MessageEmbed()
        .setColor('#5a4fcf')
        .setImage('https://cdn.discordapp.com/attachments/830743265342914570/856605772452069396/youtubepourleserv.png')
        .setURL('https://www.youtube.com/channel/UCgOuZwIDKpGrsxN2fIshp6A')
        .setTitle('**Clique ici pour pouvoir voir la chaine YouTube ou __Albertamere__ fais du montage**'))
        message.channel.send(new Discord.MessageEmbed()
        .setColor('#5a4fcf')
        .setImage('https://cdn.discordapp.com/attachments/830743265342914570/856590550023405608/twitterpourleserv.png')
        .setURL('https://twitter.com/albertamere')
        .setTitle('**Clique ici pour pouvoir voir le twitter de __Albertamere__**')).then(sent => sent.react('819323441278091264'))
    },
    name: 'follow-albertamere'
}