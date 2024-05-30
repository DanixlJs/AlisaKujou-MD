import axios from 'axios';
import fetch from 'node-fetch';
const handler = async (m, {command, conn, usedPrefix}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `⧼✦⧽ 𝕃𝕠𝕤 𝕔𝕠𝕞𝕒𝕟𝕕𝕠𝕤 ℕ𝕊𝔽𝕎 𝕖𝕤𝕥𝕒𝕟 𝕕𝕖𝕤𝕒𝕔𝕥𝕚𝕧𝕒𝕕𝕠𝕤, 𝕌𝕤𝕖 𝕖𝕝 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 *${usedPrefix}enable modohorny* 𝕡𝕒𝕣𝕒 𝕒𝕔𝕥𝕚𝕧𝕒𝕣𝕝𝕠𝕤.`;

  if (command == 'nsfwloli') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/nsfwloli.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'nsfwfoot') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/nsfwfoot.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'nsfwass') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/nsfwass.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'nsfwbdsm') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/nsfwbdsm.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'nsfwcum') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/nsfwcum.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'nsfwero') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/nsfwero.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'nsfwfemdom') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/nsfwfemdom.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'nsfwglass') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/nsfwglass.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'hentai') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/hentai.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'nsfworgy') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/nsfworgy.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'tetas') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/tetas.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/boobs?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'booty') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/booty.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/ass?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'ecchi') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/ecchi.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'furro') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/furro.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'trapito') {
    const res = await fetch(`https://api.waifu.pics/nsfw/trap`);
    const json = await res.json();
    const url = json.url;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'imagenlesbians') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/imagenlesbians.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'panties') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/panties.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'pene') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/pene.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/penis?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'porno') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/porno.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'randomxxx') {
    const rawjsonn = ['https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/tetas.json', 'https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/booty.json', 'https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/imagenlesbians.json', 'https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/panties.json', 'https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/porno.json'];
    const rawjson = await rawjsonn[Math.floor(rawjsonn.length * Math.random())];
    const res = (await axios.get(rawjson)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'pechos') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/pechos.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'yaoi') {
    const res = await fetch(`https://nekobot.xyz/api/image?type=yaoi`);
    const json = await res.json();
    const url = json.message;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'yaoi2') {
    const res = await fetch(`https://purrbot.site/api/img/nsfw/yaoi/gif`);
    const json = await res.json();
    const url = json.link;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'yuri') {
    const res = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/yuri.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }

  if (command == 'yuri2') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/RemCham-MD/master/src/JSON/yuri.json`)).data;
    const res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`);
    const json = await res.json();
    let url = json.link;
    if (url == '' || !url || url == null) url = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: ˋ⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${command}*`.trim()}, {quoted: m});
  }
};
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos'];
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos'];
handler.tags = ['nsfw'];
handler.register = true;

export default handler;
