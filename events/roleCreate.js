const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const megadb = require('megadb')
const logs = new megadb.crearDB('logs')

client.on("roleCreate", async(role) => {
const log = await logs.obtener("Logs_" + role.guild.id)
  if(!log) return;
    role.guild.fetchAuditLogs().then(async logs => {
let userID = logs.entries.first().executor
    const embed = new MessageEmbed()
    .setTitle("Rol Creado")
    .setDescription(`📝 **|** __Nombre Del Rol:__ **${role.name}**\n🆔 **|** __ID:__ **${role.id}**\n🖋 **|** __Creador por:__ **${userID.tag}**\n🗂 **|** __Permisos:__ **${role.permissions.bitfield}**`)
    .setColor("GREEN")
    .setTimestamp()
    .setThumbnail(userID.displayAvatarURL())
.setAuthor(userID.username, userID.displayAvatarURL())
    client.channels.cache.get(log).send(embed)
})
})
