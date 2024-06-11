const handler = async (m, {conn}) => {
  const who = m.mentionedJid && m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.chat;

  try {
    const pp = await conn.getProfilePicture(who);
    await conn.sendMessage(m.chat, {
      image: { url: pp },
      caption: "❀ Aquí tiene."
    }, {
      quoted: m
    });
  } catch (error) {
    await conn.sendMessage(m.chat, {
      text: "✧ No se pudo obtener la foto de perfil."
    }, {
      quoted: m
    });
  }
};

handler.command = ['pfp'];
handler.tags = ['rpg'];
handler.registrado = true;
handler.group = true;

export default handler;
