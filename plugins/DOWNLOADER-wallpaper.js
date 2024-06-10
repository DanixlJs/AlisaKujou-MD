import {wallpaper} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {

  if (!text) throw `✧ Ingresa un texto para realizar la búsqueda, Ejemplo:\n> → *${usedPrefix + command} Alisa Mikhailovna Kujou*`;

  const res = await wallpaper(text);
  const img = res[Math.floor(Math.random() * res.length)];
  conn.sendFile(m.chat, img, 'error.jpg', `❀ Resultados de *${text}*`, m);
};

handler.help = ['wallpaper'];
handler.tags = ['downloader', 'search'];
handler.command = ['wallpaper'];
handler.registrado = true;
handler.diamantes = 2;

export default handler;
