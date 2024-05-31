import fetch from 'node-fetch'
import { facebook } from '@xct007/frieren-scraper'

var handler = async (m, { conn, args, command, usedPrefix, text }) => {

let vid
const isCommand7 = /^(facebook|fb|facebookdl|fbdl)$/i.test(command)

async function reportError(e) {
await conn.reply(m.chat, `⧼✦⧽ 𝕆𝕔𝕦𝕣𝕣𝕚𝕠́ 𝕦𝕟 𝕖𝕣𝕣𝕠𝕣 𝕚𝕟𝕖𝕤𝕡𝕖𝕣𝕒𝕕𝕠.`, m, fake, )
console.log(e)
}

switch (true) {   
case isCommand7:
if (!text) return conn.reply(m.chat, `⧼✦⧽ 𝕌𝕤𝕠 ℂ𝕠𝕣𝕣𝕖𝕔𝕥𝕠:\n→ *${usedPrefix}fb <link>*`, m, fake, )
if (!args[0].match(/www.facebook.com|fb.watch|web.facebook.com|business.facebook.com|video.fb.com/g)) return conn.reply(m.chat, '⧼✦⧽ 𝕃𝕚𝕟𝕜 𝕚𝕟𝕧𝕒𝕝𝕚𝕕𝕠.', m, fake, )
await conn.reply(m.chat, '⧼✿⧽ ℙ𝕣𝕠𝕔𝕖𝕤𝕒𝕟𝕕𝕠, 𝕖𝕤𝕡𝕖𝕣𝕖 𝕦𝕟 𝕞𝕠𝕞𝕖𝕟𝕥𝕠.', m, fake, )
m.react('🕒')
let messageType = checkMessageType(args[0])
let message = ''
switch (messageType) {
case 'groups':
message = '⧼✿⧽ 𝕍𝕚𝕕𝕖𝕠 𝕕𝕖 𝔾𝕣𝕦𝕡𝕠 𝕕𝕖 𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜.'
break
case 'reel':
message = '⧼✿⧽ 𝕍𝕚𝕕𝕖𝕠 𝕕𝕖 ℝ𝕖𝕖𝕝𝕤 𝕕𝕖 𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜.'
break
case 'stories':
message = '⧼✿⧽ 𝕍𝕚𝕕𝕖𝕠 𝕕𝕖 ℍ𝕚𝕤𝕥𝕠𝕣𝕚𝕒𝕤 𝕕𝕖 𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜.'
break
case 'posts':
message = '⧼✿⧽ 𝕍𝕚𝕕𝕖𝕠 𝕕𝕖 𝕦𝕟𝕒 𝕡𝕦𝕓𝕝𝕚𝕔𝕒𝕔𝕚ó𝕟 𝕕𝕖 𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜.'
break
default:
message = '⧼✿⧽ 𝔸𝕢𝕦í 𝕥𝕚𝕖𝕟𝕖𝕤 𝕥𝕦 𝕧𝕚𝕕𝕖𝕠.'
break
}
try {
let res = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=BrunoSobrino&url=${args[0]}`)
let _json = await res.json()
vid = _json.result[0]
if (vid == '' || !vid || vid == null) vid = _json.result[1]
await conn.sendFile(m.chat, vid, 'error.mp4', `*${message}*`, m)
} catch (error1) {
try {
const d2ata = await facebook.v1(args[0])
let r2es = ''
if (d2ata.urls && d2ata.urls.length > 0) {
r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`
}
await conn.sendFile(m.chat, r2es, 'error.mp4', `*${message}*`, m)
} catch (error2) {
try {
var get = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=QaepQXxR`)
var js = await get.json()
await conn.sendFile(m.chat, js.result.HD, 'error.mp4', `*${message}*`, m)
} catch (e) {
reportError(e)}
}}}

}
handler.help = ['fb <link>']
handler.tags = ['downloader']
handler.command = ['faceboook', 'fb']
handler.register = true
handler.limit = true

export default handler

function checkMessageType(url) {
if (url.includes('www.facebook.com')) {
if (url.includes('/groups/')) {
return 'groups'
} else if (url.includes('/reel/')) {
return 'reel'
} else if (url.includes('/stories/')) {
return 'stories'
} else if (url.includes('/posts/')) {
return 'posts'
}}
return 'default'
}