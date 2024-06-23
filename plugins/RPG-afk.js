const handler = async (m, {text, conn}) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkRazon = text;
  m.reply(`❀ El usuario *${conn.getName(m.sender)}* estará inactivo.\n> *Motivo ⪼* ${text ? ' ' + text : 'Sin Especificar'}
`);
};
handler.help = ['afk <motivo>'];
handler.tags = ['info', 'rpg'];
handler.command = ['afk'];
handler.registrado = true;
export default handler;
