const handler = async (m, {conn}) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const pp = await conn.profilePictureUrl(who, 'image').catch((_) => null) || './Menu.jpg';
  const name = conn.getName(who);
  let msg = `❀ *RECURSOS ACTUALES*\n✰ *Usuario ⪼* ${name}\n◈ *Diamantes ⪼* ${global.db.data.users[who].diamantes}\n◈ *${global.botcoins} ⪼* ${global.db.data.users[who].dinero}\n◈ *Experiencia ⪼* ${global.db.data.users[who].experiencia}\n◈ *Rango ⪼* ${global.db.data.users[who].rango}\n\n❀ *BANCO*\n✰ *Diamantes ⪼* ${global.db.data.users[who].bank}\n◈ *${global.botcoins} ⪼* ${global.db.data.users[who].bank2}`;
  conn.reply(m.chat, msg, m, fake, )
};
handler.help = ['bal <@tag>'];
handler.tags = ['rpg'];
handler.registrado = true,
handler.command = ['bal', 'balance'];
export default handler;
