const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "avatar",
  aliases : ['av'],
  cooldown: 10000,
  description: "Con este comando puedes ver tu avatar o el de otro usuario.",

  run: async function (client, message, args) {

    if(message.author.bot) return; 
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; 
if (!user) { 
const embed = new Discord.MessageEmbed()
    .setDescription(`[Link del Avatar](${user.displayAvatarURL({
      format: 'png',
      dynamic: true
    })})`)
    .setImage(`${message.author.displayAvatarURL({dynamic: true, size : 1024 })}`)
    .setColor(0x66b3ff)
    .setFooter(`Avatar de ${message.author.tag}`);
    
message.channel.send(embed);

} else { 
const embed = new Discord.MessageEmbed()
    .setDescription(`[Link del Avatar](${user.displayAvatarURL({
      format: 'png',
      dynamic: true
    })})`)
    .setImage(`${user.displayAvatarURL({dynamic: true, size : 1024 })}`)
    .setColor(0x66b3ff)
    .setFooter(`Avatar de ${user.tag}`)
message.channel.send(embed);

}}
}