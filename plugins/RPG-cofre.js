const handler = async (m, {isPrems, conn}) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  const time = global.db.data.users[m.sender].cofretime + 86400000;
  if (new Date - global.db.data.users[m.sender].cofretime < 86400000) return m.reply(`✧ Espera *${msToTime(time - new Date())}* para volver a reclamarlo`);
  const dia = Math.floor(Math.random() * 50);
  const dinero = Math.floor(Math.random() * 10000);
  const expp = Math.floor(Math.random() * 10000);
  global.db.data.users[m.sender].diamantes += dia;
  global.db.data.users[m.sender].dinero += dinero;
  global.db.data.users[m.sender].experiencia += expp;
  const texto = `❀ *COFRE DIARIO*
✰ Abriste tu cofre diario y obtuviste los siguientes recursos:
> ◈ *Diamantes ⪼ ${dia}* 
> ◈ *${global.botcoins} ⪼ ${dinero}*
> ◈ *Experiencia ⪼ ${expp}*`;
  await conn.reply(m.chat, texto, m ,fake, );
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
