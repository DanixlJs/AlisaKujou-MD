import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';
let handler = async (m, { conn, command, args, usedPrefix }) => {
  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  if (!text) return conn.reply(m.chat, 'Ingresa el texto que quieras buscar, Ejemplo: Re:Zero Seasson 4' m);
const url = 'https://google.com/search?q=' + encodeURIComponent(text);
google({'query': text}).then(res => {
let teks = `- *RESULTADOS DE:* _${text}_*\n\n${url}\n\n`
for (let g of res) {
teks += `_*${g.title}*_\n_${g.link}_\n_${g.snippet}_\n\n`
} 
const ss = `https://image.thum.io/get/fullpage/${url}`
conn.sendFile(m.chat, ss, 'error.png', teks, m)
})
} 
handler.help = ['google'];
handler.tags = ['internet', 'search'];
handler.command = /^googlef?$/i;
handler.register = true;
export default handler;