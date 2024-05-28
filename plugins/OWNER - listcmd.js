const handler = async (m, {conn}) => {
  conn.reply(m.chat, `- *LISTA DE COMANDOS*

${Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}-*\n- *Codigo:* ${value.locked ? `*(bloqueado)* ${key}` : key}\n- *Comando/Texto:* ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(global.db.data.sticker).map((x) => x.mentionedJid).reduce((a, b) => [...a, ...b], [])});
};
handler.command = ['listcmd', 'cmdlist'];
handler.tags = ['owner'];
handler.help = ['listcmd']
handler.rowner = true;
export default handler;
