import { isNumber } from 'util';
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) return m.reply(`✧ Asegúrate de etiquetar al usuario y usar el comando de la siguiente manera, Ejemplo:\n> *${usedPrefix + command} <@tag> <duración>*`);
  
  let [mentionedJid] = m.mentionedJid || [];
  if (!mentionedJid) return m.reply('✧ Por favor, etiqueta a un usuario.');
  
  let duration = args[1];
  if (!duration) return m.reply(`✧ Asegúrate de ingresar el tiempo, Ejemplo:\n> *${usedPrefix + command} @DanixlJs 1h*`);
  
  const timeMap = {
    'h': 60 * 60 * 1000,
    'd': 24 * 60 * 60 * 1000,
    's': 7 * 24 * 60 * 60 * 1000,
    'm': 30 * 24 * 60 * 60 * 1000,
    'a': 365 * 24 * 60 * 60 * 1000
  };
  
  let time = parseInt(duration);
  let unit = duration.match(/[a-zA-Z]+/g)?.[0];
  if (!time || !unit || !timeMap[unit]) return m.reply(`✧ Duración inválida, Asegúrate de usarlo de la siguiente manera, Ejemplo:\n> *${usedPrefix + command} @DanixlJs 1h*`);
  
  let msDuration = time * timeMap[unit];

  if (!global.db.data.users[mentionedJid]) global.db.data.users[mentionedJid] = {};
  global.db.data.users[mentionedJid].premium = true;
  global.db.data.users[mentionedJid].premiumTime = Date.now() + msDuration;

  conn.reply(m.chat,`❀ *@${mentionedJid}* ahora es usuario un premium por *${time}${unit}*`, m, { mentions: [mentionedJid] });
};

handler.help = ['addprem <@tag> <duración>'];
handler.tags = ['owner'];
handler.command = ['addprem'];
handler.rowner = true;
handler.registrado = true;

export default handler;
