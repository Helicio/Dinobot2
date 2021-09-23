const Discord = require('discord.js')
const distube = require('distube')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'pause',
  aliases: ["pausar"],

  run: async(client, message, args) => {

                  const error1 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`Tienes que estar en un canal de voz`)
    .setTimestamp()
    .setColor('#ff0000')
      
                   const error2 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`Tienes que estar en el mismo canal de voz`)
    .setTimestamp()
    .setColor('#ff0000')                 
       
                        const error3 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`No hay música reproduciendose en este servidor`)
    .setTimestamp()
    .setColor('#ff0000')               
      
                              const error4 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`La música ya esta pausada`)
    .setTimestamp()
    .setColor('#ff0000')                      
     
       const exito1 = new MessageEmbed()
  .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`La canción fue pausada con exito`)
  .setTimestamp()
  .setColor('#00ff46')                         
                              
    const serverQueue = client.distube.getQueue(message)

    if(!message.member.voice.channel) return message.channel.send(error1)

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(error2)

    if(!serverQueue) return message.channel.send(error3)

    if(serverQueue.pause) return message.channel.send(error4)

    client.distube.pause(message)

    message.channel.send(exito1)

  }
}