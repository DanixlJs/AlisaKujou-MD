const handler = async (m, {conn, text, usedPrefix, command}) => {

  global.db.data.sticker = global.db.data.sticker || {};

  if (!m.quoted) throw '⧼✦⧽ ℝ𝕖𝕤𝕡𝕠𝕟𝕕𝕒 𝕒 𝕦𝕟 𝕊𝕥𝕚𝕔𝕜𝕖𝕣 𝕠 𝕀𝕞𝕒𝕘𝕖𝕟.';
  if (!m.quoted.fileSha256) throw '⧼✦⧽ ℝ𝕖𝕤𝕡𝕠𝕟𝕕𝕒 𝕒 𝕦𝕟 𝕊𝕥𝕚𝕔𝕜𝕖𝕣 𝕠 𝕀𝕞𝕒𝕘𝕖𝕟.';
  if (!text) throw `⧼✦⧽ ℝ𝕖𝕤𝕡𝕠𝕟𝕕𝕒 𝕒 𝕦𝕟 𝕊𝕥𝕚𝕔𝕜𝕖𝕣 𝕠 𝕀𝕞𝕒𝕘𝕖𝕟.`;
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) throw '⧼✦⧽ 𝕊𝕠𝕝𝕠 𝕖𝕝 ℂ𝕣𝕖𝕒𝕕𝕠𝕣 𝕕𝕖𝕝 𝔹𝕠𝕥 𝕡𝕦𝕖𝕕𝕖 𝕦𝕤𝕒𝕣 𝕖𝕤𝕥𝕒 𝕗𝕦𝕟𝕔𝕚ó𝕟.';
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`⧼✿⧽ ℂ𝕞𝕕 𝕒𝕘𝕣𝕖𝕘𝕒𝕕𝕠 𝕔𝕠𝕟 𝕖𝕩𝕚𝕥𝕠.`);
};

handler.command = ['setcmd', 'addcmd'];
handler.tags = ['owner'];
handler.help = ['setcmd <texto>'];
handler.rowner = true;

export default handler;
