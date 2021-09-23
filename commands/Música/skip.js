const Discord = require('discord.js')
const distube = require('distube')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'skip',
  aliases: ["s"],

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
            
    if(!message.member.voice.channel) return message.channel.send(error1)

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(error2)

    client.distube.skip(message);
  }
}