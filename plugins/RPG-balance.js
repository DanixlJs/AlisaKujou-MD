const handler = async (m, {conn}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const pp = await conn.profilePictureUrl(who, 'image').catch((_) => null) || './Menu.jpg';

  const name = conn.getName(who);

  conn.sendFile(m.chat, pp, 'pp.jpg', `✰ *𝕀𝕟𝕗𝕠 𝕕𝕖𝕝 𝕌𝕤𝕦𝕒𝕣𝕚𝕠*\n≫ 𝕌𝕤𝕦𝕒𝕣𝕚𝕠: ${name}\n◈ 𝔻𝕚𝕒𝕞𝕒𝕟𝕥𝕖𝕤: ${global.db.data.users[who].diamond}\n◈ ℝ𝕖𝕞ℂ𝕠𝕚𝕟𝕤: ${global.db.data.users[who].coin}\n◈ 𝔼𝕩𝕡𝕖𝕣𝕚𝕖𝕟𝕔𝕚𝕒: ${global.db.data.users[who].exp}\n◈ ℝ𝕒𝕟𝕘𝕠: ${global.db.data.users[who].role}`, m)
};

handler.help = ['bal <@tag>'];
handler.tags = ['rpg'];
handler.register = true,
handler.command = ['bal', 'balance'];

export default handler;
