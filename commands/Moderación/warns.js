const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name :'warns',
    userPermission: ['KICK_MEMBERS'],
    cooldown: 10000,
    aliases: ["warnings"],

    run: async function (client, message, args) {
                                            /*const error1 = new MessageEmbed()
                                            .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(` No Tienes Permisos para usar este comando. \`KICK_MEMBERS\``)
  .setTimestamp()
  .setColor('#ff0000')
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(error1)*/
                                const error2 = new MessageEmbed()
                                .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Usuario no Encontrado`)
  .setTimestamp()
  .setColor('#ff0000')
                          const error3 = new MessageEmbed()
                          .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Este usuario no tiene ninguna advertencia en este servidor`)
  .setTimestamp()
  .setColor('#ff0000')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send(error2)
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(new MessageEmbed()
                    .setTitle(`Warns de ${user.user.tag}'`)
                    .setDescription(
                        data.content.map(
                            (w, i) => 
                            `\`${i + 1}\` | Moderador : ${message.guild.members.cache.get(w.moderator).user.tag}\nRazón : ${w.reason}`
                        ) 
                    )
                    .setColor("BLUE")
                )
            } else {
                message.channel.send(error3)
            }

        })
    }
}