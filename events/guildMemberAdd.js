 const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const megadb = require('megadb')
client.on('guildMemberAdd', async(member)=>{
const db = new megadb.crearDB('canalwelcome')
const { titulo, mensaje, imagen, colorembed, canal } = await db.obtener(member.guild.id)
   if(!canal) return;

const msg = mensaje.replace(/{usermencion}/, member).replace(/{username}/, member.user.username).replace(/{usertag}/, member.user.tag).replace(/{servercount}/, member.guild.memberCount).replace(/{servername}/, member.guild.name)

   const embed = new MessageEmbed()
   .setAuthor(member.user.username, member.user.displayAvatarURL())
   .setTitle(titulo)
   .setDescription(msg)
   .setColor(colorembed)
    .setImage(imagen)
   .setThumbnail(member.guild.iconURL())
   .setTimestamp()
   client.channels.cache.get(canal).send(embed)
 })