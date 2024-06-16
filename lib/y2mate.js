import fetch from 'node-fetch';
import {JSDOM} from 'jsdom';

function post(url, formdata) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: new URLSearchParams(Object.entries(formdata)),
  });
}
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:shorts\/)?(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
async function yt(url, quality, type, bitrate, server = 'en68') {
  if (!ytIdRegex.test(url)) throw 'Invalid URL';
  const ytId = ytIdRegex.exec(url);
  url = 'https://youtu.be/' + ytId[1];
  const res = await post(`https://www.y2mate.com/mates/${server}/analyze/ajax`, {
    url,
    q_auto: 0,
    ajax: 1,
  });
  const json = await res.json();
  const {document} = (new JSDOM(json.result)).window;
  const tables = document.querySelectorAll('table');
  const table = tables[{mp4: 0, mp3: 1}[type] || 0];
  let list;
  switch (type) {
    case 'mp4':
      list = Object.fromEntries([...table.querySelectorAll('td > a[href="#"]')].filter((v) => !/\.3gp/.test(v.innerHTML)).map((v) => [v.innerHTML.match(/.*?(?=\()/)[0].trim(), v.parentElement.nextSibling.nextSibling.innerHTML]));
      break;
    case 'mp3':
      list = {
        '128kbps': table.querySelector('td > a[href="#"]').parentElement.nextSibling.nextSibling.innerHTML,
      };
      break;
    default:
      list = {};
  }
  const filesize = list[quality];
  const id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', ''];
  const thumb = document.querySelector('img').src;
  const title = document.querySelector('b').innerHTML;
  const res2 = await post(`https://www.y2mate.com/mates/${server}/convert`, {
    type: 'youtube',
    _id: id[1],
    v_id: ytId[1],
    ajax: '1',
    token: '',
    ftype: type,
    fquality: bitrate,
  });
  const json2 = await res2.json();
  const KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize));
  return {
    dl_link: /<a.+?href="(.+?)"/.exec(json2.result)[1],
    thumb,
    title,
    filesizeF: filesize,
    filesize: KB,
  };
}

export default {
  yt,
  ytIdRegex,
  yta(url, server = 'en68') {
    return yt(url, '128kbps', 'mp3', '128', server);
  },
  ytv(url, server = 'en68') {
    return yt(url, '360p', 'mp4', '360', server);
  },
  servers: ['id4', 'en60', 'en61', 'en68'],
};
