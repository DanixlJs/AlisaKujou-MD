import fetch from 'node-fetch';
const handler = async (m, {text, usedPrefix, command}) => {
 if (!db.data.chats[m.chat].nsfw && m.isGroup) return m.reply(`✧ Los comandos *NSFW* están desactivados en este grupo.\n> *${usedPrefix}on nsfw* para activarlos si eres Administrador.`);
  if (!text) return m.reply(`✰ Ingrese un texto para realizar la búsqueda, Ejemplo:\n> *${usedPrefix + command} Con mi Prima*`);
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoListXXX) {
      global.videoListXXX = [];
    }
    if (global.videoListXXX[0]?.from == m.sender) {
      global.videoListXXX.splice(0, global.videoListXXX.length);
    }
    const res = await xnxxsearch(text);
    const json = res.result;
    let cap = `❀ *RESULTADOS DE:* ${text.toUpperCase()}\n`;
    let count = 1;
    for (const v of json) {
      const linkXXX = v.link;
      vids_.urls.push(linkXXX);
      cap += `✰ *Título ⪼* ${v.title}\n◈ *Link ⪼* ${v.link}\n◈ *Info ⪼* ${v.info}\n\n`;
      count++;
    }
    m.reply(cap);
    global.videoListXXX.push(vids_);
  } catch {
    console.log(e);
  }
};
handler.help = ['xnxxsearch <texto>'];
handler.tags = ['downloader', 'premium', 'nsfw'];
handler.command = ['xnxxsearch'];
handler.registrado = true;
handler.premium = true;
export default handler;
async function xnxxsearch(query) {
  return new Promise((resolve, reject) => {
    const baseurl = 'https://www.xnxx.com';
    fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = [];
      const url = [];
      const desc = [];
      const results = [];
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb').each(function(c, d) {
          url.push(baseurl + $(d).find('a').attr('href').replace('/THUMBNUM/', '/'));
        });
      });
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb-under').each(function(c, d) {
          desc.push($(d).find('p.metadata').text());
          $(d).find('a').each(function(e, f) {
            title.push($(f).attr('title'));
          });
        });
      });
      for (let i = 0; i < title.length; i++) {
        results.push({title: title[i], info: desc[i], link: url[i]});
      }
      resolve({code: 200, status: true, result: results});
    }).catch((err) => reject({code: 503, status: false, result: err}));
  });
}
