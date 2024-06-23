const handler = async (m, {conn}) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  let enviando;
  if (enviando) return
  enviando = true
  const coins = Math.floor(Math.random() * 5000);
  const time = global.db.data.users[m.sender].worktime + 60000;
  if (new Date - global.db.data.users[m.sender].worktime < 60000) return m.reply(`✧ Espera *${msToTime(time - new Date())}* para volver a Trabajar.`);
   let worktext = `❀ ${pickRandom(global.work)} *${coins}* ${global.botcoins}`;
   conn.reply(m.chat, worktext, m, fake,);
  global.db.data.users[m.sender].dinero += coins;
  global.db.data.users[m.sender].worktime = new Date() * 1;
  enviando = false
};
handler.help = ['work', 'w'];
handler.tags = ['rpg'];
handler.command = ['work', 'w', 'chambear'];
handler.fail = null;
handler.registrado = true;
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' Minuto(s) ' + seconds + ' Segundo(s)';
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
global.work = [
  "Trabajaste en una tienda de ropa y ganaste",
  "Trabajaste en una librería y ganaste",
  "Trabajaste en una cafetería y ganaste",
  "Trabajaste en una oficina y ganaste",
  "Trabajaste como repartidor y ganaste",
  "Trabajaste en una fábrica y ganaste",
  "Trabajaste en una peluquería y ganaste",
  "Trabajaste en un restaurante y ganaste",
  "Trabajaste en un gimnasio y ganaste",
  "Trabajaste como asistente de investigación y ganaste",
  "Trabajaste en un hotel y ganaste",
  "Trabajaste en una agencia de viajes y ganaste",
  "Trabajaste en una guardería y ganaste",
  "Trabajaste en una clínica veterinaria y ganaste",
  "Trabajaste en un estudio de arte y ganaste",
  "Trabajaste en una empresa de tecnología y ganaste",
  "Trabajaste como fotógrafo y ganaste",
  "Trabajaste en una consultora y ganaste",
  "Trabajaste en una tienda de música y ganaste",
  "Trabajaste en una florería y ganaste",
  "Trabajaste en una empresa de marketing y ganaste",
  "Trabajaste como entrenador personal y ganaste",
  "Trabajaste en una ONG y ganaste",
  "Trabajaste en una agencia de modelos y ganaste",
  "Trabajaste en una empresa de construcción y ganaste",
  "Trabajaste en una bodega y ganaste",
  "Trabajaste en una empresa de eventos y ganaste",
  "Trabajaste en un periódico y ganaste",
  "Trabajaste como diseñador gráfico y ganaste",
  "Trabajaste en una tienda de electrónicos y ganaste",
  "Trabajaste en una empresa de transporte y ganaste",
  "Trabajaste en una tienda de deportes y ganaste",
  "Trabajaste en un estudio de danza y ganaste",
  "Trabajaste en una pastelería y ganaste",
  "Trabajaste como guía turístico y ganaste",
  "Trabajaste en una tienda de jardinería y ganaste",
  "Trabajaste en una empresa de limpieza y ganaste",
  "Trabajaste en un call center y ganaste",
  "Trabajaste como asistente personal y ganaste",
  "Trabajaste en una clínica dental y ganaste"
];
