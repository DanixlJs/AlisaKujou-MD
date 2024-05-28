/* By https://github.com/ALBERTO9883 */
import fs from 'fs';
import fetch from 'node-fetch';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {text, usedPrefix, command, conn}) => {
  try {
    const res2 = await googleImage(text);
    const sfoto = res2.getRandom();
    if (!text) throw `Ingrese el nombre del paquete a buscar...`;
    const json = await fetch(`https://api.akuari.my.id/search/sticker?query=${text}`);
    const jsons = await json.json();
    const res = jsons.result.map((v, index) => `- *Resultado:* ${1 + index}\n- *Nombre:* ${v.title}\n- *Url:* ${v.url}`).join`\n\n`;
    await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m);
  } catch {
    await m.reply('Ocurrió un error inesperado...');
  }
};
handler.tags = ['sticker', 'search'];
handler.register = true;
handler.command = ['stickersearch'];
handler.help = ['stickersearch <texto>']
export default handler;
