import {addExif} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  if (!m.quoted) return m.reply('✧ Responda a un Sticker.');
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) return m.reply('Responda a un Sticker.');
    const img = await m.quoted.download();
    if (!img) return m.reply('Responda a un Sticker.');
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else return m.reply('✧ Ocurrió un error inesperado.');
  }
};
handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = ['wm'];
handler.registrado = true;
export default handler;
