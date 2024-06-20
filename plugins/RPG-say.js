const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!global.db.data.chats[m.chat].game) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
if (!text) return m.reply(`✧ Ingresa un texto.`);
let msg = text
conn.reply(m.chat, msg, null, { mentions: conn.parseMention(msg) });
}
handler.command = ['say'];
handler.registrado = true;
handler.tags = ['rpg'];
handler.help = ['say <texto>'];
export default handler;
