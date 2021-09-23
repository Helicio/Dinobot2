const Discord = require("discord.js")
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: "jumbo",
      cooldown: 10000,

  run: async function (client, message, args) {
                                   const error1 = new MessageEmbed()
                                   .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Menciona un emoji`)
  .setTimestamp()
  .setColor('#ff0000') 

                                     const error2 = new MessageEmbed()
                                     .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Solo se pueden emojis que esten en este servidor`)
  .setTimestamp()
  .setColor('#ff0000') 
    if(!args[0]) return message.channel.send(error1)
    
    let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
    if(!emoji) return message.channel.send(error2)
     
     message.channel.send(emoji.url)
  }
}