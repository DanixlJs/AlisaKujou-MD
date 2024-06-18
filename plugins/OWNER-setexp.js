import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) return m.reply('✧ Etiqueta a un Usuario.');
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '✧ Ingrese una cantidad.';
  if (isNaN(txt)) return m.reply('✧ Solo se permiten números.');
  const xp = parseInt(txt);
  let experiencia = xp;
  const pjk = Math.ceil(xp * pajak);
  experiencia += pjk;
  if (experiencia < 100) return m.reply('✧ El mínimo es 100.');
  const users = global.db.data.users;
  users[who].experiencia += xp;
  let nametag = conn.getName(who)
  m.reply(`❀ Se han añadido *${xp}* de experiencia a *${nametag}*`);
};
handler.help = ['setexp <@tag>', 'addexp <@tag>'];
handler.command = ['setexp', 'addexp'];
handler.register = true;
handler.group = true;
handler.rowner = true;
handler.tags = ['owner'];
export default handler;
