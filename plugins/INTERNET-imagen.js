import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) return m.reply(`✧ Ingrese un texto para realizar la búsqueda, Ejemplo:\n> *${usedPrefix + command} Alya-San*`);
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `❀ *Resultados de ⪼* ${text}`, m);
};
handler.help = ['imagen <texto>'];
handler.tags = ['internet'];
handler.command = ['imagen'];
handler.registrado = true;
export default handler;
