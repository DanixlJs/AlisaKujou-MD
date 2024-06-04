import gplay from "google-play-scraper";

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✧ Ingrese un texto para realizar la búsqueda, Ejemplo:\n> → *${usedPrefix + command} Minecraft*`;
  let res = await gplay.search({ term: text });
  if (!res.length) throw `✧ Ingresa un texto para realizar la búsqueda, Ejemplo:\n> → *${usedPrefix + command} Minecraft*`;
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
handler.register = true;

export default handler;
