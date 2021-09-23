const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "abrazo",
    cooldown: 10000,
    aliases: ["hug"],

  run: async function (client, message, args) {

      let thumb = ["https://media.tenor.com/images/7265a624272e13d0950518a9654ce976/tenor.gif","https://media.tenor.com/images/52866345d463488b3425fb1068ac3d01/tenor.gif","https://media.tenor.com/images/ca88f916b116711c60bb23b8eb608694/tenor.gif","https://media.tenor.com/images/9fe95432f2d10d7de2e279d5c10b9b51/tenor.gif","https://media.tenor.com/images/ec5f44a6f93adfa22e36a5c78ae44cdf/tenor.gif","https://media.tenor.com/images/a9bb4d55724484be94d13dd94721a8d9/tenor.gif",
      "https://media.discordapp.net/attachments/743173878838198375/815049485524533248/4148_bear_cry_hug.gif",
      "https://media.tenor.com/images/2e1d34d002d73459b6119d57e6a795d6/tenor.gif",
      "https://media.giphy.com/media/MtiJgbb5h5kNaheH9c/giphy.gif",
      "https://media.giphy.com/media/Qfe2UFWdMBEmmS4w40/giphy.gif",
      "https://media.giphy.com/media/0jQfcUoejhFLPzTl1K/giphy.gif",
      "https://media.giphy.com/media/h8mdXhhHMl6TOSJRq6/giphy.gif",
      "https://media.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif",
      "https://media.giphy.com/media/THmLt0Cf02EXcPGDV1/giphy.gif",
      "https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif",
      "https://media.giphy.com/media/PibhPmQYXZ7HO/giphy.gif",
      "https://media.giphy.com/media/cKbfWxIbqKPY8fNfdh/giphy.gif"]
      
                    const error1 = new MessageEmbed()
                    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`Menciona a un usuario`)
  .setTimestamp()
  .setColor('#ff0000')    
      //hacemos un let thumb para poner los posibles gifs que va a tener
var enlace = thumb[Math.floor(Math.random() * thumb.length)]// un var enlace para poner que va a elegir uno random del let thumb
if(!message.mentions.users.first()) {
const embed = new Discord.MessageEmbed()//definimos embed
message.channel.send(error1)


} else {//hacemos un else por si menciona a alguien

let userm = message.mentions.users.first()//definimos un userm para la persona que menciono

const embed = new Discord.MessageEmbed()//definimos embed
.setDescription("**" + message.author.username + "**" + " le dio un abrazo a " + "**" + userm.username + "**")//la descipcion si quieres puedes cambiarla
.setColor("RANDOM")//color random
.setImage(enlace)//aqui en imagen ponemos el var enlace
    
message.channel.send({embed});
}
    }
}