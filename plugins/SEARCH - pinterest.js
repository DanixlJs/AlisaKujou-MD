import {pinterest} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {

  if (!text) throw `⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕖 𝕦𝕟 𝕥𝕖𝕩𝕥𝕠 𝕡𝕒𝕣𝕒 𝕣𝕖𝕒𝕝𝕚𝕫𝕒𝕣 𝕝𝕒 𝕓𝕦𝕤𝕢𝕦𝕖𝕕𝕒.\n◈ 𝔼𝕛𝕖𝕞𝕡𝕝𝕠:\n*→ ${usedPrefix + command} Rem Icons*`;
  const json = await pinterest(text);

  conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖: *${text}*`.trim(), m);
};

handler.help = ['pinterest <texto>', 'pin <texto>'];
handler.tags = ['search'];
handler.command = ['pin', 'pinterest']
handler.register = true;

export default handler;
