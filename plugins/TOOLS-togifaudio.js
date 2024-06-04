const handler = async (m, {conn, usedPrefix, command}) => {

  if (!m.quoted) throw `✧ Responda a un video que desee convertir en Gif con Audio.`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `✧ El tipo de Archivo *${mime}*  no es compatible, intente con otro.`;
  m.reply('❀ Procesando, espere un momento.');
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '❀ Aquí tienes.'}, {quoted: m});
};

handler.command = ['togifaudio'];
handler.registrado = true;
handler.tags = ['tools'];
handler.help = ['togifaudio'];

export default handler;
