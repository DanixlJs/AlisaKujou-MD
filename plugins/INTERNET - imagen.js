import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `Ingrese un texto para realizar la busqueda, Ejemplo: *${usedPrefix + command} Rem*`;
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `> Resultado De: *${text}*`, m);
};
handler.help = ['imagen <texto>'];
handler.tags = ['internet', 'downloader'];
handler.command = /^(image|imagen)$/i;
handler.register = true;

export default handler;
