const Discord = require('discord.js');

module.exports = {
    name: "nuke",
  aliases : ['explotar'],
  cooldown: 10000,
  description: "Clona un canal fácilmente",

  run: async function (client, message, args) {
                      const error1 = new Discord.MessageEmbed()
                      .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(` No Tienes Permisos. \`ADMINISTRATOR\``)
  .setTimestamp()
  .setColor('#ff0000')
    
            if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(error1).then(m => m.delete({timeout: 10000})) 
    let link = "https://media.discordapp.net/attachments/818934650877640704/818934753012482129/tenor_1.gif"

 const nuke = new Discord.MessageAttachment(link, "nuke.gif")

 var posicion = message.channel.position

 message.channel.clone().then((canal) => {

        message.channel.delete()

        canal.setPosition(posicion)



        canal.send('Canal Explotado 🌋', nuke)
 });
  }
}
  