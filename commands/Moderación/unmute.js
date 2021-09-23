const Discord = require("discord.js");//definimos discord
const { MessageEmbed } = require("discord.js");
const db = require('megadb')//definimos megadb
const role = new db.crearDB('mute')//llamamos a la db
module.exports = {
    name: "unmute",
    aliases: [],

  run: async function (client, message, args) {
    const error1 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(` No Tienes Permisos para usar este comando. \`KICK_MEMBERS\``)
.setTimestamp()
.setColor('#ff0000')

const error2 = new MessageEmbed()
.setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(`Necesito los permisos \`MANAGE_ROLES\``)
.setTimestamp()
.setColor('#ff0000')

const error3 = new MessageEmbed()
.setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(`No encontre al usuario`)
.setTimestamp()
.setColor('#ff0000')


const error4 = new MessageEmbed()
.setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(`Este miembro no esta muteado`)
.setTimestamp()
.setColor('#ff0000')

        if(!message.member.hasPermission("KICK_MEMBERS"))return message.channel.send(error1)//si el miembro no tiene permisos retorna

        if(!message.guild.me.hasPermission("MANAGE_ROLES"))return message.channel.send(error2)

        let persona = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!persona)return message.channel.send(error3)

        const exito1 = new MessageEmbed()
        .setTitle('<:dinoxito:836031025083449384> | Éxito')
        .setDescription(`El Usuario ${persona} Fue Desmuteado`)
        .setTimestamp()
        .setColor('#00ff46')

        let role1 = await role.obtener(message.guild.id)//obtenemos el rol de la db

        if(!persona.roles.cache.has(role1))return message.channel.send(error4)//revisamos si el miembro tiene el rol, si no lo tiene retorna

        persona.roles.remove(role1)
message.channel.send(exito1)//mandamos mensaje de confirmacion
    }}