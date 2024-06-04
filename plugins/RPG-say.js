const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `✧ Ingresa un texto.`;
    conn.reply(m.chat, text)}

handler.command = ['say'];
handler.register = true;
handler.tags = ['rpg'];
handler.help = ['say <texto>'];

export default handler;