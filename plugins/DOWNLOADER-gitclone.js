import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) return m.reply(`✧ Ingrese el Link del Repositorio, Ejemplo:\n> *${usedPrefix + command} https://github.com/DanixlJs/AlisaKujou-MD*`);
  if (!regex.test(args[0])) return m.reply('✧ El Link no es válido.');
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`❀ Procesando, espere un momento.`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = ['gitclone'];
handler.diamantes = 50;
handler.registrado = true;
export default handler;
