const handler = async (m, {conn, isOwner}) => {
  const chats = Object.entries(global.db.data.chats).filter((chat) => chat[1].isBanned);
  const users = Object.entries(global.db.data.users).filter((user) => user[1].baneado);
  const caption = `❀ *USUARIOS BANEADOS*
✰ *Total ⪼* ${users.length} ${users ? '\n' + users.map(([jid], i) => `
${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : ''}

❀ *CHATS MUTEADOS*
✰ *Total ⪼* ${chats.length} ${chats ? '\n' + chats.map(([jid], i) => `
${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : ''}
`.trim();
  m.reply(caption, null, {mentions: conn.parseMention(caption)});
};
handler.help = ['banlist'];
handler.command = ['banlist'];
handler.rowner = true;
handler.registrado = true;
export default handler;
