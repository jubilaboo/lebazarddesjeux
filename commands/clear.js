const Discord = require('discord.js'),
    moment = require('moment')


module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**T\'as pas les perm frero❌**').then(sent => sent.delete({timeout: 5e3}))
        const count = args[0]
        if (!/\d+/.test(count)) return message.channel.send('**T\'as pas indiqué le nombre de messages à supprimer!!**').then(sent => sent.delete({timeout: 5e3}))
        if (count < 1 || count > 99) return message.channel.send('**Désolé le nombre max de messages à supprimer est seulement de 99🤕**').then(sent => sent.delete({timeout: 5e3}))
        const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
        message.channel.send(`**__${size - 1}__ messages ont été supprimé👍**`).then(sent => sent.delete({timeout: 5e3}))
    },
    name: 'clear',
    guildOnly: true
}