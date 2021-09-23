const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "comandos",
  aliases : ['commands'],
  cooldown: 10000,
  run: async (client, message, args) => {

    if (!args[0]) {
      let categories = [];

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

const cmds = commands.filter((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          return !file.hidden;
        }).map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "Este comando no tiene nombre.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "En Progreso." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setAuthor('Mi lista de comandos', 'https://media.discordapp.net/attachments/744348079129362512/836030283761451049/733_sin_titulo_20210425180511.png?width=676&height=676')
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(categories)
        .setDescription(`Tengo \`${client.commands.size}\` Comandos Disponibles.\nSi encuentras algún bug reportalo usando \`d/reportbug\`.\n[Invitame Aquí](https://discord.com/oauth2/authorize?client_id=832429959984185344&permissions=2147483647&scope=bot)`)
        .setFooter(
          `Algunos comandos son privados!`)
        .setColor('GREEN')
        .setTimestamp()
      return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Ese comando no existe! Usa **${prefix}** help Para ver mis comandos!`)
          .setColor("GREEN");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Detalles del Comando:")
        .addField(
          "Alias:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "Este comando no tiene alias."
        )
        .addField(
          "Uso:",
          command.usage
            ? `\`${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .setFooter(
          `#TeamDino 🦕`)
        .setTimestamp()
        .setColor('GREEN')
      return message.channel.send(embed);
    }
  },
};