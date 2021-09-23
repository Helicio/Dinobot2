const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const megadb = require('megadb')
const logs = new megadb.crearDB('logs')
client.on('emojiCreate', async(emoji) => {
  const log = await logs.obtener("Logs_" + emoji.guild.id)
  if(!log) return;
      emoji.guild.fetchAuditLogs().then(async logs => {

let userID = logs.entries.first().executor

    const embed = new MessageEmbed()
    .setTitle("Emoji Añadido")
    .setDescription(`✏️ **|** __Emoji__: **${emoji}**\n🧾 **|** __Nombre del Emoji__: **${emoji.name}**\n🆔 **|** __ID del Emoji__: **${emoji.id}**\n🔗 **|** __Url del Emoji__: **${emoji.url}**`)
    .setColor("GREEN")
    .setTimestamp()
    .setThumbnail(userID.displayAvatarURL())
.setAuthor(userID.username, userID.displayAvatarURL())
    client.channels.cache.get(log).send(embed)
})
})