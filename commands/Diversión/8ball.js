const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "8ball",
  aliases : ['pregunta'],
  cooldown: 10000,
  description: "Preguntale al bot lo que quiereas con este comando",

  run: async function (client, message, args) {
 const error1 = new MessageEmbed()
  .setTitle('<:dinoerror:833064403695829033> | Ocurrió un Error')
  .setDescription(`Necesito que me digas una pregunta.`)
  .setTimestamp()
  .setColor('#ff0000')

 let mensaje = args.slice().join(" ")
 if(!mensaje) return message.channel.send(error1);
 let respuestas = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente","No Entedí","Jamas","No Creo", "Nimodo", "Escribe bien"]
 const ball = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setFooter(`Pregunta Hecha por ${message.author.username}`)
 .setTitle(`Mi Respues a la Pregunta: \`${mensaje}\``)
 .setDescription(`es: ${respuestas[( Math.floor(Math.random() * respuestas.length))]}.`)
 message.channel.send({ embed : ball })
 }
}  