const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const megadb = require('megadb')
const logs = new megadb.crearDB('logs')

client.on("channelUpdate", async(oldChannel, newChannel) => {
const log = await logs.obtener("Logs_" + newChannel.guild.id)
  if(!log) return;
    newChannel.guild.fetchAuditLogs().then(async logs => {

let userID = logs.entries.first().executor

  var tipo = newChannel.type
    
    if(tipo === 'text'){
        tipo = 'Texto'
    }
    if(tipo === 'voice'){
        tipo = 'Voz'
    }
    if(tipo === 'news'){
        tipo = 'Noticias'
    }

  var tipoe = newChannel.type
    
    if(tipoe === 'text'){
        tipoe = '<:texto:854450611398639656>'
    }
    if(tipoe === 'voice'){
        tipoe = '<:voz:854450628360142889>'
    }
    if(tipoe === 'news'){
        tipoe = '<:anuncios:854450655150473236>'
    }

    const embed = new MessageEmbed()
    .setTitle("Canal Actualizado")
    .setDescription(`🖋 **|** __Nuevo nombre__: **${newChannel.name}**\n📝 **|** __Antiguo nombre__: **${oldChannel.name}**\n🆔 **|** __ID:__ **${newChannel.id}**\n${tipoe} **|** __Tipo:__ **${tipo}**\n✏ **|** __Editado por:__ **${userID.tag}**`)
    .setColor("YELLOW")
    .setTimestamp()
    .setThumbnail(userID.displayAvatarURL())
.setAuthor(userID.username, userID.displayAvatarURL())
  client.channels.cache.get(log).send(embed)
})
})