import fetch from 'node-fetch';
import cheerio from 'cheerio';
const handler = async (m, {conn, args, command, usedPrefix }) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) return m.reply(`✧ Los comandos *NSFW* están desactivados en este grupo.\n> *${usedPrefix}on modohorny* para activarlos si eres Administrador.`);
  if (!args[0]) return m.reply(`✧ Link inválido.`);
  try {
    await conn.reply(m.chat, '❀ Procesando, espere un momento.', m);
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
              m.reply(`✧ Asegúrate de elegir un número del 1 al ${matchingItem.urls.length}`);
            }
          } else {
            m.reply(`✧ Primero realiza la búsqueda con *${usedPrefix}xnxxsearch <texto>* para poder descargarlo con *${usedPrefix + command} <numero>*`);
          }
        } else {
          m.reply(`✧ Primero realiza la búsqueda con *${usedPrefix}xnxxsearch <texto>* para poder descargarlo con *${usedPrefix + command} <numero>*`);
        }
      }
    }
    const res = await xnxxdl(xnxxLink);
    const json = await res.result.files;
    conn.sendMessage(m.chat, {document: {url: json.high}, mimetype: 'video/mp4', fileName: res.result.title}, {quoted: m});
  } catch {
    m.reply('✧ Ocurrió un error inesperado.');
  }
};
handler.help = ['xnxxdl <numero>'];
handler.command = ['xnxxdl'];
handler.tags = ['downloader', 'premium', 'nsfw'];
handler.premium = true;
handler.registrado = true;
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
