import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';
let handler = async (m, { conn, command, args, usedPrefix }) => {
  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  if (!text) return conn.reply(m.chat, '✧ Ingrese un texto para realizar la búsqueda.', m);
const url = 'https://google.com/search?q=' + encodeURIComponent(text);
google({'query': text}).then(res => {
let teks = `❀ *RESULTADOS DE* ${text}\n> → ${url}\n\n`
for (let g of res) {
teks += `✰ *${g.title}*\n◈ ${g.link}\n◈ ${g.snippet}\n\n`
} 
const ss = `https://image.thum.io/get/fullpage/${url}`
conn.sendFile(m.chat, ss, 'error.png', teks, m)
})
} 
handler.help = ['google <texto>'];
handler.tags = ['internet'];
handler.command = ['google'];
export default handler;