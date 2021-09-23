const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: 'tmp',
      aliases: ["whois"],
  cooldown: 10000,
  run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.member
    function formatDate (template, date) {
      var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
      date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
      return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
        return template.split(specs[i]).join(item)
      }, template)
    }
   const exito1 = new MessageEmbed()
   .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`${member}, Se unio al servidor el **${formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt)}**`)
  .setTimestamp()
  .setColor('#00ff46')
message.channel.send(exito1)
  }
}