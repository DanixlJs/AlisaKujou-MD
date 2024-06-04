const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkReason = text;
  m.reply(`❀ El usuario *${conn.getName(m.sender)}* estará inactivo.\n> → *Motivo ⪼* ${text ? ' ' + text : 'Sin Especificar'}
`);
};

handler.help = ['afk <motivo>'];
handler.tags = ['info', 'rpg'];
handler.command = ['afk'];
handler.register = true;

export default handler;
