const { Message } = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'addrole',
    hidden: true,
    run : async(client, message, args) => {
        
                      const error3 = new MessageEmbed()
  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`No tienes permiso para usar este comando.`)
  .setTimestamp()
  .setColor('#ff0000')
                if(!message.member.roles.cache.has("847567845549539358")) return message.channel.send(error3)
        
            const exito1 = new MessageEmbed()
            .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`Rol agregado correctamente`)
  .setTimestamp()
  .setColor('#00ff46')
            
              const error2 = new MessageEmbed()
  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Especifica el rol.`)
  .setTimestamp()
  .setColor('#ff0000')
              
                            const error4 = new MessageEmbed()
  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Menciona a un miembro.`)
  .setTimestamp()
  .setColor('#ff0000')
                            
        const target = message.mentions.members.first()
        if(!target) return message.channel.send(error4 ) 
        const role = message.mentions.roles.first() 
        if(!role) return message.channel.send(error2) 
        await target.roles.add(role) 
        message.channel.send(exito1)
    }
}