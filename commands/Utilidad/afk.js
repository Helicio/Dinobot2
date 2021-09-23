const { MessageEmbed } = require('discord.js');
const talkedRecently = new Set();
const afk = require('../../models/afk');
module.exports = {
  name: 'afk',
  cooldown: 5000,

  run: async function(client, message, args) {
    const error1 = new MessageEmbed()
     .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
     .setDescription('No puedes ponerte afk con esa razon')
     .setTimestamp()
     .setColor('#ff0000');
     
    const oldNickname = message.member.nickname || message.author.username
    const nickname = `[AFK] ${oldNickname}`
    let everyoneping = (args.indexOf("@everyone") > -1);
    let hereping = (args.indexOf("@here") > -1);
    if(everyoneping === true || hereping === true) return message.channel.send(error1)
    const content = args.join(" ") || 'Razon no especificada'
    const afklist = await afk.findOne({ userID: message.author.id }, async(err, data) => {
      if(!data) {
        new afk({
        userID: message.author.id,
        serverID: message.guild.id,
        reason: content,
        oldNickname: oldNickname, 
        time: new Date()
      }).save().catch((err) => console.error(err))
      }
      const exito1 = new MessageEmbed()
      .setTitle('<:dinoxito:836031025083449384> | Éxito')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
      .setDescription(`Ahora estas AFK\nRazon: ${content}`)
      .setTimestamp()
      .setColor('#00ff46')
      message.channel.send(exito1)
    });
    await message.member.setNickname(nickname).catch(() => {})
  }
}