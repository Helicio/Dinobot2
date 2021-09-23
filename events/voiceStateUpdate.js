const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const megadb = require('megadb')
const logs = new megadb.crearDB('logs')


client.on('voiceStateUpdate', async(oldState, newState) => {
    const log = await logs.obtener("Logs_" + newState.guild.id)
  if(!log) return;
    if(!oldState.channel && newState.channel) {
      const embed1 = new MessageEmbed()
      .setTitle('Un usuario se unio a un canal de voz')
      .setDescription(`El usuario <@${oldState.member.id}>, Se ha Unido al Canal de Voz <#${newState.channel.id}>`)
      .setColor('GREEN')
      .setTimestamp()

    client.channels.cache.get(log).send(embed1)
    return
  }
  if(oldState.channel && !newState.channel){
    const embed2 = new MessageEmbed()
      .setTitle('Un usuario salio del canal de voz')
      .setDescription(`El usuario <@${oldState.member.id}>, Se ha Salido del Canal de Voz <#${oldState.channel.id}>`)
      .setColor('RED')
      .setTimestamp()

    client.channels.cache.get(log).send(embed2)
    return
  }
  if(oldState.channel && newState.channel && oldState.channel.id !== newState.channel.id){
    const embed3 = new MessageEmbed()
      .setTitle('Un usuario se cambio a otro canal de voz')
      .setDescription(`El usuario <@${oldState.member.id}>, Se ha Cambiado de Canal de Voz de <#${oldState.channel.id}> a <#${newState.channel.id}>`)
      .setColor('YELLOW')
      .setTimestamp()

    client.channels.cache.get(log).send(embed3)
    return
  }
})