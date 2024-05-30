import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

var handler = async (m) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '⧼✦⧽ ℝ𝕖𝕤𝕡𝕠𝕟𝕕𝕒 𝕒 𝕦𝕟𝕒 𝕀𝕞𝕒𝕘𝕖𝕟 𝕠 𝕍𝕚𝕕𝕖𝕠.'
m.react('✏️') 
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let info = `✰ 𝔼𝕟𝕝𝕒𝕔𝕖:\n[${link}]\n◈ 𝕋𝕒𝕞𝕒𝕟̃𝕠: ${media.length} Bytes\n◈ 𝔼𝕩𝕡𝕚𝕣𝕒𝕔𝕚𝕠́𝕟: ${isTele ? 'No Expira' : 'Desconocido'}\n◈ 𝔸𝕔𝕠𝕣𝕥𝕒𝕕𝕠:\n[${await shortUrl(link)}]`

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply :{ mediaUrl: global.fakeLink, mediaType: 2, title: global.wm, body: global.dev, thumbnail: await(await fetch(link)).buffer(), sourceUrl: link}}})

}
handler.help = ['tourl']
handler.tags = ['tools']
handler.register = true
handler.command = ['tourl']
handler.limit = true

export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}