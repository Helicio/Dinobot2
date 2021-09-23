module.exports = {
  createBar: function(maxtime, currenttime, size = 25, line = "▬", slider = "🦕") {
    try{
      let bar = currenttime > maxtime ? [line.repeat(size / 2 * 2), (currenttime / maxtime) * 100] : [line.repeat(Math.round(size / 2 * (currenttime / maxtime))).replace(/.$/, slider) + line.repeat(size - Math.round(size * (currenttime / maxtime)) + 1), currenttime / maxtime];
      if (!String(bar).includes("🦕")) return `**[🦕${line.repeat(size - 1)}]**\n**00:00:00 / 00:00:00**`;
      return `**[${bar[0]}]**\n**${new Date(currenttime).toISOString().substr(11, 8)+" / "+(maxtime==0?" ◉ LIVE":new Date(maxtime).toISOString().substr(11, 8))}**`;
    }catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}