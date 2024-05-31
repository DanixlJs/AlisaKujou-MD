import fetch from 'node-fetch';
import cheerio from 'cheerio';
const handler = async (m, {conn, args, command, usedPrefix, isPrems}) => {
  if (!isPrems) throw `⧼✦⧽ 𝔼𝕤𝕥𝕖 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 𝕖𝕤 𝕤𝕠𝕝𝕠 𝕡𝕒𝕣𝕒 𝕌𝕤𝕦𝕒𝕣𝕚𝕠𝕤 ℙ𝕣𝕖𝕞𝕚𝕦𝕞𝕤, 𝕌𝕤𝕖 𝕖𝕝 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 *${usedPrefix}premium* 𝕡𝕒𝕣𝕒 𝕞𝕒́𝕤 𝕚𝕟𝕗𝕠.`;
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `⧼✦⧽ 𝕃𝕠𝕤 𝕔𝕠𝕞𝕒𝕟𝕕𝕠𝕤 ℕ𝕊𝔽𝕎 𝕖𝕤𝕥𝕒𝕟 𝕕𝕖𝕤𝕒𝕔𝕥𝕚𝕧𝕒𝕕𝕠𝕤, 𝕌𝕤𝕖 𝕖𝕝 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 *${usedPrefix}enable modohorny* 𝕡𝕒𝕣𝕒 𝕒𝕔𝕥𝕚𝕧𝕒𝕣𝕝𝕠𝕤.`;
  if (!args[0]) throw `⧼✦⧽ 𝕃𝕚𝕟𝕜 𝕚𝕟𝕧𝕒𝕝𝕚𝕕𝕠.`;
  try {
    await conn.reply(m.chat, '⧼✿⧽ ℙ𝕣𝕠𝕔𝕖𝕤𝕒𝕟𝕕𝕠, 𝕖𝕤𝕡𝕖𝕣𝕖 𝕦𝕟 𝕞𝕠𝕞𝕖𝕟𝕥𝕠.', m);
    let xnxxLink = '';
    if (args[0].includes('xnxx')) {
      xnxxLink = args[0];
    } else {
      const index = parseInt(args[0]) - 1;
      if (index >= 0) {
        if (Array.isArray(global.videoListXXX) && global.videoListXXX.length > 0) {
          const matchingItem = global.videoListXXX.find((item) => item.from === m.sender);
          if (matchingItem) {
            if (index < matchingItem.urls.length) {
              xnxxLink = matchingItem.urls[index];
            } else {
              throw `⧼✦⧽ ℕ𝕠 𝕤𝕖 𝕖𝕟𝕔𝕠𝕟𝕥𝕣ó 𝕦𝕟 𝕝𝕚𝕟𝕜 𝕧𝕒𝕝𝕚𝕕𝕠 𝕡𝕒𝕣𝕒 𝕖𝕤 𝕟ú𝕞𝕖𝕣𝕠, 𝕒𝕤𝕖𝕘𝕦𝕣𝕒𝕥𝕖 𝕕𝕖 𝕖𝕝𝕖𝕘𝕚𝕣 1 𝕠 ${matchingItem.urls.length}`;
            }
          } else {
            throw `⧼✦⧽ ℙ𝕣𝕚𝕞𝕖𝕣𝕠 𝕣𝕖𝕒𝕝𝕚𝕫𝕒 𝕝𝕒 𝕓𝕦𝕤𝕢𝕦𝕖𝕕𝕒 𝕕𝕖𝕝 𝕧𝕚𝕕𝕖𝕠 𝕔𝕠𝕟 *${usedPrefix}xnxxsearch <texto>* 𝕡𝕒𝕣𝕒 𝕡𝕠𝕕𝕖𝕣 𝕦𝕤𝕒𝕣 𝕖𝕝 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 *${usedPrefix + command} <numero>*`;
          }
        } else {
          throw `⧼✦⧽ ℙ𝕣𝕚𝕞𝕖𝕣𝕠 𝕣𝕖𝕒𝕝𝕚𝕫𝕒 𝕝𝕒 𝕓𝕦𝕤𝕢𝕦𝕖𝕕𝕒 𝕕𝕖𝕝 𝕧𝕚𝕕𝕖𝕠 𝕔𝕠𝕟 *${usedPrefix}xnxxsearch <texto>* 𝕡𝕒𝕣𝕒 𝕡𝕠𝕕𝕖𝕣 𝕦𝕤𝕒𝕣 𝕖𝕝 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 *${usedPrefix + command} <numero>*`;
        }
      }
    }
    const res = await xnxxdl(xnxxLink);
    const json = await res.result.files;
    conn.sendMessage(m.chat, {document: {url: json.high}, mimetype: 'video/mp4', fileName: res.result.title}, {quoted: m});
  } catch {
    throw '⧼✦⧽ 𝕆𝕔𝕦𝕣𝕣𝕚𝕠́ 𝕦𝕟 𝕖𝕣𝕣𝕠𝕣 𝕚𝕟𝕖𝕤𝕡𝕖𝕣𝕒𝕕𝕠.';
  }
};

handler.help = ['xnxxdl <numero>'];
handler.command = ['xnxxdl'];
handler.tags = ['downloader', 'premium', 'nsfw'];
handler.register = true;

export default handler;

async function xnxxdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = $('meta[property="og:title"]').attr('content');
      const duration = $('meta[property="og:duration"]').attr('content');
      const image = $('meta[property="og:image"]').attr('content');
      const videoType = $('meta[property="og:video:type"]').attr('content');
      const videoWidth = $('meta[property="og:video:width"]').attr('content');
      const videoHeight = $('meta[property="og:video:height"]').attr('content');
      const info = $('span.metadata').text();
      const videoScript = $('#video-player-bg > script:nth-child(6)').html();
      const files = {
        low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
        high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
        HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
        thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
        thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
        thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
        thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1]};
      resolve({status: 200, result: {title, URL, duration, image, videoType, videoWidth, videoHeight, info, files}});
    }).catch((err) => reject({code: 503, status: false, result: err}));
  });
}
