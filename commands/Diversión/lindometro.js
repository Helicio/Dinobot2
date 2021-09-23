const Discord = require("discord.js")

module.exports = {
    name: "lindometro",
  cooldown: 10000,
  run: async function (client, message, args) {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    if(random < 50){
        heard=':face_vomiting:';

    }else if(random < 80){
        heard=':star_struck: '; 

    }else if(random < 101){
        heard=':heart_eyes:';

    }
  

let resp = [`Yo Calculo que ${member.user.username} es:`]
  
  let msg = resp[Math.floor(Math.random() * resp.length)]    

  
  
const embed = new Discord.MessageEmbed()
    .setAuthor(`${msg}`)
    .setDescription(`${heard} ${random}% Lindo`)   
    .setColor('RANDOM')
message.channel.send(embed);
}}