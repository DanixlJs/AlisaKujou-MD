import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) return m.reply(`⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕖 𝕦𝕟 𝕥𝕖𝕩𝕥𝕠 𝕡𝕒𝕣𝕒 𝕣𝕖𝕒𝕝𝕚𝕫𝕒𝕣 𝕝𝕒 𝕓𝕦𝕤𝕢𝕦𝕖𝕕𝕒.\n◈ 𝔼𝕛𝕖𝕞𝕡𝕝𝕠:\n→ *${usedPrefix + command} Re:Zero*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `✰ *𝔸𝕟𝕚𝕞𝕖 𝕀𝕟𝕗𝕠*
◈ 𝕋𝕚𝕥𝕦𝕝𝕠: ${result.title}
◈ 𝔽𝕠𝕣𝕞𝕒𝕥𝕠: ${result.type}
◈ 𝔼𝕤𝕥𝕒𝕕𝕠: ${result.status.toUpperCase().replace(/\_/g, ' ')}
◈ 𝔼𝕡𝕚𝕤𝕠𝕕𝕚𝕠𝕤 𝕥𝕠𝕥𝕒𝕝𝕖𝕤: ${result.episodes}
◈ 𝔻𝕦𝕣𝕒𝕔𝕚𝕠𝕟: ${result.duration}
◈ 𝔹𝕒𝕤𝕒𝕕𝕠 𝕖𝕟: ${result.source.toUpperCase()}
◈ 𝔼𝕤𝕥𝕣𝕖𝕟𝕒𝕕𝕠: ${result.aired.from}
◈ 𝔽𝕚𝕟𝕒𝕝𝕚𝕫𝕒𝕕𝕠: ${result.aired.to}
◈ ℙ𝕠𝕡𝕦𝕝𝕒𝕣𝕚𝕕𝕒𝕕: ${result.popularity}
◈ 𝔽𝕒𝕧𝕠𝕣𝕚𝕥𝕠𝕤: ${result.favorites}
◈ ℂ𝕝𝕒𝕤𝕚𝕗𝕚𝕔𝕒𝕔𝕚𝕠𝕟: ${result.rating}
◈ ℝ𝕒𝕟𝕘𝕠: ${result.rank}
◈ 𝕋𝕣𝕒𝕚𝕝𝕖𝕣: ${result.trailer.url}
◈ 𝕌𝕣𝕝: ${result.url}
◈ 𝔹𝕒𝕔𝕜𝕘𝕣𝕠𝕦𝕟𝕕: ${resultes.text}
◈ ℝ𝕚𝕟𝕘𝕜𝕒𝕤𝕒𝕟: ${resultes2.text}`;

    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `⧼✦⧽ 𝕆𝕔𝕦𝕣𝕣𝕚𝕠́ 𝕦𝕟 𝕖𝕣𝕣𝕠𝕣 𝕚𝕟𝕖𝕤𝕡𝕖𝕣𝕒𝕕𝕠.`;
  }
};

handler.command = ['animeinfo'];
handler.tags = ['search', 'internet']
handler.register = true;
handler.help = ['animeinfo <texto>'];

export default handler;
