const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const megadb = require('megadb');   
const db = new megadb.crearDB('canalwelcome');

module.exports = {
    name: "setwelcome",
    aliases: ["sw"],
    cooldown: 10000,
  usage: "**<prefix>**setwelcome <canal> | <mensaje> | <color> | <Imagen o Gif (no son obligatorios)>",
  description: "Establece el sistema de bienvenidas.",

  run: async function (client, message, args) {

                const error1 = new MessageEmbed()
          .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`No tienes lo permisos necesarios para usar este comando.`)
  .setTimestamp()
  .setColor('#ff0000')
      
                  const error2 = new MessageEmbed()
  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Menciona un canal válido. Para más información usa \`d/info-welcome\``)
  .setTimestamp()
  .setColor('#ff0000')
                
   const error3 = new MessageEmbed()
  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Escribe el titulo. Para más información usa \`d/info-welcome\``)
  .setTimestamp()
  .setColor('#ff0000')                 
                  
      const error4 = new MessageEmbed()
  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Escribe el mensaje de bienvenida. Para más información usa \`d/info-welcome\``)
  .setTimestamp()
  .setColor('#ff0000')                   
  

           const error5 = new MessageEmbed()
  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Escribe el color. Para más información usa \`d/info-welcome\``)
  .setTimestamp()
  .setColor('#ff0000')   
      
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(error1).then(m => m.delete({timeout: 10000}))  
  let channel = message.mentions.channels.first() 
  if (!channel || !channel.guild || !(channel.guild.id == message.guild.id)) return message.channel.send(error2).then(m => m.delete({timeout: 10000})) 

    
const cmd = args.join(" ").split(" | ")

  if(!cmd[1]) return message.channel.send(error3).then(m => m.delete({timeout: 10000})) 

 if(!cmd[2]) return message.channel.send(error4).then(m => m.delete({timeout: 10000})) 


 if(!cmd[3]) return message.channel.send(error5).then(m => m.delete({timeout: 10000})) 

                  const exito1 = new MessageEmbed()
            .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`Se ha establecido el sistema de bienvenidas en <#${channel.id}>`)
  .setTimestamp()
  .setColor('#00ff46')
      
          message.channel.send(exito1).then(async function(message) { await message.react('✅'),
  await db.set(message.guild.id, { titulo: cmd[1], mensaje: cmd[2], colorembed: cmd[3], imagen: cmd[4], canal: channel.id }, `.`) })
          
          }
} 
  