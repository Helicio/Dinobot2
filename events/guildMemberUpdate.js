const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const megadb = require('megadb')
const logs = new megadb.crearDB('logs')

client.on('guildMemberUpdate', async (oldMember, newMember) => {
const log = await logs.obtener("Logs_" + newMember.guild.id)
  if(!log) return;

    if(!oldMember.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return


  oldMember.guild.fetchAuditLogs().then(logs => { 

   let userID = logs.entries.first().executor;

  //  let userAvatar = logs.entries.first().executor.avatarURL();

  let apodonombnr = newMember.nickname ? newMember.nickname : `${newMember.user.username}`
let apodonombnre = oldMember.nickname ? oldMember.nickname : `${oldMember.user.username}`
   if(oldMember.nickname !== newMember.nickname) {
    let msgChannel = new MessageEmbed()
       .setTitle('Apodo actualizado')
       .setColor('YELLOW')
       .setDescription(`🙋 **|** __Usuario__: **${oldMember.user}** \n🆔 **|** __ID__: **${oldMember.user.id}**\n📜 **|** __Apodo anterior__: **${apodonombnre}**\n📝 **|** __Nuevo apodo__: **${apodonombnr}**\n🖋 **|** __Actualizado por__: **${userID}**`)
       .setTimestamp()
      .setThumbnail(oldMember.user.displayAvatarURL())
.setAuthor(oldMember.user.username, oldMember.user.displayAvatarURL())

       let channel = client.channels.cache.get(log);
       channel.send(msgChannel);
   }

  })

}) 