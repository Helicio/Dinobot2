const Discord = require ("discord.js");
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "reportbug",
    aliases: ["rb"],
    cooldown: 10000,
  run: async function (client, message, args) {

const exito1 = new MessageEmbed()
.setTitle('<:dinoxito:836031025083449384> | Éxito')
.setDescription(`Bug Reportado Exitosamente`)
.setTimestamp()
.setColor('#00ff46')

const error2 = new MessageEmbed()
 .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Escribe el bug`)
  .setTimestamp()
  .setColor('#ff0000')
    let razon = args.slice(0).join(" ")//aqui se esta creando otra variable

    if(!razon) return message.channel.send(error2)//uso de razon

          message.channel.send(exito1).then(rm=> {
              setTimeout(() => {
               rm.react("<:dinoxito:836031025083449384>")
       }, 0); 
      })
          let rcanal = client.channels.cache.get('836027888465739826');//la id sera donde enviara el mensaje del reporte

           let reporte = new Discord.MessageEmbed()//Mensaje Embed 
           .setTitle("Sistema de Bugs")
           .setThumbnail(message.author.displayAvatarURL())
           .addField("Bug", razon)
           .setColor("RANDOM")
           .setFooter(`Comando Ejecutado por ${message.author.username}`)
           .setTimestamp()

           rcanal.send(reporte).then(r => {
           setTimeout(() => {
            r.react("<:dinoerror:836031062895099904>")
    }, 0);
  });
} 
};