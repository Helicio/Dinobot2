const {Discord, MessageEmbed}= require('discord.js')
const ms = require('ms')
const db = require('megadb')//definimos megadb
const role = new db.crearDB('mute')//llamamos a la db

module.exports = {
    name: "tempmute",
    userPermission: ['KICK_MEMBERS'],
    aliases: [" "],

  run: async function (client, message, args) {
    /*const error1 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(` No Tienes Permisos para usar este comando. \`KICK_MEMBERS\``)
.setTimestamp()
.setColor('#ff0000')*/

const error2 = new MessageEmbed()
.setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(`No se encuentra el miembro`)
.setTimestamp()
.setColor('#ff0000')

const error3 = new MessageEmbed()
.setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(`Especifica el tiempo`)
.setTimestamp()
.setColor('#ff0000')

const error33 = new MessageEmbed()
.setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(`El rol mute no esta establecido usa \`d/setmuterol\``)
.setTimestamp()
.setColor('#ff0000')


const error4 = new MessageEmbed()
.setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(`Este miembro ya esta muteado`)
.setTimestamp()
.setColor('#ff0000')

const error40 = new MessageEmbed()
.setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
.setDescription(`No puedes darte mute a ti mismo`)
.setTimestamp()
.setColor('#ff0000')

        

        /*if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(error1)*/
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.channel.send(error2)
        if(!time) return message.channel.send(error3)

          if(!role.tiene(message.guild.id))return message.channel.send(error33)
if(message.author.id === Member.id) return message.channel.send(error40)

        let role1 = await role.obtener(message.guild.id)
        
      const exito1 = new MessageEmbed()
      .setTitle('<:dinoxito:836031025083449384> | Éxito')
      .setDescription(`El Usuario ${Member.displayName} Fue Muteado`)
      .setTimestamp()
      .setColor('#00ff46')  

      const exito2 = new MessageEmbed()
      .setTitle('<<:dinoxito:836031025083449384> | Éxito')
      .setDescription(`Termino el mute de ${Member.displayName}`)
      .setTimestamp()
      .setColor('#00ff46')  

        if(Member.roles.cache.has(role1))return message.channel.send(error4)//si el miembro tiene el rol  retorna
        message.channel.send(exito1)
        // 

        Member.roles.add(role1)

        setTimeout(async () => {
            await Member.roles.remove(role1)
            message.channel.send(exito2)
        }, ms(time))
    }
}