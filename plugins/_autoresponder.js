import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
if (this.user.jid) return;
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
    if (areJidsSameUser(m.sender, this.user.id)) {
    return;
  }
let stiker = await sticker(img2, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: global.wm, body: global.dev, sourceUrl: fakeLink, thumbnail: global.icons}}})}

return !0 }
export default handler
