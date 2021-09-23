const { MessageEmbed } = require('discord.js')
const megadb = require('megadb');   
const logs = new megadb.crearDB('logs');

module.exports = {
    name: "setlogs",
    aliases: ["sl"],

  run: async (client, message, args) => {
    message.delete()
      
                const error1 = new MessageEmbed()
          .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`No tienes lo permisos necesarios para usar este comando.`)
  .setTimestamp()
  .setColor('#ff0000')
                
                  const error2 = new MessageEmbed()
  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Menciona un canal válido.`)
  .setTimestamp()
  .setColor('#ff0000')
                    const error3 = new MessageEmbed()
  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Ya hay un canal de logs establecido.`)
  .setTimestamp()
  .setColor('#ff0000')
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(error1).then(m => m.delete({timeout: 10000}))
    let canal = message.mentions.channels.first() 
        if (!canal || !canal.guild || !(canal.guild.id == message.guild.id)){
            return message.channel.send(error2).then(m => m.delete({timeout: 5000}))
            }
            if(logs.tiene("Logs_" + message.guild.id, canal.id)) {
          message.channel.send(error3).then(m => m.delete({timeout: 5000}))
          return;
        }
    logs.establecer("Logs_" + message.guild.id, canal.id)
                  const exito1 = new MessageEmbed()
            .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`Se ha establecido el canal de logs en <#${canal.id}>`)
  .setTimestamp()
  .setColor('#00ff46')
                  message.channel.send(exito1).then(m => m.delete({timeout: 10000}))
    }
}