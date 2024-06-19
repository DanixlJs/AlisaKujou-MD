var handler = async (m, { conn, text, isOwner }) => {
  if (!isOwner) return;
  const sender = text.replace('@', '') + '@s.whatsapp.net'.trim();
  const tag = `@${sender.split('@')[0]}`;
  await conn.reply(m.chat, tag, m, {
    mentions: [sender]
  });
}
handler.command = ['taguser'];
export default handler;
