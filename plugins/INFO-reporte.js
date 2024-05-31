const handler = async (m, {conn, text, usedPrefix, command, groupMetadata}) => {

  if (!text) throw `⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕖 𝕖𝕝 𝕖𝕣𝕣𝕠𝕣 𝕢𝕦𝕖 𝕢𝕦𝕚𝕖𝕣𝕒 𝕣𝕖𝕡𝕠𝕣𝕥𝕒𝕣.`;

  if (text.length < 10) throw `⧼✦⧽ 𝔼𝕝 𝕣𝕖𝕡𝕠𝕣𝕥𝕖 𝕕𝕖𝕓𝕖 𝕥𝕖𝕟𝕖𝕣 𝕞𝕒𝕤 𝕕𝕖 10 ℂ𝕒𝕣𝕒𝕔𝕥𝕖𝕣𝕖𝕤.`;

  if (text.length > 1000) throw `⧼✦⧽ 𝔼𝕝 𝕝𝕚𝕞𝕚𝕥𝕖 𝕕𝕖𝕝 𝕣𝕖𝕡𝕠𝕣𝕥𝕖 𝕖𝕤 𝕕𝕖 1000 ℂ𝕒𝕣𝕒𝕔𝕥𝕖𝕣𝕖𝕤.`;

  const teks = `╾══⟬ 𝗥𝗘𝗣𝗢𝗥𝗧𝗘 𝗥𝗘𝗖𝗜𝗕𝗜𝗗𝗢 ⟭══╼\n\n◈ 𝕌𝕤𝕦𝕒𝕣𝕚𝕠: @${m.sender.split`@`[0]}\n◈ 𝕄𝕖𝕟𝕤𝕒𝕛𝕖: ${text}\n◈ 𝔾𝕣𝕦𝕡𝕠: ${groupMetadata.subject}\n◈ 𝕀𝔻: ${groupMetadata.id}\n\n✿ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\n◈ ℕ𝕠𝕞𝕓𝕣𝕖: ${global.botname}\n◈ 𝕍𝕖𝕣𝕤𝕚𝕠𝕟: ${global.vs}`;

conn.sendFile('120363284046748076@g.us', global.icons, 'img.jpg', teks);

/*  conn.reply('120363284046748076@g.us', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});*/

  m.reply(`⧼✿⧽ 𝔼𝕝 ℝ𝕖𝕡𝕠𝕣𝕥𝕖 𝕗𝕦𝕖 𝕖𝕟𝕧𝕚𝕒𝕕𝕠 𝕒 𝕞𝕚 ℂ𝕣𝕖𝕒𝕕𝕠𝕣, 𝕕𝕖 𝕤𝕖𝕣 𝕟𝕖𝕔𝕖𝕤𝕒𝕣𝕚𝕠 𝕥𝕖𝕟𝕕𝕣𝕒 𝕦𝕟𝕒 𝕣𝕖𝕤𝕡𝕦𝕖𝕤𝕥𝕒.`);
};

handler.help = ['report <texto>', 'reportar <texto>'];
handler.tags = ['info'];
handler.command = ['report', 'reportar'];
handler.group = true,
handler.register = true;

export default handler;