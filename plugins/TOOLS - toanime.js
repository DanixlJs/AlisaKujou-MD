import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/image/g.test(mime)) throw '⧼✦⧽ ℝ𝕖𝕤𝕡𝕠𝕟𝕕𝕒 𝕒 𝕦𝕟𝕒 𝕚𝕞𝕒𝕘𝕖𝕟 𝕡𝕒𝕣𝕒 𝕔𝕠𝕟𝕧𝕖𝕣𝕥𝕚𝕣 𝕖𝕟 𝔸𝕟𝕚𝕞𝕖.';
  m.reply('⧼✿⧽ ℙ𝕣𝕠𝕔𝕖𝕤𝕒𝕟𝕕𝕠, 𝕖𝕤𝕡𝕖𝕣𝕖 𝕦𝕟 𝕞𝕠𝕞𝕖𝕟𝕥𝕠');
  const data = await q.download?.();
  const image = await uploadImage(data);
  try {
    const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
    await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
  } catch (i) {
    try {
      const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
      await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
    } catch (a) {
      try {
        const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
        await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
      } catch (e) {
        throw '⧼✦⧽ 𝕆𝕔𝕦𝕣𝕣𝕚𝕠́ 𝕦𝕟 𝕖𝕣𝕣𝕠𝕣 𝕚𝕟𝕖𝕤𝕡𝕖𝕣𝕒𝕕𝕠.';
      }
    }
  }
};
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.register = true;
handler.command = ['toanime'];

export default handler;
