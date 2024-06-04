import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) return m.reply(`✧ Ingresa el nombre del anime que quieras buscar, Ejemplo:\n> → *${usedPrefix + command} Roshidere*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `❀ *ANIME SEARCH*
✰ *Título ⪼* ${result.title}
◈ *Formato ⪼* ${result.type}
◈ *Estado ⪼* ${result.status.toUpperCase().replace(/\_/g, ' ')}
◈ *Episodios Totales ⪼* ${result.episodes}
◈ *Duración ⪼* ${result.duration}
◈ *Basado en ⪼* ${result.source.toUpperCase()}
◈ *Estrenado ⪼* ${result.aired.from}
◈ *Finalizado ⪼* ${result.aired.to}
◈ *Popularidad ⪼* ${result.popularity}
◈ *Favoritos ⪼* ${result.favorites}
◈ *Clasificación ⪼* ${result.rating}
◈ *Rango ⪼* ${result.rank}
◈ *Trailer ⪼* ${result.trailer.url}
◈ *Enlace ⪼* ${result.url}
◈ *Background ⪼* ${resultes.text}
◈ *Ringkasan ⪼* ${resultes2.text}`;

    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `✧ Ocurrió un error inesperado.`;
  }
};

handler.command = ['animeinfo'];
handler.tags = ['search', 'internet']
handler.registrado = true;
handler.help = ['animeinfo <texto>'];

export default handler;
