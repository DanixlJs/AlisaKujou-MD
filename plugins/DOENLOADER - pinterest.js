import {pinterest} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `Ingrese un texto para realizar la busqueda, Ejemplo: *${usedPrefix + command} Rem Icons*`;
  const json = await pinterest(text);
  conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `> Resultados De: *${text}*`.trim(), m);
};
handler.help = ['pinterest <texto>'];
handler.tags = ['internet', 'search'];
handler.command = /^(pinterest)$/i;
handler.register = true;
export default handler;
