import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, command}) => {

  const res = await fetch('https://api.waifu.pics/sfw/waifu');
  if (!res.ok) throw await res.text();
  const json = await res.json();
  if (!json.url) throw '✧ Ocurrió un error inesperado';

//conn.sendFile(m.chat, json.url, 'error.jpg', `❀ 😻`, m);

conn.sendButton(m.chat, `❀ Random Waifu 😻`, '> *Nota ⪼* No genere Spam con los botones o será Baneado.', json.url, [['🔄 SIGUIENTE', `${usedPrefix + command}`]], m)
};

handler.help = ['waifu', 'rw'];
handler.tags = ['anime'];
handler.command = ['waifu', 'rw'];
handler.register = true;
handler.group = true;


export default handler;
