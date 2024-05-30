import {toAudio} from '../lib/converter.js';

const handler = async (m, {conn, usedPrefix, command}) => {

  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';

  if (!/video|audio/.test(mime)) throw `⧼✦⧽ ℝ𝕖𝕤𝕡𝕠𝕟𝕕𝕒 𝕒 𝕦𝕟 𝕍𝕚𝕕𝕖𝕠 𝕠 ℕ𝕠𝕥𝕒 𝕕𝕖 𝕍𝕠𝕫.`;
  const media = await q.download();

  if (!media) throw '⧼✦⧽ 𝕆𝕔𝕦𝕣𝕣𝕚𝕠́ 𝕦𝕟 𝕖𝕣𝕣𝕠𝕣 𝕚𝕟𝕖𝕤𝕡𝕖𝕣𝕒𝕕𝕠.';
  const audio = await toAudio(media, 'mp4');

  if (!audio.data) throw '⧼✦⧽ 𝕆𝕔𝕦𝕣𝕣𝕚𝕠́ 𝕦𝕟 𝕖𝕣𝕣𝕠𝕣 𝕚𝕟𝕖𝕤𝕡𝕖𝕣𝕒𝕕𝕠.';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};

handler.help = ['tomp3', 'toaudio'];
handler.register = true;
handler.tags = ['tools', 'transformador'];
handler.command = /^to(mp3|audio)$/i;
export default handler;