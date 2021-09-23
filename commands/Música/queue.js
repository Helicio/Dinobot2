const Discord = require('discord.js');
const distube = require('distube');
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'queue',
  aliases: ["q"],

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
    .setDescription(`No hay musica reproduciendose`)
    .setTimestamp()
    .setColor('#ff0000')                       
                           
    const queue = client.distube.getQueue(message)

    if(!queue) return message.channel.send(error3)
    if(!message.member.voice.channel) return message.channel.send(error1)

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(error2)

    const embed = new Discord.MessageEmbed()
    .setTitle(`Lista de Musica de ${message.guild.name}`)
    .setDescription(queue.songs.map((song, id) => `**${id + 1}**. [${song.name}](${song.url}) **|** 
  \`${song.formattedDuration}\` **|** Pedida por: **${song.user}**`).slice(0, 10).join("\n"))
    .setColor('#00ff46')
    .setTimestamp()
    .setThumbnail(message.guild.iconURL({size: 2048, dynamic: true}))
    await message.channel.send(embed)
  }
}