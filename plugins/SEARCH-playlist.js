import yts from 'yt-search';
import fs from 'fs';
const handler = async (m, {conn, text, usedPrefix, command}) => {

  if (!text) throw `⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕖 𝕦𝕟 𝕥𝕖𝕩𝕥𝕠 𝕡𝕒𝕣𝕒 𝕣𝕖𝕒𝕝𝕚𝕫𝕒𝕣 𝕝𝕒 𝕓𝕦𝕤𝕢𝕦𝕖𝕕𝕒.\n◈ 𝔼𝕛𝕖𝕞𝕡𝕝𝕠:\n*→ ${usedPrefix + command} Begin You*`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      global.videoList.splice(0, global.videoList.length);
    }
    const results = await yts(text);
    const textoInfo = `⧼✿⧽ 𝔻𝕖𝕤𝕔𝕒𝕣𝕘𝕒 𝕖𝕝 𝕣𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠 𝕔𝕠𝕟 𝕝𝕠𝕤 𝕤𝕚𝕘𝕦𝕚𝕖𝕟𝕥𝕖𝕤 𝕔𝕠𝕞𝕒𝕟𝕕𝕠𝕤:\n→ *${usedPrefix + command} audio <numero>*\n→ *${usedPrefix + command}video <numero>*`.trim();
    const teks = results.all.map((v, i) => {
      const link = v.url;
      vids_.urls.push(link);
      return `✰ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠 ${i +1}: ${v.title}\n◈ 𝕃𝕚𝕟𝕜: ${v.url}\n◈ 𝔻𝕦𝕣𝕒𝕔𝕚𝕠́𝕟: ${v.timetamp}\n◈ 𝕊𝕦𝕓𝕚𝕕𝕠: ${v.ago}
\n◈ 𝕍𝕚𝕤𝕥𝕒𝕤: ${v.views}`;
    }).join('\n\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply(error);
  }
};

handler.help = ['playlist <texto>'];
handler.tags = ['search'];
handler.command = ['playlist'];
handler.register = true;

export default handler;
