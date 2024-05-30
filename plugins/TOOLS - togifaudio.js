const handler = async (m, {conn, usedPrefix, command}) => {

  if (!m.quoted) throw `⧼✦⧽ ℝ𝕖𝕤𝕡𝕠𝕟𝕕𝕒 𝕒 𝕦𝕟 𝕍𝕚𝕕𝕖𝕠 𝕢𝕦𝕖 𝕕𝕖𝕤𝕖𝕖 𝕔𝕠𝕟𝕧𝕖𝕣𝕥𝕚𝕣 𝕖𝕟 𝔾𝕚𝕗 𝕔𝕠𝕟 𝔸𝕦𝕕𝕚𝕠.`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `⧼✦⧽ 𝔼𝕝 𝕥𝕚𝕡𝕠 𝕕𝕖 𝔸𝕣𝕔𝕙𝕚𝕧𝕠 ${mine}  𝕟𝕠 𝕖𝕤 𝕔𝕠𝕞𝕡𝕒𝕥𝕚𝕓𝕝𝕖, 𝕚𝕟𝕥𝕖𝕟𝕥𝕖 𝕔𝕠𝕟 𝕠𝕥𝕣𝕠.`;
  m.reply('⧼✿⧽ ℙ𝕣𝕠𝕔𝕖𝕤𝕒𝕟𝕕𝕠, 𝕖𝕤𝕡𝕖𝕣𝕖 𝕦𝕟 𝕞𝕠𝕞𝕖𝕟𝕥𝕠');
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '⧼✦⧽ ℍ𝕖𝕔𝕙𝕠, 𝕖𝕝 𝕒𝕦𝕕𝕚𝕠 𝕤𝕖 𝕣𝕖𝕡𝕣𝕠𝕕𝕦𝕔𝕖 𝕔𝕦𝕒𝕟𝕕𝕠 𝕒𝕓𝕣𝕖𝕤 𝕖𝕝 𝔾𝕚𝕗.'}, {quoted: m});
};

handler.command = ['togifaudio'];
handler.register = true;
handler.tags = ['tools'];
handler.help = ['togifaudio'];

export default handler;
