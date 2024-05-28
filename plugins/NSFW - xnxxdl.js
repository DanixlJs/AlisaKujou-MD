import fetch from 'node-fetch';
import cheerio from 'cheerio';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!global.db.data.users[m.sender].premium) throw `Este comando es solo para usuarios premiums, use *${prefix}premium* para más info.`;
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `Los comandos NSFW están desactivados.\n\n> Un Administrador puede activarlo con *${prefix}nsfw on*`;
  if (!args[0]) throw `Ingresa un link válido...`;
  try {
    await conn.reply(m.chat, 'Descargando video, espere un momento...', m);
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
              throw `No se encontró un link válido para es número, asegurate de elegir 1 o ${matchingItem.urls.length}`;
            }
          } else {
            throw `Primero realiza la busqueda del video con *${usedPrefix}xnxxsearch <texto>* para poder usar el comando *${usedPrefix + command} <numero>*`;
          }
        } else {
          throw `Primero realiza la busqueda del video con *${usedPrefix}xnxxsearch <texto>* para poder usar el comando *${usedPrefix + command} <numero>*`;
        }
      }
    }
    const res = await xnxxdl(xnxxLink);
    const json = await res.result.files;
    conn.sendMessage(m.chat, {document: {url: json.high}, mimetype: 'video/mp4', fileName: res.result.title}, {quoted: m});
  } catch {
    throw 'Hubo un error, intentelo de nuevo.';
  }
};

handler.help = ['xnxxdl <numero>'];
handler.command = /^(xnxxdl)$/i;
handler.tags = ['dowloader', 'premium', 'nsfw'];
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
