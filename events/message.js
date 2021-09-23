const client = require('../index')
const {Collection, Discord, MessageEmbed, MessageAttachment } = require('discord.js')
const config = require('../config');
const prefix = config.prefix
const Timeout = new Collection();
const afk = require('../models/afk')
const moment = require('moment')
const ms = require('ms')
const permissions = require('../assets/permissions.json')
client.on('message', async message => {

    const oaoaoa = message.author.username;
    
    const errorcmd = new MessageEmbed()
    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
      .setDescription(`**${oaoaoa}**, Este comando no existe`)
      .setTimestamp()
      .setColor('#ff0000')
    
    const msijs = new MessageEmbed()
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setDescription(`¡Hola <@!${message.author.id}>!, Soy **${client.user.username}** Para Saber Mis Comandos Usa el **${prefix}help**.\n\n[Servidor de Soporte](https://discord.gg/Ezsd8zvXag)`)
      .setTimestamp()
      .setColor('GREEN')

        if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
          if(message.author.bot) return;
            message.channel.send(msijs)
          }
          
        moment.suppressDeprecationWarnings = true;
        if(message.mentions.members.first()){
        const afklist = await afk.findOne({ userID: message.mentions.members.first().id, serverID: message.guild.id});
        if(afklist){
            
           await message.guild.members.fetch(afklist.userID).then(member => {
           let user_tag = member.user.tag;
           return message.channel.send(new MessageEmbed()
          .setTitle('Este usuario se encuentra AFK')
          .setDescription(`**${afklist.oldNickname || user_tag || member.user.username}** esta afk\n\n**Razon:** ${afklist.reason}\n\n** Tiempo AFK:**${moment(afklist.time).fromNow()}`)
          .setTimestamp()
          .setColor('#00ff46')).catch(() => {});
           });
        }
        }
        
        
        const afklis = await afk.findOne({ userID: message.author.id, serverID: message.guild.id});
        
        
        if(afklis) {
          let nickname =  `${afklis.oldNickname}`;
          message.member.setNickname(nickname).catch(() => {});
          await afk.deleteOne({ userID: message.author.id });
          return   message.channel.send(new MessageEmbed()
          .setTitle('<:dinoxito:836031025083449384> | Éxito')
          .setDescription(`**¡Parece que has vuelto!** Eliminare tu afk\n\n**Razon:** ${afklis.reason}\n\n**Tiempo AFK:** ${moment(afklis.time).fromNow()}`)
          .setTimestamp()
          .setColor('#00ff46')).then(m => {
                setTimeout(() => {
                    m.delete().catch(() => {});
                }, 10000);
              });
        
        };
          
        if(message.author.bot) return;
        if(!message.content.startsWith(prefix)) return;
        if(!message.guild) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        if(cmd.length == 0 ) return;
        let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
      if(!command){
        return message.channel.send(errorcmd)}
        if (command) {
            if (command.userPermission) {
                const missingUserPermissions =
                message.channel.permissionsFor(message.author).missing(command.userPermission).map(p => permissions[p]);
             if (missingUserPermissions.length !== 0) {
                 const errorperms = new MessageEmbed()
                    .setTitle('<:dinoerror:836031062895099904>  | Ocurrió un Error')
                    .setDescription(` No Tienes Permisos para usar este comando. \`${missingUserPermissions.map(p => `${p}`).join('\n')}\``)
                    .setTimestamp()
                    .setColor('#ff0000')
             return message.channel.send(errorperms).catch(()=>{})
              }
            }
            if(command.cooldown) {
                if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`Tienes que esperar \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}\` para volver a usar este comando.`)
                command.run(client, message, args)
                Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
                setTimeout(() => {
                    Timeout.delete(`${command.name}${message.author.id}`)
                }, command.cooldown)
            } else command.run(client, message, args);
        }
    });

    client.on("messageDelete", (message) => {

      client.snipes.set(message.channel.id, {
            content: message.content,
            delete: message.author,
            canal: message.channel
      });
      })