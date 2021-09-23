const { MessageEmbed } = require('discord.js');
const star = require('star-labs');

module.exports = {
    name: "beso",
    aliases: ["kiss"],
      cooldown: 10000,

  run: async function (client, message, args) {
                        const error1 = new MessageEmbed()
                        .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Menciona a un usuario`)
  .setTimestamp()
  .setColor('#ff0000')    
        let aA = message.author
        let aB = message.mentions.users.first()
        if (!aB) return message.channel.send(error1);
        const aC = new MessageEmbed()
            .setDescription(aA.username + 'le dio un beso a ' + aB.username)
            .setImage(star.kiss())
        message.channel.send(aC); 
    }
} 