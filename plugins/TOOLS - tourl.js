/*Créditos a https://github.com/AzamiJs*/

import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

var handler = async (m) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Responda a una imagen o un video...'
m.react('✏️') 
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let info = ` - *Enlace:*\n> [${link}]\n
- *Tamaño:* ${media.length} bytes\n
- *Expiración:* ${isTele ? 'No Expira' : 'Desconocido'}\n
- *Acortado:*\n> [${await shortUrl(link)}]`

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply :{ mediaUrl: global.fakeLink, mediaType: 2, title: global.wm, body: global.dev, thumbnail: await(await fetch(link)).buffer(), sourceUrl: link}}})

}
handler.help = ['tourl']
handler.tags = ['transformador', 'tools']
handler.register = true
handler.command = /^(tourl)$/i
handler.limit = true

export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}