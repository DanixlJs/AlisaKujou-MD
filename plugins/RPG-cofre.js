const handler = async (m, {isPrems, conn}) => {
  const time = global.db.data.users[m.sender].lastcofre + 86400000; // 36000000 10 Horas //86400000 24 Horas
  if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) throw `⧼✦⧽ 𝔼𝕤𝕡𝕖𝕣𝕒 *${msToTime(time - new Date())}* 𝕡𝕒𝕣𝕒 𝕧𝕠𝕝𝕧𝕖𝕣 𝕒 𝕣𝕖𝕔𝕝𝕒𝕞𝕒𝕣𝕝𝕠.`;

  const img = 'https://telegra.ph/file/62ba6688963b0ad407edd.png';
  const dia = Math.floor(Math.random() * 50);
  const tok = Math.floor(Math.random() * 10);
  const remcoins = Math.floor(Math.random() * 10000);
  const expp = Math.floor(Math.random() * 10000);

  global.db.data.users[m.sender].limit += dia;
  global.db.data.users[m.sender].money += remcoins;
  global.db.data.users[m.sender].joincount += tok;
  global.db.data.users[m.sender].exp += expp;

  const texto = `⧼✿⧽ 𝔸𝕓𝕣𝕚𝕤𝕥𝕖 𝕥𝕦 𝕔𝕠𝕗𝕣𝕖 𝔻𝕚𝕒𝕣𝕚𝕠 𝕪 𝕠𝕓𝕥𝕚𝕖𝕟𝕖𝕤 𝕝𝕠𝕤 𝕤𝕚𝕘𝕦𝕚𝕖𝕟𝕥𝕖𝕤 𝕣𝕖𝕔𝕦𝕣𝕤𝕠𝕤:
◈ 𝔻𝕚𝕒𝕞𝕒𝕟𝕥𝕖𝕤: *${dia}* 
◈ 𝕋𝕠𝕜𝕖𝕟𝕤: *${tok}*
◈ ℝ𝕖𝕞ℂ𝕠𝕚𝕟𝕤: *${remcoins}*
◈ 𝔼𝕩𝕡𝕖𝕣𝕚𝕖𝕟𝕔𝕚𝕒: *${expp}*`;

  await conn.reply(m.chat, texto);
  global.db.data.users[m.sender].lastcofre = new Date * 1;
};

handler.help = ['cofre'];
handler.tags = ['rpg'];
handler.register = true;
handler.command = ['cofre'];
handler.level = 10;

export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ' Horas ' + minutes + ' Minutos';
}
