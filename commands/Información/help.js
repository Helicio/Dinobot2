const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "help",
  aliases : ['ayuda'],
  cooldown: 10000,
  run: async (client, message, args) => {
      const embed = new MessageEmbed()
      .setAuthor('Menú de ayuda', 'https://media.discordapp.net/attachments/744348079129362512/836030283761451049/733_sin_titulo_20210425180511.png?width=676&height=676')
      .setDescription(`¡Hola **${message.author.username}**! <:Tierno:747300479905562624>, Soy **__${client.user.username}__**, Bot Con Comandos de Diversión, Moderación y Administración. Para Información más específica usa \`d/info-bot\`\n\n<:VERIFIED_DEVELOPER:847514776837554227> **|** Desarrollador:\n**›** [ItsRichard#2020](https://twitter.com/richard_garrobo)\n\n<a:exclamacin:808468291558309888> **|** Mi Lista de Comandos:\n**›** \`d/commands\`\n**›** Actualmente Tengo \`${client.commands.size}\` Comandos\n\n<a:tuerca:847985967636938822> **|** Prefix:\n**›** \`d/\`\n\n🔗 **|** Enlaces:\n**›** [Servidor de Soporte](https://discord.gg/Ezsd8zvXag)\n**›** [ClocksHost](https://discord.gg/Su5gVzfpEA)\n**›** [Invitación](https://discord.com/oauth2/authorize?client_id=818911386859339817&scope=bot&permissions=8589934591)\n**›** [Emojis y Logo](https://twitter.com/CandyCat9011)\n**›** [Top.gg](https://top.gg/bot/818911386859339817/vote)`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter('#TeamDino 🦕')
        .setColor('GREEN')
        .setTimestamp()
message.channel.send(embed)
  }
}