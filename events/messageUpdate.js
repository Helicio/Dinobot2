const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const megadb = require('megadb')
const logs = new megadb.crearDB('logs')
client.on('messageUpdate', async(oldMessage, newMessage) => {
  const log = await logs.obtener("Logs_" + newMessage.guild.id)
  if(!log) return;
  if(newMessage.author.bot) return;
    const embed = new MessageEmbed()
    .setTitle("Mensaje Actualizado")
    .setDescription(`š **|** __Autor:__ **${newMessage.author}**\nš **|** __Canal:__ **<#${newMessage.channel.id}>**\nš **|** __Antiguo Mensaje:__ **${oldMessage.content}**\nš **|** __Nuevo Mensaje:__ **${newMessage.content}**`)
    .setColor("YELLOW")
    .setTimestamp()
.setThumbnail(newMessage.author.displayAvatarURL())
.setAuthor(newMessage.author.username, newMessage.author.displayAvatarURL())
    client.channels.cache.get(log).send(embed)
})