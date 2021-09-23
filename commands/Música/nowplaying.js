const distube = require('distube')
const Discord = require('discord.js')
const { createBar } = require('../../handlers/funciones')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'nowplaying',
  aliases: ["np"],
  run: async(client, message, args) => {

                           const error1 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`Tienes que estar en un canal de voz`)
    .setTimestamp()
    .setColor('#ff0000')   
      
                           
                           const error2 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`No hay música reproduciendose en este servidor`)
    .setTimestamp()
    .setColor('#ff0000')   
                           
                           
    const { channel } = message.member.voice;
      if(!channel)
        return message.channel.send(error1) 
      
      if(!client.distube.getQueue(message))
        return message.channel.send(error2)
      
                           const error3 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`Tienes que estar en el mismo canal de voz`)
    .setTimestamp()
    .setColor('#ff0000')   
      
      if(client.distube.getQueue(message) && channel.id !== message.guild.me.voice.channel.id)
        return message.channel.send(error3)
      let queue = client.distube.getQueue(message);
      let track = queue.songs[0];
      message.channel.send(new Discord.MessageEmbed()
  .setTitle('<:dinoxito:836031025083449384> | Éxito')
                           .addField(`🎶 **|** Canción: `, `${track.name}`)
.addField("Visitas", `<:arrow_join:844380486234275840> **|** ${track.views}`,true)
 .setThumbnail(track.thumbnail)                     
  .setTimestamp()
.addField("Pedido por:", `<:arrow_join:844380486234275840> **|** ${track.user}`,true)
.addField("Duración: ", createBar(track.duration*1000, client.distube.getQueue(message).currentTime))                         
  .setColor('#00ff46')     
      )
  }
}