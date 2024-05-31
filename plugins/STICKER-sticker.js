import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {

let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return m.reply(`⧼✦⧽ 𝔼𝕝 𝕧𝕚𝕕𝕖𝕠 𝕟𝕠 𝕡𝕦𝕖𝕕𝕖 𝕕𝕦𝕣𝕒𝕣 𝕞𝕒𝕤 𝕕𝕖 7 𝕤𝕖𝕘𝕦𝕟𝕕𝕠𝕤.`)
let img = await q.download?.()

if (!img) throw `⧼✦⧽ ℝ𝕖𝕤𝕡𝕠𝕟𝕕𝕖 𝕒 𝕝𝕒 𝕚𝕞𝕒𝕘𝕖𝕟 𝕢𝕦𝕖 𝕢𝕦𝕚𝕖𝕣𝕒𝕤 𝕔𝕠𝕟𝕧𝕖𝕣𝕥𝕚𝕣 𝕖𝕟 𝕦𝕟 𝕊𝕥𝕚𝕔𝕜𝕖𝕣.`

let out
try {
stiker = await sticker(img, false, global.packname, global.author)
} catch (e) {
console.error(e)
} finally {
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
}}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)

else return m.reply(`⧼✦⧽ 𝕃𝕚𝕟𝕜 𝕚𝕟𝕧𝕒𝕝𝕚𝕕𝕠.`)

}
} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {

if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m)

else throw `⧼✦⧽ ℝ𝕖𝕤𝕡𝕠𝕟𝕕𝕖 𝕒 𝕝𝕒 𝕚𝕞𝕒𝕘𝕖𝕟 𝕢𝕦𝕖 𝕢𝕦𝕚𝕖𝕣𝕒𝕤 𝕔𝕠𝕟𝕧𝕖𝕣𝕥𝕚𝕣 𝕖𝕟 𝕦𝕟 𝕊𝕥𝕚𝕔𝕜𝕖𝕣.`

       
}}

handler.help = ['sticker', 's']
handler.tags = ['sticker', 's']
handler.command = ['sticker', 's']
handler.tags = ['sticker']
handler.register = true

export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}