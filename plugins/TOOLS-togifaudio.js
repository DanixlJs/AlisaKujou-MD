const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) return m.reply(`✧ Responda a un video que desee convertir en Gif con Audio.`);
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) return m.reply(`✧ El tipo de Archivo *${mime}*  no es compatible, intente con otro.`);
  m.reply('❀ Procesando, espere un momento.');
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '❀ Aquí tienes.'}, {quoted: m});
};
handler.command = ['togifaudio'];
handler.registrado = true;
handler.tags = ['tools'];
handler.help = ['togifaudio'];
export default handler;
