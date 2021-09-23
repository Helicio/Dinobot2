const Discord = require('discord.js')
const distube = require('distube')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'loop',
  aliases: ["repetir"],

  run: async(client, message, args) =>{

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
    .setDescription(`No hay música reproduciendo`)
    .setTimestamp()
    .setColor('#ff0000')    
                          
                          
    const serverQueue = client.distube.getQueue(message)

    if(!message.member.voice.channel) return message.channel.send(error1)

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(error2)

    if(!serverQueue) return message.channel.send(error3)
    
    let mode = client.distube.setRepeatMode(message, parseInt(args[0]));
    mode = mode ? mode == 2 ? "Repetir lista" : "Repetir Musica" : "Apagado";

      const exito1 = new MessageEmbed()
  .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`**Loop**: \`${mode}\``)
  .setTimestamp()
  .setColor('#00ff46')     
         
      
    message.channel.send(exito1);

      
  }
}