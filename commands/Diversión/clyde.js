const Discord = require ("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clyde",
  aliases : ['sayclyde'],
  cooldown: 10000,

  run: async function (client, message, args) {
message.delete() 
       const error4 = new MessageEmbed()
 .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
 .setDescription(`No puedes sobrepasar los 80 caracteres`)
 .setTimestamp()
 .setColor('#ff0000')
let mensaje = args.join('%20'); 
     if(mensaje.length >= 80) return message.channel.send(error4)
let api = new Discord.MessageAttachment(`https://ctk-api.herokuapp.com/clyde/${mensaje}`, 'clyde.png')

message.channel.send(api);
  }}