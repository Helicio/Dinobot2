const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const megadb = require('megadb')
const logs = new megadb.crearDB('logs')

client.on('channelCreate', async(channelCreate) => {

const log = await logs.obtener("Logs_" + channelCreate.guild.id)
  if(!log) return;
    channelCreate.guild.fetchAuditLogs().then(async logs => {

let userID = logs.entries.first().executor


  var tipo = channelCreate.type
    
    if(tipo === 'text'){
        tipo = 'Texto'
    }
    if(tipo === 'voice'){
        tipo = 'Voz'
    }
    if(tipo === 'news'){
        tipo = 'Noticias'
    }

  var tipoe = channelCreate.type
    
    if(tipoe === 'text'){
        tipoe = '<:texto:854450611398639656>'
    }
    if(tipoe === 'voice'){
        tipoe = '<:voz:854450628360142889>'
    }
    if(tipoe === 'news'){
        tipoe = '<:anuncios:854450655150473236>'
    }

let categoria = channelCreate.parent ? channelCreate.parent : 'No tiene categoria'
    const embed = new MessageEmbed()
    .setAuthor(userID.username, userID.displayAvatarURL())
    .setTitle("Canal Creado")
    .setDescription(`📝 **|** __Nombre:__ **${channelCreate.name}**\n🗂 **|** __Categoria:__ **${categoria}**\n🆔 **|** __ID:__ **${channelCreate.id}**\n${tipoe} **|** __Tipo:__ **${tipo}**\n🖋 **|** __Creador por:__ **${userID.tag}**`)
    .setColor("GREEN")
    .setTimestamp()
    .setThumbnail(userID.displayAvatarURL())

  client.channels.cache.get(log).send(embed)
})
})
