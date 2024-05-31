import fetch from 'node-fetch';
import {sizeFormatter} from 'human-readable';
const formatSize = sizeFormatter({
  std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`});
const handler = async (m, {conn, args, usedPrefix, isPrems}) => {
  if (!isPrems) throw `⧼✦⧽ 𝔼𝕤𝕥𝕖 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 𝕖𝕤 𝕤𝕠𝕝𝕠 𝕡𝕒𝕣𝕒 𝕌𝕤𝕦𝕒𝕣𝕚𝕠𝕤 ℙ𝕣𝕖𝕞𝕚𝕦𝕞𝕤, 𝕌𝕤𝕖 𝕖𝕝 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 *${usedPrefix}premium* 𝕡𝕒𝕣𝕒 𝕞𝕒́𝕤 𝕚𝕟𝕗𝕠.`;
  if (!args[0]) throw '⧼✦⧽ 𝕆𝕔𝕦𝕣𝕣𝕚𝕠 𝕦𝕟 𝕖𝕣𝕣𝕠𝕣 𝕚𝕟𝕖𝕤𝕡𝕖𝕣𝕒𝕕𝕠, 𝕧𝕖𝕣𝕚𝕗𝕚𝕢𝕦𝕖 𝕢𝕦𝕖 𝕖𝕝 𝕝𝕚𝕟𝕜 𝕤𝕖𝕒 𝕧𝕒𝕝𝕚𝕕𝕠.';
  try {
    GDriveDl(args[0]).then(async (res) => {
      conn.reply(m.chat, '⧼✿⧽ ℙ𝕣𝕠𝕔𝕖𝕤𝕒𝕟𝕕𝕠, 𝕖𝕤𝕡𝕖𝕣𝕖 𝕦𝕟 𝕞𝕠𝕞𝕖𝕟𝕥𝕠.', m);
      if (!res) throw res;
      conn.sendFile(m.chat, res.downloadUrl, res.fileName, '', m, null, {mimetype: res.mimetype, asDocument: true});
    });
  } catch (e) {
    m.reply('⧼✦⧽ 𝕆𝕔𝕦𝕣𝕣𝕚𝕠 𝕦𝕟 𝕖𝕣𝕣𝕠𝕣 𝕚𝕟𝕖𝕤𝕡𝕖𝕣𝕒𝕕𝕠, 𝕧𝕖𝕣𝕚𝕗𝕚𝕢𝕦𝕖 𝕢𝕦𝕖 𝕖𝕝 𝕝𝕚𝕟𝕜 𝕤𝕖𝕒 𝕧𝕒𝕝𝕚𝕕𝕠');
    console.log(e);
  }
};

handler.command = ['gdrive'];
handler.register = true;
handler.tags = ['downloader', 'premium'];
handler.help = ['gdrive <link>'];

export default handler;

async function GDriveDl(url) {
  let id;
  if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL';
  id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1];
  if (!id) throw 'ID Not Found';
  const res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
    method: 'post',
    headers: {
      'accept-encoding': 'gzip, deflate, br',
      'content-length': 0,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'origin': 'https://drive.google.com',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
      'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
      'x-drive-first-party': 'DriveWebUi',
      'x-json-requested': 'true'}});
  const {fileName, sizeBytes, downloadUrl} = JSON.parse((await res.text()).slice(4));
  if (!downloadUrl) throw 'Link Download Limit!';
  const data = await fetch(downloadUrl);
  if (data.status !== 200) throw data.statusText;
  return {downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')};
}
