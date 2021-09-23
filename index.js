const Discord = require('discord.js')
const {Collection, MessageEmbed, MessageAttachment } = require('discord.js')
const client = new Discord.Client();
const moment = require('moment')
const ms = require('ms')
const path = require('path')
const fs = require('fs')


const config = require('./config.json');
const prefix = config.prefix
const token = config.token
module.exports = client;
client.snipes = new Map();
client.prefix = config.prefix;
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(path.resolve(`./handlers/${handler}`))(client);
});

///////////////////////////mongodb/////////////////////////
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ItsRichard:L25112517@nosiibot.kmny9.mongodb.net/test', {
  useUnifiedTopology : true,
  useNewUrlParser: true,
}).then(console.log('Conectado Con mongo db!'))

const Timeout = new Collection();///////////////////////////mongodb/////////////////////////
const { GiveawaysManager } = require('discord-giveaways')
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 7000,
  default: {
    botsCanwin: false,
    exemptPermissions: [],
    embedColor: 'RANDOM',
    reaction: '🎉'
  }
})
//////////////////estado//////////////////////////////////////////////////////

const Distube = require('distube')
client.distube = new Distube(client, {
  emitNewSongOnly: true,
  searchSongs: false,
  leaveOnStop: true,
  leaveOnFinish: true,
  leaveOnEmpty: true
})
client.distube.on("initQueue", queue => {
    queue.autoplay = false;
    queue.volume = 100;
});

client.distube.on('playSong', (message, queue, song) => {
  const embedPlay = new MessageEmbed()
  .setAuthor(song.user.username, song.user.displayAvatarURL())
  .setTitle('Reproduciendo Ahora:')
  .addField(`🎶 **|** Canción: `, `[${song.name}](${song.url})`)
.addField(`💻 **|** Pedido por: `, song.user)
.addField(`⏱ **|** Duración: `, song.formattedDuration)
  .setThumbnail(queue.songs[0].thumbnail)
  .setColor('RANDOM')
  .setFooter(song.views)
  .setTimestamp()
  message.channel.send(embedPlay)
})


client.distube.on('addList', (message, queue, playlist) => {
  const embed = new MessageEmbed()
  .setTitle('Playlist añadida:')
  .addField(`🎶 **|** Canciónes: `, `**${playlist.songs.length}**`)
  .setColor('RANDOM')
  .setTimestamp()
  message.channel.send(embed)
})

client.distube.on('playList', (message, queue, playlist, song) => {
  const embed = new MessageEmbed()
  .setTitle('PlayList Reproduciendo:')
  .addField(`🎶 **|** Canciónes: `, `**${playlist.songs.length}**`)
  .setThumbnail(queue.songs[0].thumbnail)
  .setColor('RANDOM')
  .setTimestamp()
  message.channel.send(embed)
})

client.distube.on('addSong', (message, queue, song) => {
  const embed1 = new MessageEmbed()
  .setAuthor(song.user.username, song.user.displayAvatarURL())
  .setTitle('Canción añadida:')
  .addField(`🎶 **|** Canción: `, `[${song.name}](${song.url})`)
.addField(`💻 **|** Añadida por: `, song.user)
.addField(`⏱ **|** Duración: `, song.formattedDuration)
  .setThumbnail(queue.songs[0].thumbnail)
  .setColor('RANDOM')
  .setFooter(song.views)
  .setTimestamp()
  message.channel.send(embed1)
})
client.distube.on('error', (message, error) => {
  console.log(error)
                               const error1 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`No hubo resultados`)
    .setTimestamp()
    .setColor('#ff0000') 
  message.channel.send(error1)
})

client.login(token)