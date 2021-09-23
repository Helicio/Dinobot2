const Discord = require('discord.js');
const distube = require('distube');
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'volume',
  aliases: ["volumen"],

  run: async(client, message, args) => {

                           const error1 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`Tienes que estar en un canal de voz`)
    .setTimestamp()
    .setColor('#ff0000')         
     
                                const error2 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`Solo se pueden poner números`)
    .setTimestamp()
    .setColor('#ff0000')                          
    
                                     const error3 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`Solo se puede poner el volumen de 0 a 100`)
    .setTimestamp()
    .setColor('#ff0000')                             
  
                             const error4 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`Tienes que estar en el mismo canal de voz`)
    .setTimestamp()
    .setColor('#ff0000')                                    
   
                           const error5 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`No hay musica reproduciendo`)
    .setTimestamp()
    .setColor('#ff0000') 
                             
    const volume = args[0]

    const serverQueue = client.distube.getQueue(message)
    if(volume > 100 || volume < 0) return message.channel.send(error3)
    if(isNaN(volume)) return message.channel.send(error2)

    if(!message.member.voice.channel) return message.channel.send(error1)

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(error4)

    if(!serverQueue) return message.channel.send(error5)

    client.distube.setVolume(message, volume);

               const exito1 = new MessageEmbed()
          .setTitle('<:dinoxito:836031025083449384> | Éxito')
      .setDescription(`Ahora el volumen esta en ${volume}`)
      .setTimestamp()
      .setColor('#00ff46') 
      
    await message.channel.send(exito1)
  }
}