const Discord = require('discord.js')
const { Util } = require('discord.js');

module.exports = {
  name: "say",
  aliases : ['decir'],
  cooldown: 10000,
  run: async function (client, message, args) {
    message.delete() 
   let texto = args.join(" ");
      
      for(let i = 0; texto.includes("@here") || texto.includes("@everyone"); i++){
    texto = texto.replace(/@here/g, "here");
    texto = texto.replace(/@everyone/g, "everyone");
}
      
return message.channel.send(Util.cleanContent(texto, message)).catch(e => e);
    }
    }
