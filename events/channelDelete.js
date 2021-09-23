const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const megadb = require('megadb')
const logs = new megadb.crearDB('logs')

client.on('channelDelete', async(channelDelete) => {
const log = await logs.obtener("Logs_" + channelDelete.guild.id)
  if(!log) return;
    channelDelete.guild.fetchAuditLogs().then(async logs => {

let userID = logs.entries.first().executor

  var tipo = channelDelete.type
    
    if(tipo === 'text'){
        tipo = 'Texto'
    }
    if(tipo === 'voice'){
        tipo = 'Voz'
    }
    if(tipo === 'news'){
        tipo = 'Noticias'
    }

  var tipoe = channelDelete.type
    
    if(tipoe === 'text'){
        tipoe = '<:texto:854450611398639656>'
    }
    if(tipoe === 'voice'){
        tipoe = '<:voz:854450628360142889>'
    }
    if(tipoe === 'news'){
        tipoe = '<:anuncios:854450655150473236>'
    }
let categoria = channelDelete.parent ? channelDelete.parent : 'No tiene categoria'
    const embed = new MessageEmbed()
    .setTitle("Canal Eliminado")
    .setDescription(`📝 **|** __Nombre__: **${channelDelete.name}**\n🗂 **|** __Categoria:__ **${categoria}**\n🆔 **|** __ID:__ **${channelDelete.id}**\n${tipoe} **|** __Tipo:__ **${tipo}**\n🖋 **|** __Eliminado por:__ **${userID.tag}**`)
    .setColor("RED")
    .setTimestamp()
    .setThumbnail(userID.displayAvatarURL())
.setAuthor(userID.username, userID.displayAvatarURL())
  client.channels.cache.get(log).send(embed)
})
})