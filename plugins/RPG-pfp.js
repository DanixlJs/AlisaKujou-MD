const handler = async (m, { conn, command }) => {
  let mentionedJid = [];
  if (m.message.extendedTextMessage.contextInfo.mentionedJid) {
    mentionedJid = m.message.extendedTextMessage.contextInfo.mentionedJid;
  }
  let target = mentionedJid[0] || m.quoted.sender;
  if (!target) return m.reply('✧ Por favor, etiqueta a alguien o responde a su mensaje.');

  try {
    const profilePicUrl = await conn.getProfilePicture(target);
    await conn.sendMessage(m.chat, { image: { url: profilePicUrl }, caption: '' });
  } catch (e) {
    m.reply('✧ Lo siento, no pude obtener la foto de perfil.');
  }
};

handler.command = ['pfp'];
handler.help = ['pfp <@tag>'];
handler.registrado = true;
handler.group = true;

export default handler;
