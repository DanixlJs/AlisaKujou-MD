import {pinterest} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {

  if (!text) throw `✧ Ingresa un texto para realizar la búsqueda, Ejemplo:\n> → *${usedPrefix + command} Alisa Mikhailovna Kujou*`;
  const json = await pinterest(text);

  conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `❀ *Resultados de ⪼* ${text}`.trim(), m);
};

handler.help = ['pinterest <texto>', 'pin <texto>'];
handler.tags = ['search'];
handler.command = ['pin', 'pinterest']
handler.register = true;

export default handler;
