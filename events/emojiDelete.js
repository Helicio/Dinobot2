const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const megadb = require('megadb')
const logs = new megadb.crearDB('logs')
client.on('emojiDelete', async(emoji) => {
  const log = await logs.obtener("Logs_" + emoji.guild.id)
  if(!log) return;
      emoji.guild.fetchAuditLogs().then(async logs => {

let userID = logs.entries.first().executor

    const embed = new MessageEmbed()
     .setTitle("Emoji Eliminado")
    .setDescription(`โ๏ธ **|** __Emoji__: **${emoji}**\n๐งพ **|** __Nombre del Emoji__: **${emoji.name}**\n๐ **|** __ID del Emoji__: **${emoji.id}**\n๐ **|** __Url del Emoji__: **${emoji.url}**`)
    .setColor("RED")
    .setTimestamp()
    .setThumbnail(userID.displayAvatarURL())
.setAuthor(userID.username, userID.displayAvatarURL())
    client.channels.cache.get(log).send(embed)
})
})