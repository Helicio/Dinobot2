const Discord = require('discord.js'); 
const megadb = require('megadb'); 
const conf = new megadb.crearDB('canalfesion'); 
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "confesion",
    aliases: ["confession"],
    cooldown: 10000,
  run: async function (client, message, args) {  
const member = message.member;
    const error1 = new MessageEmbed()
  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`No hay un canal de confesiones`)
  .setTimestamp()
  .setColor('#ff0000')  

        let fs = await conf.get(`Server-${member.guild.id}`); 
        let rcanal = client.channels.cache.get(fs);
        if(!fs) { 
            return message.channel.send(error1).then(m => m.delete({timeout: 10000})) 
          }
    const error2 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`No has escrito confesion`)
  .setTimestamp()
  .setColor('#ff0000')  
          
        let texto = args.slice(0).join(" ") 
        if(!texto) return message.channel.send(error2).then(m => m.delete({timeout: 10000})) 

            const exito1 = new MessageEmbed()
    .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`Confesión Enviada 🕵️‍♂️`)
  .setTimestamp()
  .setColor('#00ff46')
  message.channel.send(exito1).then(m => m.delete({timeout: 10000})) 
        const embed = new Discord.MessageEmbed() 
        .setTitle('‍Hay una Confesión Nueva🕵️‍♂️')
        .setDescription(`*${texto}*`) 
        .setColor('RANDOM') 
        client.channels.cache.get(fs).send(embed) 
        message.delete({timeout:0})
    }
}