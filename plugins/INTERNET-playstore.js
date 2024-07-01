import gplay from "google-play-scraper";
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`✧ Ingrese un texto para realizar la búsqueda.`);
  let res = await gplay.search({ term: text });
  if (!res.length) return m.reply(`✧ Ingresa un texto para realizar la búsqueda.`);
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
  res = res.map(
    (v) =>
      `❀ *RESULTADOS DE* ${text}
✰ *Título ⪼* ${v.title}
◈ *Creador ⪼* ${v.developer} 
◈ *Precio ⪼* ${v.priceText}
◈ *Puntuación ⪼* ${v.scoreText}
◈ *Enlace ⪼* ${v.url}`).join`\n\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet', 'search'];
handler.command = ['playstore'];
handler.registrado = true;
export default handler;