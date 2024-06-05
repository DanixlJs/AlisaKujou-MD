const handler = async (m, {conn}) => {
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const sbot = (conn.user.jid == global.conn.user.jid ? 'Main-Bot' : 'Sub-Bot');
m.react('⚙️') 
    const str = `❀ *ESTADO DE:* ${global.botname}
✰ *Activa ⪼* ${uptime}
◈ *Tipo ⪼* ${sbot}
◈ *Bot Uso ⪼* Publico
◈ *Owner ⪼* 🧑‍💻danixljs`;
      conn.reply(m.chat, str, m, fake, )
};

handler.help = ['estado'];
handler.tags = ['info'];
handler.command = ['status', 'estado'];
handler.registrado = true;

export default handler;

function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [`` + d, ' d ', `` + h, ' h ', `` + m, ' m ', `` + s, ' s'].map((v) => v.toString().padStart(2, 0)).join('');
}
