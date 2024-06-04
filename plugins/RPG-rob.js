const ro = 3000;
const handler = async (m, {conn, usedPrefix, command}) => {

  const time = global.db.data.users[m.sender].robtime + 7200000;

  if (new Date - global.db.data.users[m.sender].robtime < 7200000) throw `✧ Espera *${msToTime(time - new Date())}* para volver a robar..`;

  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;

  if (!who) throw `✧ Etiqueta a un usuario.`;
  if (!(who in global.db.data.users)) throw `✧ El usuario no está registrado.`;

  const users = global.db.data.users[who];
  if (users.afk > -1) return m.react(`👮`);

  const rob = Math.floor(Math.random() * ro);

  if (users.exp < rob) return m.reply(`✧ @${who.split`@`[0]} tiene menos de *${ro}* de experiencia.`, null, {mentions: [who]});

  global.db.data.users[m.sender].experiencia += rob;

  global.db.data.users[who].experiencia -= rob;

  m.reply(`✧ Robaste *${rob}* de experiencia a @${who.split`@`[0]}`, null, {mentions: [who]});

  global.db.data.users[m.sender].robtime = new Date * 1;
};

handler.help = ['rob <@tag>'];
handler.registrado = true;
handler.group = true;
handler.tags = ['rpg'];
handler.command = ['robar', 'rob'];

export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
}
