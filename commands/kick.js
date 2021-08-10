const Discord = require ('discord.js')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('**T\'as pas le droit mek**')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('**T\'as pas donné de noms**')
        if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
            .setColor('#04A2B4')
            .setDescription('**Pourquoi tu veux kick dieu??**'))
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('**<@813747673231654933> ne peut pas virer le maitre du serveur**')
        if (!member.kickable) return message.channel.send('**<@813747673231654933> ne peux pas virer ce mek**')
        const reason = args.slice(1).join(' ') || 'Il a pas dit pourquoi'
        await member.kick(reason)
        message.channel.send(`**${member} a été kick**`).then(sent => sent.delete({timeout: 5e3}))
    },
    name: 'kick',
    guildOnly: true
}