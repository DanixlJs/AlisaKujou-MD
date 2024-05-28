import gplay from "google-play-scraper";

let handler = async (m, { conn, text }) => {
  if (!text) throw "Ingrese el nombre de la aplicación.";
  let res = await gplay.search({ term: text });
  if (!res.length) throw `Ingrese el nombre de la aplicación.`;
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
      `- *Resultado:* ${v.title}
       - *Creador:* ${v.developer}
       - *Precio:* ${v.priceText}
       - *Puntuacion:* ${v.scoreText}
       - *Enlace:* ${v.url}`
  ).join`\n\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet', 'search'];
handler.command = /^(playstore)$/i;
handler.register = true;
export default handler;
