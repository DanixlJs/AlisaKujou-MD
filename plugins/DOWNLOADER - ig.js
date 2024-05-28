import fetch from 'node-fetch'
import axios from 'axios'
import instagramGetUrl from 'instagram-url-direct'
import { instagram } from '@xct007/frieren-scraper'
import { instagramdl } from '@bochilteam/scraper'

var handler = async (m, {conn, args, command, usedPrefix}) => {

if (!args[0]) return conn.reply(m.chat, `Ingrese el enlace del video de Instagram que quiera descargar, Ejemplo *${usedPrefix + command} <link>*`, m, fake, )
conn.reply(m.chat, `> ${nombre} Espere un momento...`, m, fake, )

try {

let apiUrll = `https://api.betabotz.org/api/download/igdowloader?url=${encodeURIComponent(args[0])}&apikey=bot-secx3`
let responsel = await axios.get(apiUrll)
let resultl = responsel.data
for (const item of resultl.message) {
let shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${item.thumbnail}`)).text()
let tXXxt = `- *Url:* ${shortUrRRl}\n\n${wm}`.trim()
conn.sendFile(m.chat, item._url, null, tXXxt, fkontak, m)
await new Promise((resolve) => setTimeout(resolve, 10000))
} 
} catch { 
try { 
let datTa = await instagram.v1(args[0])
for (const urRRl of datTa) {
let shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let tXXxt = `- *Url:* ${shortUrRRl}\n\n${wm}`.trim()
conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, fkontak, m)
await new Promise((resolve) => setTimeout(resolve, 10000))
}
} catch {
try {
let resultss = await instagramGetUrl(args[0]).url_list[0]
let shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt2 = `- *Url:* ${shortUrl2}\n\n${wm}`.trim()
await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m)
} catch {
try {
let resultssss = await instagramdl(args[0])
let shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt4 = `- *Url:* ${shortUrl3}\n\n${wm}`.trim()
for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m)
} catch {
try {
let human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`)
let json = await human.json()
let videoig = json.result
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()
let txt1 = `- *Url:* ${shortUrl1}\n\n${wm}`.trim()
await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m)
} catch {
return conn.reply(m.chat, 'Ocurrió un error inesperado.', m, fake, )
}}}}} 

}
handler.help = ['ig <link>']
handler.tags = ['downloader']
handler.command = /^(instagram|ig)$/i
handler.register = true

export default handler