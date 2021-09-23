const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "info-server",
  aliases : ['is'],
  cooldown: 10000,
  description: "Puedes usar este comando para ver la información del servidor.",
  run: async function (client, message, args) {

let regiones = { "us-east": ':flag_us:  US-East', "US-West": ':flag_us:  US-West', "us-south": ':flag_us:  US-South', "us-central": ':flag_us:  US-Central' }
//Niveles de verificación
let verificacion = { "NONE": "Ninguno", "LOW": "Bajo", "MEDIUM": "Medio", "HIGH": "Alto", "HIGHEST": "Muy alto" }
const embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setColor("RANDOM")
    .setTitle(`> ${message.guild.name}`)
    .addField("> <a:esto:832758085659263087> Owner: ", `${message.guild.owner.user.tag}`)
    .addField("> <a:esto:832758085659263087> Miembros: ", `${message.guild.memberCount}`)
    .addField("> <a:esto:832758085659263087> Miembros conectados: ", `${message.guild.members.cache.filter(m => m.user.presence.status == "online").size}`)
    .addField("> <a:esto:832758085659263087> Bots: ", `${message.guild.members.cache.filter(m => m.user.bot).size}`)
    .addField("> <a:esto:832758085659263087> Creado el: ", `${message.guild.createdAt.toLocaleDateString("en-us")}`)
    .addField("> <a:esto:832758085659263087> Roles: ", `${message.guild.roles.cache.size} roles.`)
    .addField("> <a:esto:832758085659263087> Region: ", `${regiones[message.guild.region]}`)
    .addField("> <a:esto:832758085659263087> Verificado: ", message.guild.verified ? 'El servidor esta verificado!' : `El servidor no esta verificado.`)
    .addField('> <a:esto:832758085659263087> Boosters: ', message.guild.premiumSubscriptionCount >= 1 ? `${message.guild.premiumSubscriptionCount}` : `No se han encontrando boosters`)
    .addField("> <a:esto:832758085659263087> Emojis: ", message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size}` : 'No se han encontrado emojis.')
    .addField("> <a:esto:832758085659263087> Nivel de verificación:", `${message.guild.verificationLevel}`)
    .addField("> <a:esto:832758085659263087> Canal AFK:", message.guild.afkChannel ? `${message.guild.afkChannel}` : `No se ha encontrado el canal AFK`)
    .addField("> <a:esto:832758085659263087> Canal del sistema:", message.guild.systemChannel ? `${message.guild.systemChannel}` : `No se ha encontrado el canal del sistema.`)
    .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
message.channel.send(embed)
  }
}