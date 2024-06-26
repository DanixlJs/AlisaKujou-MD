import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`);
    const $ = cheerio.load(link.data);
    const judul = $('#firstHeading').text().trim();
    const thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
    const isi = [];
    $('#mw-content-text > div.mw-parser-output').each(function(rayy, Ra) {
      const penjelasan = $(Ra).find('p').text().trim();
      isi.push(penjelasan);
    });
    for (const i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i}};
      return data;
    }
  } catch (err) {
    const notFond = {
      status: link.status,
      Pesan: eror};
    return notFond;
  }
}
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) return m.reply=(`✧ Ingresa un texto para realizar la búsqueda, Ejemplo:\n> *${usedPrefix + command} Cómo hervir Agua*`);
  wikipedia(`${text}`).then((res) => {
    conn.reply(m.chat, `❀ *WIKIPEDIA SEARCH*\n✰ Resultados para *${text}*\n\n → ` + res.result.isi, m, fake, );
  }).catch(() => {
    m.reply('✧ Ocurrió un error inesperado.');
  });
};
handler.help = ['wikipedia <texto>'];
handler.registrado = true;
handler.tags = ['internet', 'search'];
handler.command = ['wiki', 'wikipedia'];
export default handler;
