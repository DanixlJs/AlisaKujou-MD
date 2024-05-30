const handler = async (m, {conn}) => {

  conn.reply(m.chat, `✰ *𝕃𝕚𝕤𝕥𝕒 𝕤𝕖 ℂ𝕠𝕞𝕒𝕟𝕕𝕠𝕤*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}-*\n
◈ ℂ𝕠𝕕𝕚𝕘𝕠: ${value.locked ? `*(bloqueado)* ${key}
◈ ℂ𝕠𝕞𝕒𝕟𝕕𝕠: ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(global.db.data.sticker).map((x) => x.mentionedJid).reduce((a, b) => [...a, ...b], [])});
};

handler.command = ['listcmd', 'cmdlist'];
handler.tags = ['owner'];
handler.help = ['listcmd'];
handler.rowner = true;

export default handler;
