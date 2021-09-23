const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'verify',
    hidden: true,
    run: async(client, message, args) => {
message.delete()
             const error = new MessageEmbed()
 .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
 .setDescription(`Ya estas verificado`)
 .setTimestamp()
 .setColor('#ff0000')
        
    const exito1 = new MessageEmbed()
   .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`Verificado`)
  .setTimestamp()
  .setColor('#00ff46')            
             
      message.member.roles.add("801203098588414022")
      if(message.member.roles.cache.get("801203098588414022")) return message.channel.send(error).then(m => m.delete({timeout: 10000})) 
      message.channel.send(exito1).then(m => m.delete({timeout: 10000})) 
  
    }
}