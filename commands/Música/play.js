const Discord = require('discord.js');
const distube = require('distube');
const { MessageEmbed } = require('discord.js')
const { getTracks, getPreview, getData } = require('spotify-url-info')
const youtube = require('youtube-sr').default
module.exports = {
  name: 'play',
  aliases: ["p"],

  run: async(client, message, args) => {

      const error1 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`Debes de estar en un canal de voz`)
    .setTimestamp()
    .setColor('#ff0000')
      
            const error2 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`Tienes que poner una canción`)
    .setTimestamp()
    .setColor('#ff0000')
            
             const error3 = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
    .setDescription(`Tienes que estar en el mismo canal de voz`)
    .setTimestamp()
    .setColor('#ff0000')           
            
            const exito1 = new MessageEmbed()
            .setTitle('<:dinoxito:836031025083449384> | Éxito')
  .setDescription(`Cargando Lista de Reproducción`)
  .setTimestamp()
  .setColor('#00ff46')

    const cancion = args.join(" ")
    if(!cancion) return message.channel.send(error2)

    if(!message.member.voice.channel) return message.channel.send(error1)

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(error3)
    try {
      if(args.join("").toLowerCase().includes("spotify") && args.join(" ").toLowerCase().includes("track")){
        getPreview(cancion).then(result => {
          client.distube.play(message, result.title).catch(err => client.distube.play(message, cancion));
        })
      } else if(args.join("").toLowerCase().includes("spotify") && args.join(" ").toLowerCase().includes("playlist")){
        getTracks(cancion).then(async result => {
          message.channel.send(exito1).then(async m => {
            let songs = [];
            for(const song of result) {
              let searched = await youtube.search(song.name, { limit: 1, type: 'video'})
              songs.push(searched.map(s => s.url)[0])
            }
            let name = await getData(cancion).then(async c => c.name)
            let thumbnail = await getData(cancion).then(async c => c.images[0].url)
            client.distube.playCustomPlaylist(message, songs, { name: name, thumbnail: thumbnail })
            m.delete()
            songs.splice(0, songs.length)
          })
        })
      } else {
        client.distube.play(message, cancion)
      }
    } catch (e) {
      console.log(e)
    }

  }
}