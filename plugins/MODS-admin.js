const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply('✧ Ya eras Admin del Grupo.');
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
    m.react('✅')
    let nn = conn.getName(m.sender);
    conn.reply('120363292970479309@g.us', `✧ @${m.sender.replace('@s.whatsapp.net', '').trim()} se dio Auto Admin en:\n> *${groupMetadata.subject}*`, m, { mentions: [m.sender]});
  } catch {
    m.reply('✧ Ocurrio un error inesperado.');
  }
};
handler.tags = ['mods'];
handler.help = ['admin'];
handler.command = ['admin'];
handler.mods = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
