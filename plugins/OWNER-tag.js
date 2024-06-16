var handler = async (m, { conn }) => {
  const sender = m.sender;
  const tagMessage = `@${sender.split('@')[0]}`;
  
  await conn.reply(m.chat, tagMessage, m, {
    mentions: [sender]
  });
}

handler.command = ['taguser'];
handler.owner= true;
handler.registrado = true;

export default handler;