import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';
let handler = async (m, { conn, command, args, usedPrefix }) => {
  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  if (!text) return conn.reply(m.chat, '⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕖 𝕦𝕟 𝕥𝕖𝕩𝕥𝕠 𝕡𝕒𝕣𝕒 𝕣𝕖𝕒𝕝𝕚𝕫𝕒𝕣 𝕝𝕒 𝕓𝕦𝕤𝕢𝕦𝕖𝕕𝕒.', m);
const url = 'https://google.com/search?q=' + encodeURIComponent(text);
google({'query': text}).then(res => {
let teks = `⧼✿⧽ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖 *${text}*\n→ ${url}\n\n`
for (let g of res) {
teks += `✰ *${g.title}*\n◈ ${g.link}\n◈ ${g.snippet}\n\n`
} 
const ss = `https://image.thum.io/get/fullpage/${url}`
conn.sendFile(m.chat, ss, 'error.png', teks, m)
//m.reply(teks)
})
} 
handler.help = ['google <texto>'];
handler.tags = ['internet'];
handler.command = ['google'];
export default handler;