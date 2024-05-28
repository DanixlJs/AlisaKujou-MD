import fs from 'fs';
import fetch from 'node-fetch';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {text, usedPrefix, command, conn}) => {
  if (!text) throw `Ingrese el nombre del paquete a buscar...`;
  try {
    const res2 = await googleImage(text);
    const sfoto = res2.getRandom();
    const json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkeysapi}&query=${text}`);
    const jsons = await json.json();
    const {stickers} = jsons.result[0];
    const res = jsons.result.map((v, index) => `- *Resultado:* ${1 + index}\n- *Nombre:* ${v.title}\n- *Autor:* ${v.author}\n- *Url:* ${v.url}`).join`\n\n`;
    await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m);
  } catch {
    await m.reply('Ocurrió un error inesperado...');
  }
};

handler.tags = ['sticker', 'search'];
handler.register = true;
handler.help = ['stickersearch2 <texto>']
handler.command = ['stickersearch2'];
export default handler;
