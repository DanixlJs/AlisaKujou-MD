const ro = 3000;
const handler = async (m, {conn, usedPrefix, command}) => {

  const time = global.db.data.users[m.sender].lastrob + 7200000;

  if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `⧼✦⧽ 𝔼𝕤𝕡𝕖𝕣𝕒 *${msToTime(time - new Date())}* 𝕡𝕒𝕣𝕒 𝕧𝕠𝕝𝕧𝕖𝕣 𝕒 𝕦𝕤𝕒𝕣 𝕖𝕝 𝕔𝕠𝕞𝕒𝕟𝕕𝕠.`;

  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;

  if (!who) throw `⧼✦⧽ 𝔼𝕥𝕚𝕢𝕦𝕖𝕥𝕒 𝕒 𝕦𝕟 𝕌𝕤𝕦𝕒𝕣𝕚𝕠.`;
  if (!(who in global.db.data.users)) throw `⧼✦⧽ 𝔼𝕝 𝕦𝕤𝕦𝕒𝕣𝕚𝕠 𝕟𝕠 𝕖𝕤𝕥𝕒 𝕣𝕖𝕘𝕚𝕤𝕥𝕣𝕒𝕕𝕠.`;

  const users = global.db.data.users[who];
  if (users.afk > -1) return m.react(`👮`);

  const rob = Math.floor(Math.random() * ro);

  if (users.exp < rob) return m.reply(`⧼✦⧽ @${who.split`@`[0]} 𝕥𝕚𝕖𝕟𝕖 𝕞𝕖𝕟𝕠𝕤 𝕕𝕖 *${ro}* 𝕕𝕖 𝕖𝕩𝕡𝕖𝕣𝕚𝕖𝕟𝕔𝕚𝕒.`, null, {mentions: [who]});

  global.db.data.users[m.sender].exp += rob;

  global.db.data.users[who].exp -= rob;

  m.reply(`⧼✦⧽ ℝ𝕠𝕓𝕒𝕤𝕥𝕖 *${rob}* 𝕕𝕖 𝕖𝕩𝕡𝕖𝕣𝕚𝕖𝕟𝕔𝕚𝕒 𝕒 @${who.split`@`[0]}`, null, {mentions: [who]});

  global.db.data.users[m.sender].lastrob = new Date * 1;
};

handler.help = ['rob <@tag>'];
handler.register = true;
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
