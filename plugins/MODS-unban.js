const handler = async (m, {conn, text}) => {
  if (!text) throw '✧ Etiqueta al usuario que quieras desbanear.';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '✧ Etiqueta al usuario que quieras desbanear.';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `❀ El usuario ha sido Desbaneado.`, m, fake, );
};

handler.help = ['unban <@tag>'];
handler.tags = ['mods'];
handler.command = ['unban'];
handler.mods = true;

export default handler;
