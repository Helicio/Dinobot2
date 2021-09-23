const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "info-bot",
  aliases : ['ib'],
  cooldown: 10000,
  description: "Puedes usar este comando para ver la información del bot.",
  run: async function (client, message, args) {

const OS = require('os'); 
const maxMemory = OS.totalmem(); 

function getMemoryUsage() {
    const free = OS.freemem(); 

    return {
        max: memory(maxMemory),
        free: memory(free),
        used: memory(maxMemory - free), 
        usedByProcess: memory(process.memoryUsage().rss) 
}
}

function memory(bytes = 0) {
    const gigaBytes = bytes / 1024 ** 3; 
    
    if(gigaBytes > 1) { 
        return `${gigaBytes.toFixed(1)} GB`; 
    }

    const megaBytes = bytes / 1024 ** 2; 
    
    if(megaBytes < 10) return `${megaBytes.toFixed(2)} MB`; 

        
    if(megaBytes < 100) return `${megaBytes.toFixed(1)} MB`; 

        
     return `${Math.floor(megaBytes)} MB`; 
}

let memoria = getMemoryUsage();

console.log(memoria)

const info = new MessageEmbed()
.setTitle('**Información de DinoBot**')
.setDescription(`Estoy en **${client.guilds.cache.size}** Servidores\nCuido **${client.users.cache.size}** Usuarios\nVigilo **${client.channels.cache.size}** Canales\nComandos Totales **${client.commands.size}**\n\nLibreria: **Discord.js V12**\nLenguaje: **JavaScript**\n\nMi Creador es: [ItsRichard#2020](https://twitter.com/richard_garrobo)`) 
  .setColor('GREEN')
  .setThumbnail(client.user.avatarURL({ size: 2048 }))
message.author.send(info);
  message.delete({timeout:0})
  message.channel.send(`<@${message.author.id}> Revisa tus Mensajes Privados <:Tierno:747300479905562624>`)
   
}
}
