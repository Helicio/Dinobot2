const Discord = require('discord.js');

module.exports = {
    name: "info-welcome",
    aliases: ["iw"],
  cooldown: 10000,
  run: async function (client, message, args) {

const embed = new Discord.MessageEmbed()
.setTitle('Información de Bienvenidas')
.setColor('RANDOM')
.setDescription(`**1.** Establece las bienvenidas con \`d/setwelcome\`.\n\n\`Plugins:\`\n**{usermencion}:** Menciona al usuario. Ejemplo: <@818911386859339817>\n**{username}:** Menciona solo el nombre del usuario. Ejemplo: DinoBot\n**{usuariotag}:** Muestra el nombre del usuario y su tag. Ejemplo: DinoBot#7810\n**{servercount}:** Menciona el numero total de miembros del servidor.\n**{servername}:** Muestra el nombre del servidor\n\n\`Ejemplo de bienvenida:\` d/setwelcome #‧₊🌌˚terminal   | Nuevo miembro |  ¡Bienvenido {usermencion}! Al Servidor **{servername}** Espero Que Lo Disfrutes :sunglasses: 

:exclamation:Pasa Por #‧₊🌌˚reglas Para No Tener Problemas Con Los Mods.

:smile: Ahora Somos **{servercount}**  :tada:  | GREEN | https://media.discordapp.net/attachments/800227716564516865/840652302107803688/videotogif_2021.05.08_11.11.45.gif\n\n\`Nota:\` Puedes añadir emojis animados poniendo la ID del emoji.\n\n\`Extras:\` El color siempre tiene que estar en ingles y en mayúsculas`)
.setFooter('Tambien se pueden añadir gifs o imagenes :D (La imagen o gif no es obligatorio)')
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setTimestamp()
   .setImage('https://media.discordapp.net/attachments/840657427687014460/840660286784012338/unknown.png')
message.channel.send(embed)
  }
}