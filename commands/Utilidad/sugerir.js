const { MessageEmbed } = require("discord.js"), 
{ crearDB } = require("megadb"), 
conf = new crearDB("suggest")

module.exports = {
    name: "sugerir",
    aliases: ['suggest'],
    cooldown: 10000, 
  run: async function (client, message, args) {  
        const member = message.member 
       
    const error1 = new MessageEmbed()
  .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`No hay un canal de sugerencias`)
  .setTimestamp()
  .setColor('#ff0000')  

        let fs = await conf.get(`Server-${member.guild.id}`); 
        let rcanal = client.channels.cache.get(fs);
        if(!fs) { 
            return message.channel.send(error1).then(m => m.delete({timeout: 10000})) 
          }
    const error2 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
  .setDescription(`No has escrito la sugerencia`)
  .setTimestamp()
  .setColor('#ff0000')  
          
        let texto = args.slice(0).join(" ") 
        if(!texto) return message.channel.send(error2).then(m => m.delete({timeout: 10000})) 

            const exito1 = new MessageEmbed()
            .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`Sugerencia enviada ‍`)
  .setTimestamp()
  .setColor('#00ff46')
  message.channel.send(exito1).then(m => m.delete({timeout: 10000})) 
        const embed = new MessageEmbed() 
        .setTitle('Sugerencia nueva')
        .setDescription(texto) 
        .setColor('RANDOM') 
        .setThumbnail(message.guild.iconURL({size: 2048, dynamic: true}))
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        client.channels.cache.get(fs).send(embed).then(m => {
    m.react('✅')
    m.react('❌')
 })
        message.delete({timeout:0})
    }
}