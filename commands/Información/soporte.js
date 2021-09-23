const { Client, Message, MessageEmbed } = require('discord.js');


module.exports = {
  name: "soporte",
  aliases : ['invite'],
  cooldown: 10000,

  run: async function (client, message, args) {

    const eefp = new MessageEmbed()
.setAuthor(client.user.username, client.user.displayAvatarURL())
.setColor('GREEN')
.setDescription(`<a:discordcargando:833128830708875266> » **Invitaciónes**\n\nInvitación con permisos de Administrador\n[Click Aquí](https://discord.com/oauth2/authorize?client_id=818911386859339817&scope=bot&permissions=8)\n\nInvitación con todos los permisos\n[Click Aquí](https://discord.com/oauth2/authorize?client_id=818911386859339817&scope=bot&permissions=8589934591)\n\nInvitación sin permisos\n[Click Aquí](https://discord.com/oauth2/authorize?client_id=818911386859339817&scope=bot&permissions=0)\n\n<:dinoxito:836031025083449384> **» **Servidor de Soporte y Comunidad\n[Click Aquí](https://discord.gg/DMeEbcX)`)
  .setTimestamp()
  .setThumbnail(client.user.displayAvatarURL())
  .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
message.channel.send(eefp)
  }
}