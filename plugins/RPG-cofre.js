const handler = async (m, {isPrems, conn}) => {
  const time = global.db.data.users[m.sender].cofretime + 86400000; // 36000000 10 Horas //86400000 24 Horas
  if (new Date - global.db.data.users[m.sender].cofretime < 86400000) throw `✧ Espera *${msToTime(time - new Date())}* para volver a reclamarlo`;

  const img = 'https://telegra.ph/file/62ba6688963b0ad407edd.png';
  const dia = Math.floor(Math.random() * 50);
  const tok = Math.floor(Math.random() * 10);
  const alisacoins = Math.floor(Math.random() * 10000);
  const expp = Math.floor(Math.random() * 10000);

  global.db.data.users[m.sender].diamantes += dia;
  global.db.data.users[m.sender].alisacoins += alisacoins;
  global.db.data.users[m.sender].experiencia += expp;

  const texto = `❀ *COFRE DIARIO*
✰ Abriste tu cofre diario y obtuviste los siguientes recursos:
> → Diamantes ⪼ *${dia}* 
> → AlisaCoins ⪼ *${alisacoins}*
> → Experiencia ⪼ *${expp}*`;

  await conn.reply(m.chat, texto,m ,fake, );
  global.db.data.users[m.sender].cofretime = new Date * 1;
};

handler.help = ['cofre'];
handler.tags = ['rpg'];
handler.registrado = true;
handler.command = ['cofre'];
handler.level = 5;

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

  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
}
