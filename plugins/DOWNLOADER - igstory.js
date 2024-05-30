const handler = async (m, {conn, args, usedPrefix, command}) => {

  if (!args[0]) throw `⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕖 𝕦𝕟 𝕦𝕤𝕦𝕒𝕣𝕚𝕠 𝕡𝕒𝕣𝕒 𝕣𝕖𝕒𝕝𝕚𝕫𝕒𝕣 𝕝𝕒 𝕓𝕦𝕤𝕢𝕦𝕖𝕕𝕒.\n◈ 𝔼𝕛𝕖𝕞𝕡𝕝𝕠:\n→ *${usedPrefix + command} luisitocomunica*`;
  await m.reply('⧼✦⧽ ℍ𝕖𝕔𝕙𝕠, 𝕖𝕝 𝕒𝕦𝕕𝕚𝕠 𝕤𝕖 𝕣𝕖𝕡𝕣𝕠𝕕𝕦𝕔𝕖 𝕔𝕦𝕒𝕟𝕕𝕠 𝕒𝕓𝕣𝕖𝕤 𝕖𝕝 𝔾𝕚𝕗.');

  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`);
  const anu = await res.json();
  const anuku = anu.result;
  if (anuku == '') return m.reply('⧼✦⧽ 𝕌𝕤𝕦𝕒𝕣𝕚𝕠 𝕚𝕟𝕔𝕠𝕣𝕣𝕖𝕔𝕥𝕠 𝕠 𝕖𝕝 𝕦𝕤𝕦𝕒𝕣𝕚𝕠 𝕟𝕠 𝕙𝕒 𝕤𝕦𝕓𝕚𝕕𝕠 ℍ𝕚𝕤𝕥𝕠𝕣𝕚𝕒𝕤.');
  for (const i of anuku) {
    const res = await axios.head(i);
    const mime = res.headers['content-type'];
    if (/image/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => {
        return m.reply('⧼✦⧽ 𝕌𝕤𝕦𝕒𝕣𝕚𝕠 𝕚𝕟𝕔𝕠𝕣𝕣𝕖𝕔𝕥𝕠 𝕠 𝕖𝕝 𝕦𝕤𝕦𝕒𝕣𝕚𝕠 𝕟𝕠 𝕙𝕒 𝕤𝕦𝕓𝕚𝕕𝕠 ℍ𝕚𝕤𝕥𝕠𝕣𝕚𝕒𝕤.');
      });
    }
    if (/video/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => {
        return m.reply('⧼✦⧽ 𝕌𝕤𝕦𝕒𝕣𝕚𝕠 𝕚𝕟𝕔𝕠𝕣𝕣𝕖𝕔𝕥𝕠 𝕠 𝕖𝕝 𝕦𝕤𝕦𝕒𝕣𝕚𝕠 𝕟𝕠 𝕙𝕒 𝕤𝕦𝕓𝕚𝕕𝕠 ℍ𝕚𝕤𝕥𝕠𝕣𝕚𝕒𝕤.');
      });
    }
  }
};

handler.help = ['igstory <usuario>'];
handler.tags = ['downloader', 'internet'];
handler.command = ['igstory'];
handler.register = true;

export default handler;
