import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
var handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply('✧ Responde a un Video o Imagen.')

m.react('✏️') 
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let info = `❀ *RESULTADOS:*\n✰ *Enlace ⪼* ${link}\n◈ *Tamaño ⪼* ${media.length} Bytes\n◈ *Expira ⪼* ${isTele ? 'No Expira' : 'Desconocido'}\n◈ *Acortado ⪼* ${await shortUrl(link)}]`

conn.reply(m.chat, info, m, fake, )

}
handler.help = ['tourl']
handler.tags = ['tools']
handler.registrado = true
handler.command = ['tourl']

export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}
