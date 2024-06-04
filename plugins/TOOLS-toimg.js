import { webp2png } from '../lib/webp2mp4.js'

var handler = async (m, { conn, usedPrefix, command }) => {

const notStickerMessage = `⧼✦⧽ ℝ𝕖𝕤𝕡𝕠𝕟𝕕𝕖 𝕒 𝕦𝕟 𝕊𝕥𝕚𝕔𝕜𝕖𝕣.`
if (!m.quoted) throw notStickerMessage 
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m, m)

}

handler.help = ['toimg']
handler.tags = ['tools']
handler.command = ['toimg']
handler.register = true
handler.limit = true

export default handler