const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "info-user",
  aliases : ['iu'],
  cooldown: 10000,
  description: "Puedes usar este comando para ver la información de un usuario.",
  run: async function (client, message, args) {
           function formatDate (template, date) {
      var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
      date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
      return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
        return template.split(specs[i]).join(item)
      }, template)
    }
    let badges1 = {
        
      'EARLY_SUPPORTER': '<:Earlysupporter:812842631406944256>',
      'DISCORD_EMPLOYEE': '<:Discordstaff:812842631188316182>',
      'DISCORD_PARTNER': '<:Discordpartner:812842631109148690>',
      'HYPESQUAD_EVENTS': '<:HypesquadEvents:812842631021330444>',
      'HOUSE_BRAVERY': '<:Houseofbravery:812842631003373578>',
      'HOUSE_BRILLIANCE': '<:Houseofbrilliance:812842631007830046>',
      'BUGHUNTER_LEVEL_1': '<:Bughunter:812842631024738314>',
      'BUGHUNTER_LEVEL_2': '<:Goldbughunter:812842630961692682>',
      'VERIFIED_DEVELOPER': '<:VERIFIED_DEVELOPER:847514776837554227>',
      'HOUSE_BALANCE': '<:Houseofbalance:812842630932856873>',
      'VERIFIED_BOT': '<:verified:812842631510884414>',
      'NITRO_CLASSIC': '<:nitroclasic:833093766037372958>',
    }
let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; // Definimos usuario, si mencionamos a alguien se obtendra su informacion, si no mencionamos a nadie se obtendra la informacion de "Nosotros"

        let status; // Hacemos un let vacio
      
        switch (user.presence.status) {// Hacemos un switch de la funcion Presencia
            case "online":// En el caso online..
                status = "🟢 En linea";// hacemos que el status online pase a decir lo siguiente...
                break;
            case "dnd":// En el caso dnd..
                status = "⛔ No molestar";// hacemos que el status dnd pase a decir lo siguiente...
                break;
            case "idle":// En el caso idle..
                status = "🌙 Ausente";// hacemos que el status idle pase a decir lo siguiente...
                break;
            case "offline":// En el caso offline..
                status = "⚪ Desconectado";// hacemos que el status offline pase a decir lo siguiente...
                break;
        }

        const embed = new MessageEmbed() // Hacemos un nuevo embed
            .setTitle(`Informacion del usuario ${user.user.tag}`) // Titulo - Recibimos el "user" y decimos su "username"
            .setColor(`RANDOM`)// Color para hacerlo mas bonito <3
            .setThumbnail(user.user.displayAvatarURL({dynamic : true})) // Un Thumbnail de la foto de perfil del "user".
            .addFields(// Hacemos nuevas Fields
                {
                    name: ":writing_hand: Apodo: ",// Nombre - Titulo - Caso 1
value: user.nickname ? user.nickname : "Sin apodo", // Si el "user" tiene apodo se envia, si es false / no tiene Se envia diciendo que "No tiene Apodo"
                    inline: true // En linea: SI
                },
                {
                    name: "#️⃣ Tag: ",// Nombre - Titulo - Caso 1
                    value: `#${user.user.discriminator}`,// Del "user" sacamos su tag / discriminador
                    inline: true// En linea: SI
                },
                {
                    name: "🆔 ID: ",// Nombre - Titulo - Caso 1
                    value: user.user.id,// Del "user" sacamos su ID
                },
                {
                    name: "🖥Actividad: ",// Nombre - Titulo - Caso 1
                    value: status,// Acá se obtiene el estado del "user" con los casos ya dichos y explicado anteriormente.
                    inline: true// En linea: SI
                },
                {
                    name: "💻Estado: ",// Nombre - Titulo - Caso 1
                    value: user.presence.activities[0] ? user.presence.activities[0].state : "Sin estado",// Si el "user" tiene actividad se envia, si no la tiene se envia "Sin Estado"
                    inline: true// En linea: SI
                },
                {
                    name: '🖼Link del avatar: ',// Nombre - Titulo - Caso 1
                    value: `[Click Aquí](${user.user.displayAvatarURL()})`// Del "user" obtenemos su Avatar Link, Hacemos que dentro del Array se encuentre el Link y cuando se de Click te reenviara una pagina viendo el avatar del "user"
                },
                {
                    name: '📝Creación de la cuenta: ',// Nombre - Titulo - Caso 1
                    value: formatDate('DD/MM/YYYY, a las HH:mm:ss', user.user.createdAt),// Del "user" obtenemos su Fecha de creacion y hacemos que el dato local sea a ES-PE, Esto va en codigo segun por lenguaje - EJEMPLOS: es = español , en = english
                    inline: true// En linea: SI
                },
                {
                    name: '📥Fecha de entrada al Servidor: ',// Nombre - Titulo - Caso 1
                    value: formatDate('DD/MM/YYYY, a las HH:mm:ss', user.joinedAt),// Del "user" obtenemos su Fecha de entrada al servidor en donde se envio el mensaje y hacemos que el dato local sea a ES-PE, Esto va en codigo segun por lenguaje - EJEMPLOS: es = español , en = english
                    inline: true// En linea: SI
                },
                {
                    name: '🎳Roles del usuario: ',// Nombre - Titulo - Caso 1
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),// Del "user" obtenemos sus roles del server y lo mapeamos tambien lo separamos con una coma ","
                    inline: true// En linea: SI
                },
                 {
                    name: '🏆Insignias del usuario: ',// Nombre - Titulo - Caso 1
                    value: user.user.flags.toArray().length ? user.user.flags.toArray().map(badge => badges1[badge]).join(' ') : ("No tiene insignias"),// Del "user" obtenemos sus roles del server y lo mapeamos tambien lo separamos con una coma ","
                    inline: true// En linea: SI
                },              
                   {
                    name: '🎨Color del usuario: ',// Nombre - Titulo - Caso 1
                    value: user.displayHexColor,// Del "user" obtenemos sus roles del server y lo mapeamos tambien lo separamos con una coma ","
                    inline: true// En linea: SI
                }

            )

        await message.channel.send(embed)
  }
}