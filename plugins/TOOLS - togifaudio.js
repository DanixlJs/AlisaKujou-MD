const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `Responda a un Video que desee convertir en Gif con Audio*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `El tipo de Archivo ${mime} no es correcto, Responda a un Video que desee Convertir en Gif con Audio.`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: 'El audio se reproduce cuando abres el Gif.'}, {quoted: m});
};
handler.command = ['togifaudio'];
handler.register = true;
handler.tags = ['tools', 'transformador'];
handler.help = ['togifaudio'];

export default handler;
