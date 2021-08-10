const { url } = require('inspector')
    const { setInterval } = require('timers')
    moment = require('moment')

const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')
 
client.login(process.env.TOKEN)
client.commands = new Discord.Collection()
 
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})
 
client.on('message', message => {

    if (message.type !== 'DEFAULT' || message.author.bot) return
    
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if (command.guildOnly && !message.guild) return message.channel.send(new Discord.MessageEmbed()
    .setDescription('**Cette commands ne marche que dans un serveur**')
    .setColor('#008cff'))
    command.run(message, args, client)

    
})

client.on('ready', () => {
    const statuses = [
        () => `[//commands] {${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}} membres`,
        () => `Prochaine mise à jour le 10/08/2021`,
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'STREAMING', url:`https://twitch.tv/jubilaboo`,})
        i = ++i % statuses.length
    }, 1e4)
    setInterval(() => {
        const [bots, humans] = client.guilds.cache.first().members.cache.partition(member => member.user.bot)
        client.channels.cache.get(config.serverStats.membres).setName(`Membres👥 • ${humans.size}`)
        client.channels.cache.get(config.serverStats.bots).setName(`Bots🤖 • ${bots.size}`)
    }, 3e4)
})

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(config.greeting.channel).send( new Discord.MessageEmbed()
    .setColor(`#00AAFF`)
    .setDescription('**Yoo __${member}__ Comment ça va?. Grace à toi nous sommes __${member.guild.memberCount}__. à ouai d\'ailleurs t\'as <@159985870458322944> qui t\'as __DM__**'))
    member.roles.add(config.greeting.role)
    member.roles.add('828333963361255505')
    member.roles.add('828331108940513321')
    member.roles.add('828335956477083688')
    member.roles.add('828571006608080916')
    member.roles.add('828571830767058944')
})

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
        .setDescription(`${member} viens tout juste de quitter le serveur, quelle histoire triste`)
        .setColor('#FF6703'))
})