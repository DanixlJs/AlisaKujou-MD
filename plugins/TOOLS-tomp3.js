import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) return m.reply(`✧ Responda a un Video o Nota de Voz.`);
  const media = await q.download();
  if (!media) return m.reply('✧ Ocurrió un error inesperado.');
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) return m.reply('✧ Ocurrió un error inesperado.');
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.help = ['tomp3', 'toaudio'];
handler.registrado = true;
handler.tags = ['tools'];
handler.command = ['tomp3', 'toaudio'];
export default handler;
