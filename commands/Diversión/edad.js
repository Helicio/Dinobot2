const Discord = require("discord.js")

module.exports = {
  name: "edad",
  aliases : ['testedad'],
  cooldown: 10000,
  run: async function (client, message, args) {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    if(random < 50){
        heard=':baby:';

    }else if(random < 80){
        heard=':blond_haired_person: '; 

    }else if(random < 101){
        heard=':older_man:';

    }
  

let resp = [`Calculo que ${member.user.username} Tiene:`]
  
  let msg = resp[Math.floor(Math.random() * resp.length)]    
  
  
  
  
const embed = new Discord.MessageEmbed()
    .setAuthor(`${msg}`)
    .setDescription(`${heard} ${random} Años`)   
    .setColor("RANDOM")
message.channel.send(embed);
}}