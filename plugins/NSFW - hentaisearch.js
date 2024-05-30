import cheerio from 'cheerio';
import axios from 'axios';
const handler = async (m, {conn, text, __dirname, usedPrefix, command}) => {
  if (!global.db.data.chats[m.chat].modohorny && m.isGroup) throw `⧼✦⧽ 𝕃𝕠𝕤 𝕔𝕠𝕞𝕒𝕟𝕕𝕠𝕤 ℕ𝕊𝔽𝕎 𝕖𝕤𝕥𝕒𝕟 𝕕𝕖𝕤𝕒𝕔𝕥𝕚𝕧𝕒𝕕𝕠𝕤, 𝕌𝕤𝕖 𝕖𝕝 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 *${usedPrefix}enable modohorny* 𝕡𝕒𝕣𝕒 𝕒𝕔𝕥𝕚𝕧𝕒𝕣𝕝𝕠𝕤.`;
  if (!text) throw '⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕖 𝕦𝕟 𝕥𝕖𝕩𝕥𝕠 𝕡𝕒𝕣𝕒 𝕣𝕖𝕒𝕝𝕚𝕫𝕒𝕣 𝕝𝕒 𝕓𝕦𝕤𝕢𝕦𝕖𝕕𝕒.\n◈ 𝔼𝕛𝕖𝕞𝕡𝕝𝕠:\n→ *${usedPrefix + command} Overflow*';
  const searchResults = await searchHentai(text);
  let teks = searchResults.result.map((v, i) => `✰ *𝕋𝕚𝕥𝕦𝕝𝕠:* ${v.title}
◈ 𝕍𝕚𝕤𝕥𝕒𝕤: ${v.views}
◈ 𝕃𝕚𝕟𝕜: ${v.url}`).join('\n\n');
  let randomThumbnail;
  if (searchResults.result.length > 0) {
    const randomIndex = Math.floor(Math.random() * searchResults.result.length);
    randomThumbnail = searchResults.result[randomIndex].thumbnail;
  } else {
    randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png';
    teks = 'Sin resultados...';
  }
  conn.sendFile(m.chat, randomThumbnail, 'error.jpg', teks, m);
};

handler.help = ['hentaisearch <texto>', 'searchhentai <texto>'];
handler.command = ['hentaisearch', 'searchhentai'];
handler.tags = ['nsfw'];

export default handler;

async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get('https://hentai.tv/?s=' + search).then(async ({data}) => {
      const $ = cheerio.load(data);
      const result = {};
      const res = [];
      result.coder = 'rem-comp';
      result.result = res;
      result.warning = 'It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp';
      $('div.flex > div.crsl-slde').each(function(a, b) {
        const _thumbnail = $(b).find('img').attr('src');
        const _title = $(b).find('a').text().trim();
        const _views = $(b).find('p').text().trim();
        const _url = $(b).find('a').attr('href');
        const hasil = {thumbnail: _thumbnail, title: _title, views: _views, url: _url};
        res.push(hasil);
      });
      resolve(result);
    }).catch((err) => {
      console.log(err);
    });
  });
}
