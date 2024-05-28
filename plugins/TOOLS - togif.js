import {webp2mp4} from '../lib/webp2mp4.js';
import {ffmpeg} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `Responda a un Sticker que desee convertir en  Video con el Comando *${usedPrefix + command}*`;
  const mime = m.quoted.mimetype || '';
  if (!/webp/.test(mime)) throw `Responda a un Sticker que desee convertir en  Video con el Comando *${usedPrefix + command}*`;
  const media = await m.quoted.download();
  let out = Buffer.alloc(0);
  if (/webp/.test(mime)) {
    out = await webp2mp4(media);
  } else if (/audio/.test(mime)) {
    out = await ffmpeg(media, [
      '-filter_complex', 'color',
      '-pix_fmt', 'yuv420p',
      '-crf', '51',
      '-c:a', 'copy',
      '-shortest',
    ], 'mp3', 'mp4');
  }
  await conn.sendFile(m.chat, out, 'error.mp4', '> Su Video', m, 0, {thumbnail: out});
};
handler.help = ['tovideo'];
handler.tags = ['transformador', 'tools'];
handler.register = true;
handler.command = ['tovideo', 'togif'];
export default handler;