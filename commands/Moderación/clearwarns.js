const db = require('../../models/warns')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "clear-warns",
    userPermission: ['ADMINISTRATOR'],
    aliases: ["clear-warnings"],

    run: async function (client, message, args) {
        
                                /*const error1 = new MessageEmbed()
                        .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(` No Tienes Permisos para usar este comando. \`ADMINISTRATOR\``)
  .setTimestamp()
  .setColor('#ff0000')
        
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(error1)*/
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send(error2)


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

    const exito1 = new MessageEmbed()
    .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`Elimine las todas las warns de ${user.user.tag} `)
  .setTimestamp()
  .setColor('#00ff46')

        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                await db.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
                message.channel.send(exito1)
            } else {
                message.channel.send(error3)
            }
        })
    }
}