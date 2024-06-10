const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (m.fromMe) return;
  if (isAdmin) throw '✧ Ya eras Admin del Grupo.';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
    m.react('✅')
    let nn = conn.getName(m.sender);
    
    conn.reply('120363284046748076@g.us', `✧ *${nn}* se dio Auto Admin en:\n> → ${groupMetadata.subject}.`, m, fake ,);
  } catch {
    await m.reply('✧ Ocurrio un error inesperado.');
  }
};

handler.help = ['admin'];
handler.command = ['admin'];
handler.mods = true;
handler.group = true;
handler.botAdmin = true;

export default handler;