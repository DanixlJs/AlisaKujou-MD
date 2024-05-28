import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(remImg, false, global.packname, global.team)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: global.packname, body: `Hola ` + nombre, sourceUrl: fakeLink, thumbnail: global.icons}}})}

return !0 }
export default handler
