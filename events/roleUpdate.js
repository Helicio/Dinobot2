const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const megadb = require('megadb')
const logs = new megadb.crearDB('logs')

client.on("roleUpdate", async(oldRole, newRole) => {
const log = await logs.obtener("Logs_" + newRole.guild.id)
  if(!log) return;
    newRole.guild.fetchAuditLogs().then(async logs => {

let userID = logs.entries.first().executor

if (oldRole.permissions !== newRole.permissions){
  const rol1 = oldRole.permissions;
  const rol2 = newRole.permissions;
  
  if(rol1.equals(rol2)) return;
  
  const rolf1 = rol1.missing(rol2)
  
  const rolf2 = rol2.missing(rol1)

  const embede = new MessageEmbed() 
  .setTitle('Permisos de Rol Actualizado')
  .setDescription(`📝 **|** __Rol__: ${newRole}`)
  .setColor('ORANGE')
  
  if(rolf1.length) {//le cambiaste el nombre al embed ._.XD
    embede.addField("🪛 **|** __Permisos agregados__:", rolf1.join(", "))
  }
  if(rolf2.length) {
    embede.addField("🗑️ **|** __Permisos removidos__:", rolf2.join(", "))
  }
client.channels.cache.get(log).send(embede)
    } else if (oldRole.name !== newRole.name) {
        const embed = new MessageEmbed()
        .setTitle("Rol actualizado")
        .setDescription(`✏ **|** __Rol__: **${oldRole}**\n📜 **|** __Nombre anterior__: **${oldRole.name}**\n📝**|** __Nombre actualizado__: **${newRole.name}**\n🆔 **|** __ID del rol__: **${newRole.id}**`)
        .setColor("YELLOW")
        client.channels.cache.get(log).send(embed)
    } else if (oldRole.color !== newRole.color) {
        const embed1 = new MessageEmbed()
        .setTitle("Rol actualizado")
        .setDescription(`✏ **|** __Rol__: **${newRole}**\n🎨 **|** __Color anterior__: **${oldRole.color.toString(16)}**\n📝 **|** __Color actualizado__: **${newRole.color.toString(16)}**\n🆔 **|** __ID del Rol__: **${newRole.id}**`)
        .setColor("YELLOW")
        client.channels.cache.get(log).send(embed1)
    } 
})
})
