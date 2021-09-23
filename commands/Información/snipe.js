const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "snipe",
    aliases: [],
    cooldown: 10000,
  run: async function (client, message, args) {

 const channel = message.mentions.channels.first() || message.channel;

 const error3 = new MessageEmbed()
 .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
 .setDescription(`No hay mensajes borrados recientemente`)
 .setTimestamp()
 .setColor('#ff0000')

const msg = client.snipes.get(channel.id);

    if (!msg){
	 message.channel.send(error3)
       .then(m => m.delete({timeout: 5000}));
    
	}else{
        
        const exito2 = new MessageEmbed()
        .setTitle('<:dinoxito:836031025083449384> | Éxito')
        .setFooter(`${msg.delete.username}`, msg.delete.displayAvatarURL())
        .addField("Canal", `<#${msg.canal.id}>`)
        .setDescription(`**Mensaje**\n${msg.content}`)
      .setTimestamp()
      .setColor('#00ff46')
 message.channel.send(exito2);
    }

  }
}