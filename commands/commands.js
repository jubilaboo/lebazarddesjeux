const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setColor(`#5a4fcf`)
        .setTitle(`**Liste des commandes sur le serveur**`)
        .addField('```//hydra-help```', `Cette commande est là quand tu ne comprend pas comment marche le bot qui fait de la musique.`, true)
        .addField('```//servers-out```', `Vous pouvez avoir accès aux serveurs du **GRAND MAITRE JUBILABO**`, true)
        .addField('```//servers-MC```', 'en gros vous avez une liste de serveur minecraft', true)
        .addField('```//follow [JUBILABO/albertamere]```', 'Cette commande vous permet de voir là où follow ces deux personnages', true)
        .addField('```//event```', 'pour voir les prochain event/mise à jour')
        .addField('```//info-server```', 'pour voir les information principale du serveur')
        .addField('servers-out', 'pour pouvoir voir la liste de serveurs en rapport avec le principal')
        .addField('***__POUR LES MODOS__***', '```//clear``` **Pour supprimer les messages.** ```//kick``` **Pour kick des gens.**', true))
        },
    name: 'commands'
}