const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `Ingrese un Usuario de Instagram, Ejemplo: *${usedPrefix + command} luisitocomunica*`;
  await m.reply(global.wait);
  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`);
  const anu = await res.json();
  const anuku = anu.result;
  if (anuku == '') return m.reply('Usuario inválido o no ha subido Historias.');
  for (const i of anuku) {
    const res = await axios.head(i);
    const mime = res.headers['content-type'];
    if (/image/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => {
        return m.reply('Usuario inválido o no ha subido Historias.');
      });
    }
    if (/video/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => {
        return m.reply('Usuario inválido o no ha subido Historias.');
      });
    }
  }
};
handler.help = ['igstory <username>'];
handler.tags = ['downloader', 'internet'];
handler.command = ['igstory'];
handler.register = true;

export default handler;
