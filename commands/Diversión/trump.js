const Discord = require ("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "trump",
  aliases : ['saytrump'],
  cooldown: 10000,

  run: async function (client, message, args) {
      
       const error3 = new MessageEmbed()
 .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
 .setDescription(`Escribe un texto`)
 .setTimestamp()
 .setColor('#ff0000')
      
       const error4 = new MessageEmbed()
 .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
 .setDescription(`No puedes sobrepasar los 60 caracteres`)
 .setColor('#ff0000')
      
    const texto = args.join(" ")
    if(!texto) return message.channel.send(error3)

    if(texto.length >= 60) return message.channel.send(error4)

    let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${texto}&raw=1`, 'ttweet.png') 

    message.channel.send(attachment)
  }
}