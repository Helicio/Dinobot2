const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const megadb = require('megadb');   
const conf = new megadb.crearDB('canalfesion');

module.exports = {
  name: "setconfesiones",
  aliases : ['st'],
  userPermission: ['ADMINISTRATOR'],
  cooldown: 10000,
  usage: "**<prefix>**setconfesiones <canal>",
  description: "Establece el canal para las confesiones.",

  run: async function (client, message, args) {

          /*const error1 = new MessageEmbed()
          .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`No tienes lo permisos necesarios para usar este comando.`)
  .setTimestamp()
  .setColor('#ff0000')*/

  const error2 = new MessageEmbed()
  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Menciona un canal válido.`)
  .setTimestamp()
  .setColor('#ff0000')

  /*if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(error1).then(m => m.delete({timeout: 10000}))*/  
  let channel = message.mentions.channels.first() 
  if (!channel || !channel.guild || !(channel.guild.id == message.guild.id)) return message.channel.send(error2)

            const exito1 = new MessageEmbed()
            .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`Se ha establecido el canal de confesiones en <#${channel.id}>`)
  .setTimestamp()
  .setColor('#00ff46')
        conf.establecer(`Server-${message.guild.id}`, channel.id) 
          message.channel.send(exito1).then(m => m.delete({timeout: 10000})) 
    }
}