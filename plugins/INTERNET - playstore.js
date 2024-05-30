import gplay from "google-play-scraper";

let handler = async (m, { conn, text }) => {
  if (!text) throw "⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕖 𝕦𝕟 𝕥𝕖𝕩𝕥𝕠 𝕡𝕒𝕣𝕒 𝕣𝕖𝕒𝕝𝕚𝕫𝕒𝕣 𝕝𝕒 𝕓𝕦𝕤𝕢𝕦𝕖𝕕𝕒.\n◈ 𝔼𝕛𝕖𝕞𝕡𝕝𝕠:\n→ *${usedPrefix + command} Minecraft*";
  let res = await gplay.search({ term: text });
  if (!res.length) throw `⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕖 𝕦𝕟 𝕥𝕖𝕩𝕥𝕠 𝕡𝕒𝕣𝕒 𝕣𝕖𝕒𝕝𝕚𝕫𝕒𝕣 𝕝𝕒 𝕓𝕦𝕤𝕢𝕦𝕖𝕕𝕒.\n◈ 𝔼𝕛𝕖𝕞𝕡𝕝𝕠:\n→ *${usedPrefix + command} Minecraft*`;
  let opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
    (v) =>
      `✰ *ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖:* ${text}
◈ 𝕋𝕚𝕥𝕦𝕝𝕠: ${v.title}
◈ ℂ𝕣𝕖𝕒𝕕𝕠𝕣: ${v.developer} 
◈ ℙ𝕣𝕖𝕔𝕚𝕠: ${v.priceText}
◈ ℙ𝕦𝕟𝕥𝕦𝕒𝕔𝕚𝕠𝕟: ${v.scoreText}
◈ 𝔼𝕟𝕝𝕒𝕔𝕖: ${v.url}`
  ).join`\n\n`;
  m.reply(res, null, opt);
};

handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet', 'search'];
handler.command = ['playstore'];
handler.register = true;

export default handler;
