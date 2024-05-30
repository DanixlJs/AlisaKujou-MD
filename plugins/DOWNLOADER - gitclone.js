import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {

  if (!args[0]) throw `⧼✦⧽ 𝕌𝕤𝕠 ℂ𝕠𝕣𝕣𝕖𝕔𝕥𝕠:\n→ *{usedPrefix + command} https://github.com/DanixlJs/RemCham-MD*`;
  if (!regex.test(args[0])) throw '⧼✦⧽ 𝕃𝕚𝕟𝕜 𝕚𝕟𝕔𝕠𝕣𝕣𝕖𝕔𝕥𝕠.';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`⧼✿⧽ ℙ𝕣𝕠𝕔𝕖𝕤𝕒𝕟𝕕𝕠, 𝕖𝕤𝕡𝕖𝕣𝕖 𝕦𝕟 𝕞𝕠𝕞𝕖𝕟𝕥𝕠.`);
  conn.sendFile(m.chat, url, filename, null, m);
};

handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = ['gitclone'];

handler.register = true;

export default handler;
