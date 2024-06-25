import {wallpaper} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) return m.reply(`✧ Ingresa un texto para realizar la búsqueda.`);
  const res = await wallpaper(text);
  const img = res[Math.floor(Math.random() * res.length)];
  conn.sendFile(m.chat, img, 'error.jpg', `❀ Resultados de *${text}*`, m);
};
handler.help = ['wallpaper'];
handler.tags = ['downloader', 'search'];
handler.command = ['wallpaper'];
handler.registrado = true;
export default handler;
