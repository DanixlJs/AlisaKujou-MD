const handler = async (m, {conn}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const pp = await conn.profilePictureUrl(who, 'image').catch((_) => null) || './Menu.jpg';

  const name = conn.getName(who);

  conn.sendFile(m.chat, pp, 'pp.jpg', `❀ *BALANCE*\n✰ *Usuario ⪼* ${name}\n◈ *Diamantes ⪼* ${global.db.data.users[who].diamond}\n◈ *AlisaCoins ⪼* ${global.db.data.users[who].money}\n◈ *Experiencia ⪼* ${global.db.data.users[who].exp}\n◈ *Rango ⪼* ${global.db.data.users[who].role}`, m)
};

handler.help = ['bal <@tag>'];
handler.tags = ['rpg'];
handler.register = true,
handler.command = ['bal', 'balance'];

export default handler;
