import { webp2png } from '../lib/webp2mp4.js'
var handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `✧ Responde a un Sticker.`
if (!m.quoted) return m.reply(notStickerMessage)
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) return m.reply(notStickerMessage)
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m, m)
}
handler.help = ['toimg']
handler.tags = ['tools']
handler.command = ['toimg']
handler.registrado = true
export default handler
