const client = require('../index')

client.on('ready', async () => {

  const estados = [`#TeamDino 🦕| d/help`, `#TeamDino 🦕 | d/invite`, `#TeamDino 🦕 | Viendo ${client.guilds.cache.size} Servidores`, `Servidor de soporte discord.gg/Ezsd8zvXag`]
  
  setInterval(() => {
      function presence() {
          client.user.setPresence({
             status: 'online',
              activity: {
              //    name: '#TeamDino 🦕| d/help ',
                 name: estados[Math.floor(Math.random() * estados.length )],
               //    url: "https://www.twitch.tv/iamanglez",
                  type: 'WATCHING',
              }
          })
      }
      presence()
  }, 10000);
  
 })
console.log(`Estoy Listo`)
  
  