const handler = async (m, { conn, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!who) return m.reply('✧ Por favor, etiqueta a alguien.');
  try {
    const pp = await conn.getProfilePicture(who);
    await conn.sendMessage(m.chat, { image: { url: pp }, caption: '' });
  } catch (e) {
    m.reply('✧ Lo siento, no pude obtener la foto de perfil.');
  }
};

handler.command = ['pfp'];
handler.help = ['pfp <@tag>'];
handler.registrado = true;
handler.group = true;

export default handler;
