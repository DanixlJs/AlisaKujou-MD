const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `⧼✦⧽ 𝕌𝕤𝕖 *{usedPrefix}listcmd* 𝕡𝕒𝕣𝕒 𝕧𝕖𝕣 𝕝𝕒 𝕝𝕚𝕤𝕥𝕒 𝕕𝕖 ℂ𝕞𝕕'𝕤 𝕒𝕘𝕣𝕖𝕘𝕒𝕕𝕠𝕤.`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '⧼✦⧽ 𝔼𝕤𝕥𝕖 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 𝕤𝕠𝕝𝕠 𝕡𝕦𝕖𝕕𝕖 𝕤𝕖𝕣 𝕦𝕤𝕒𝕕𝕠 𝕡𝕠𝕣 𝕖𝕝 𝕕𝕦𝕖ñ𝕠 𝕕𝕖𝕝 𝔹𝕠𝕥.';
  delete sticker[hash];
  m.reply(`⧼✿⧽ ℂ𝕞𝕕 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕕𝕠 𝕔𝕠𝕟 𝕖𝕩𝕚𝕥𝕠.`);
};
handler.command = ['delcmd <cmd>'];
handler.tags = ['owner'];
handler.help = ['delcmd'];
handler.rowner = true;

export default handler;
