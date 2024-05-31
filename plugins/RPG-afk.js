const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkReason = text;
  m.reply(`⧼✦⧽ 𝔼𝕝 𝕦𝕤𝕦𝕒𝕣𝕚𝕠 *${conn.getName(m.sender)}* 𝕖𝕤𝕥𝕒𝕣𝕒 𝕚𝕟𝕒𝕔𝕥𝕚𝕧𝕠.\n◈ 𝕄𝕠𝕥𝕚𝕧𝕠: ${text ? ' ' + text : 'Sin Especificar'}
`);
};

handler.help = ['afk <motivo>'];
handler.tags = ['info', 'rpg'];
handler.command = ['afk'];
handler.register = true;

export default handler;
