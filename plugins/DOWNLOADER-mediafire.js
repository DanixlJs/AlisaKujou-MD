import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command, isPrems }) => {
  if (!isPrems) throw `⧼✦⧽ 𝔼𝕤𝕥𝕖 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 𝕖𝕤 𝕤𝕠𝕝𝕠 𝕡𝕒𝕣𝕒 𝕌𝕤𝕦𝕒𝕣𝕚𝕠𝕤 ℙ𝕣𝕖𝕞𝕚𝕦𝕞𝕤, 𝕌𝕤𝕖 𝕖𝕝 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 *${usedPrefix}premium* 𝕡𝕒𝕣𝕒 𝕞𝕒́𝕤 𝕚𝕟𝕗𝕠.`;
  if (!args[0]) throw `⧼✦⧽ 𝕌𝕤𝕠 ℂ𝕠𝕣𝕣𝕖𝕔𝕥𝕠:\n→ *${usedPrefix + command} <link>*`;
  try {
    const resEX = await mediafiredl(args[0]);
    const captionES = `✰ *𝕄𝕖𝕕𝕚𝕒𝕗𝕚𝕣𝕖 𝔻𝕝*
◈ ℕ𝕠𝕞𝕓𝕣𝕖: ${resEX.filename}
◈ ℙ𝕖𝕤𝕠: ${resEX.filesizeH}
◈ 𝕋𝕚𝕡𝕠: ${resEX.ext}

→ 𝔻𝕖𝕤𝕔𝕒𝕣𝕘𝕒𝕟𝕕𝕠 𝕤𝕦 𝕒𝕣𝕔𝕙𝕚𝕧𝕠.`.trim();
    m.reply(captionES);
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      const caption = `✰ *𝕄𝕖𝕕𝕚𝕒𝕗𝕚𝕣𝕖 𝔻𝕝*
◈ ℕ𝕠𝕞𝕓𝕣𝕖: ${resEX.filename}
◈ ℙ𝕖𝕤𝕠: ${resEX.filesizeH}
◈ 𝕋𝕚𝕡𝕠: ${resEX.ext}

→ 𝔻𝕖𝕤𝕔𝕒𝕣𝕘𝕒𝕟𝕕𝕠 𝕤𝕦 𝕒𝕣𝕔𝕙𝕚𝕧𝕠.`.trim();
      await m.reply(caption);
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply('⧼✦⧽ 𝕆𝕔𝕦𝕣𝕣𝕚𝕠́ 𝕦𝕟 𝕖𝕣𝕣𝕠𝕣 𝕚𝕟𝕖𝕤𝕡𝕖𝕣𝕒𝕕𝕠.');
    }
  }
};

handler.help = ['mediafire <url>'];
handler.tags = ['downloader', 'premium'];
handler.command = ['mediafire', 'mediafiredl', 'mf'];

export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}
