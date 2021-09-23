const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");//definimos discord
const db = require('megadb')//definimos megadb
const role = new db.crearDB('mute')//creamos una db

module.exports = {
    name: "setmuterol",
    aliases: [],

  run: async function (client, message, args) {
    const error2 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`No tienes permisos para usar este comando. \`ADMINISTRATOR\``)
    .setTimestamp()
    .setColor('#ff0000')

    const error3 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`No tengo permisos para ejecutar este comando. \`MANAGE_ROLES\``)
    .setTimestamp()
    .setColor('#ff0000')

    const error4 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`Menciona el Rol que quieres establecer`)
    .setTimestamp()
    .setColor('#ff0000')


        if(!message.member.hasPermission('ADMINISTRATOR')){
            return message.channel.send(error2)
        }//si el miembro no tiene permisos para ejecutar el comando retorna

        if (!message.guild.me.hasPermission('MANAGE_GUILD')) {
            return message.channel.send(error3)
          }//Si el bot no tiene permisos retorna

          let rolfinal = message.mentions.roles.first();//definimos rolfinal como el rol mute para que el usuario lo mencione
          if(!rolfinal)return message.channel.send(error4)
      
          const exito1 = new MessageEmbed()
          .setTitle('<:dinoxito:836031025083449384> | Éxito')
      .setDescription(`Se ha establecido el rol ${rolfinal} como rol de muteo`)
      .setTimestamp()
      .setColor('#00ff46')

          role.establecer(`${message.guild.id}` , `${rolfinal.id}`)//establecemos el rol

          message.channel.send(exito1)//mandamos mensaje de confirmacion
    }}