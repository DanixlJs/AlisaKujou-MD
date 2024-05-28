import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `Responda a un Video o Nota de Voz que desee convertir a Audio/MP3.`;
  const media = await q.download();
  if (!media) throw 'Ocurrió un error inesperado, vuelva a intertarlo.';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw 'Ocurrió un error al convertir su Archivo a MP3, vuelva a intentarlo.';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};

handler.help = ['tomp3', 'toaudio'];
handler.register = true;
handler.tags = ['tools', 'transformador'];
handler.command = /^to(mp3|audio)$/i;
export default handler;