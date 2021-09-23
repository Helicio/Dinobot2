const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const megadb = require('megadb')
const logs = new megadb.crearDB('logs')

client.on("messageDelete", async(message) => {
  const log = await logs.obtener("Logs_" + message.guild.id)
  if(!log) return;
  if(message.author.bot) return;
  if(message.attachments.size > 0) return;
    const embed = new MessageEmbed()
    .setTitle("Mensaje Borrado")
    .setDescription(`📝 **|** __Autor:__ **${message.author}**\n📑 **|** __Canal:__ **<#${message.channel.id}>**\n🗑 **|** __Mensaje Borrado:__ **${message.content}**`)
    .setColor("RED")
    .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL())
.setAuthor(message.author.username, message.author.displayAvatarURL())

    client.channels.cache.get(log).send(embed)
})
