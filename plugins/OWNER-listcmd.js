const handler = async (m, {conn}) => {
  conn.reply(m.chat, `❀ *LISTA DE CMD's*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}- Código ⪼* ${value.locked ? `*(Bloqueado)* ${key}` : key}\n◈ *Comando ⪼* ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(global.db.data.sticker).map((x) => x.mentionedJid).reduce((a, b) => [...a, ...b], [])});
};
handler.help = ['listcmd', 'cmdlist'];
handler.command = ['listcmd', 'cmdlist'];
handler.rowner = true;
export default handler;