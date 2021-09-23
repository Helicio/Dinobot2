const { MessageEmbed } = require('discord.js')
const { ReactionPages } = require('reconlx')
module.exports = {
  name: 'servers',
  run: async(client, message, args) => {
    const serverlist = client.guilds.cache.map(r => `\`${r.name}\` **|** ${r.id}`)
    
    let pages = [];
    let amount = 10;
    
    while ((await serverlist).length > 0) {
      pages.push((await serverlist).splice(0, amount))
    }

    
    ReactionPages(message, pages, false)
  }
}