const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) return m.reply(`✧ Ingresa un texto.`);
let msg = text
conn.reply(m.chat, msg, null, { mentions: conn.parseMention(msg) });
}
handler.command = ['say'];
handler.registrado = true;
handler.tags = ['rpg'];
handler.help = ['say <texto>'];
export default handler;
