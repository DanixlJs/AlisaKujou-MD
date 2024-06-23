let handler = async (m, { conn }) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  let user = global.db.data.users[m.sender];
  let time = user.dailytime + 86400000;
  if (new Date() - user.dailytime < 86400000) {
    return conn.reply(m.chat, `✧ Espera *${msToTime(time - new Date())}* para volver a reclamarlo.`, m);
  }
  let reward = user.premium ? 200000 : 100000;
  user.dinero += reward;
  conn.reply(m.chat, `❀ *REWARD DIARIO*\n✰ Reclamaste tu recompensa diaria y obtuviste *${reward} ${global.botcoins}*.`, m);
  user.dailytime = new Date().getTime();
};
handler.help = ['daily'];
handler.tags = ['rpg'];
handler.command = ['daily'];
handler.registrado = true;
export default handler;
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  
  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
}