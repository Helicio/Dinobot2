const { Client, Message, MessageEmbed } = require('discord.js');


module.exports = {
  name: "lock",
  aliases : ['cerrar'],
  userPermission: ['MANAGE_CHANNELS'],
  cooldown: 10000,
  description: "Cierra un canal Inmediatamente",

  run: async function (client, message, args) {
                  /*const error1 = new MessageEmbed()
                  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(` No Tienes Permisos. \`MANAGE_CHANNELS\``)
  .setTimestamp()
  .setColor('#ff0000')*/

    const exito1 = new MessageEmbed()
  .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`Canal Bloqueado Por <@${message.author.id}>`)
  .setTimestamp()
  .setColor('#00ff46')
            /*if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
            return message.channel.send(error1);*/
            message.channel.createOverwrite(message.guild.id, {SEND_MESSAGES: false}).then(() => {
            return message.channel.send(exito1)})
  }
}