import {find_lyrics} from '@brandond/findthelyrics';
import {getTracks} from '@green-code/music-track-data';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  const teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
  if (!teks) throw `✧ Ingrese un texto para realizar la búsqueda.\n> → *${usedPrefix + command} <texto>*`;
  try {
    const result = await getTracks(teks);
    const lyrics = await find_lyrics(`${result[0].artist} ${result[0].title}`);
    const res = await fetch(global.API('https://some-random-api.com', '/lyrics', {title: result[0].artist + result[0].title}));
    const json = await res.json();
    let img;
    try {
      img = result.album.artwork;
    } catch {
      try {
        img = json.thumbnail.genius;
      } catch {
        const bochil = await googleImage(`${result[0].artist} ${result[0].title}`);
        img = await bochil.getRandom();
      }
    }
    const textoLetra = `❀ *Título ⪼* ${result[0].title || ''}\n◈ *Autor ⪼* ${result[0].artist || ''}\n◈ *Letra ⪼* ${lyrics || ''}\n`;
    await conn.sendMessage(m.chat, {image: {url: img}, caption: textoLetra}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: {url: result[0].preview}, fileName: `${result[0].artist} ${result[0].title}.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
  } catch {
    throw `✧ Ocurrió un error inesperado.`;
  }
};

handler.help = ['lyrics', 'letra'];
handler.tags = ['internet', 'search'];
handler.command = ['letras', 'lyrics'];
handler.registrado = true;

export default handler;
