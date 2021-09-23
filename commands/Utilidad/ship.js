const Discord = require("discord.js")
const {MessageEmbed } = require('discord.js')
module.exports = {
    name: "ship",
          cooldown: 10000,

  run: async function (client, message, args) {
                      const error1 = new MessageEmbed()
                      .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Menciona a un usuario`)
  .setTimestamp()
  .setColor('#ff0000')  
  
                        const error2 = new MessageEmbed()
                        .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`No puedes hacer eso contigo mismo`)
  .setTimestamp()
  .setColor('#ff0000')  
  
                        const error3 = new MessageEmbed()
                        .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`No puedo calcular eso conmigo`)
  .setTimestamp()
  .setColor('#ff0000')  
  
  let users =  message.mentions.users.first();
 if (!users) return message.reply(error1) 
  if (users === message.author) return message.channel.send(error2);
    if (users === client.user) return message.channel.send(error3)
  
  
  
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: '; 

    }else if(random < 101){
        heard=':heart:';

    }
  

let resp = [`El porcetanje de ${message.author.username} & ${users.username} es:`,` Yo Calculo que ${message.author.username} & ${users.username} Son Compatibles un:`,`Compatibles un:`]
  
  let msg = resp[Math.floor(Math.random() * resp.length)]    
  
  
  
const embed = new Discord.MessageEmbed()
    .setAuthor(`${msg}`)
    .setDescription(`${heard} ${random} %${heard}`)   
    .setColor(0xff4d4d)
message.channel.send(embed);
}}
