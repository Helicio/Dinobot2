const Discord  = ('discord.js')
const { MessageEmbed } = require('discord.js')
const db = require('megadb')//definimos megadb
const role = new db.crearDB('mute')//llamamos a la db

module.exports = {
    name: "mute",
    aliases: [" "],

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
.setDescription(`El rol mute no esta establecido usa \`d/setmuterol\``)
.setTimestamp()
.setColor('#ff0000')

const error30 = new MessageEmbed()
.setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(`Menciona al usuario`)
.setTimestamp()
.setColor('#ff0000')

const error4 = new MessageEmbed()
.setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(`Este miembro ya esta muteado`)
.setTimestamp()
.setColor('#ff0000')

const error5 = new MessageEmbed()
.setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(`No puedes darte mute a ti mismo`)
.setTimestamp()
.setColor('#ff0000')



        if(!message.member.hasPermission('KICK_MEMBERS')){
            return message.channel.send(error1)
        }//si el usuario no tiene permisos retorna
        if (!message.guild.me.hasPermission('MANAGE_ROLES')) {
            return message.channel.send(error2)
          }//si el bot no tiene permisos retorna

          if(!role.tiene(message.guild.id))return message.channel.send(error3)//si el rol no se ah establecido retorna
        let persona = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!persona)return message.channel.send(error30)
        if(message.author.id === persona.id) return message.channel.send(error5)
        let razon = args.slice(1).join(" ")//definimos razon como los argumentos despues de la mencion

        const exito1 = new MessageEmbed()
        .setTitle('<:dinoxito:836031025083449384> | Éxito')
        .setDescription(`El Usuario ${persona} Fue Muteado`)
        .setTimestamp()
        .setColor('#00ff46')

        let role1 = await role.obtener(message.guild.id)
        if(persona.roles.cache.has(role1))return message.channel.send(error4)//si el miembro tiene el rol  retorna

        persona.roles.add(role1)//añadimos el rol
message.channel.send(exito1)//mandamos mensaje de confirmacion

    }}