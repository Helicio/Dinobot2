const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: "warn",
    userPermission: ['KICK_MEMBERS'],
    cooldown: 10000,
    run: async function (client, message, args) {
        
        
        const error54 = new MessageEmbed()
.setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(`No puedes darte warn a ti mismo`)
.setTimestamp()
.setColor('#ff0000')

     
        
                                      /*const error1 = new MessageEmbed()
                                      .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(` No Tienes Permisos para usar este comando. \`KICK_MEMBERS\``)
  .setTimestamp()
  .setColor('#ff0000')
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(error1)
                        const error2 = new MessageEmbed()
                        .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Usuario no Encontrado`)
  .setTimestamp()
  .setColor('#ff0000')*/
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send(error2)
        
           if(message.author.id === user.id) return message.channel.send(error54)
        
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user : user.user.id,
                    content : [
                        {
                            moderator : message.author.id,
                            reason : reason
                        }
                    ]
                })
            } else {
                const obj = {
                    moderator: message.author.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        });
        user.send(new MessageEmbed()
            .setDescription(`Has sido advertido Razón: ${reason}`)
            .setColor("RED")
        )
        
            const exito1 = new MessageEmbed()
            .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`${user} Ha Sido Advertido\nRazón: ${reason} `)
  .setTimestamp()
  .setColor('#00ff46')
        message.channel.send(exito1)
    }
}