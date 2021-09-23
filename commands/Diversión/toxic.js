const Discord = require("discord.js")

module.exports = {
  name: "toxic",
  aliases : ['testtoxico'],
  cooldown: 10000,
  description: "Mide que tan tóxico eres",

  run: async function (client, message, args) {
  
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    if(random < 50){
        heard='<a:toxic:813487310069825597>';

    }else if(random < 80){
        heard='<a:toxic:813487310069825597> '; 

    }else if(random < 101){
        heard='<a:toxic:813487310069825597>';

    }
  

let resp = [`Yo Calculo que ${member.user.username} es:`]
  
  let msg = resp[Math.floor(Math.random() * resp.length)]    
  
  
  
const embed = new Discord.MessageEmbed()
    .setAuthor(`${msg}`)
    .setDescription(`${heard} ${random}% Tóxico`)   
    .setColor(0x116d56)
message.channel.send(embed);
}}