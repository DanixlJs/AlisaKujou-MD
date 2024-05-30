import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {

let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup)
return !0

let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {

const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

conn.sendFile(m.chat, global.icons, 'img.jpg', `✰ *ℕ𝕦𝕖𝕧𝕠 ℕ𝕚𝕧𝕖𝕝*\n\n❒  𝔽𝕖𝕝𝕚𝕔𝕚𝕕𝕒𝕕𝕖𝕤 𝕤𝕦𝕓𝕚𝕤𝕥𝕖 𝕕𝕖 𝕟𝕚𝕧𝕖𝕝.\n◈ ℕ𝕚𝕧𝕖𝕝 𝔸𝕟𝕥𝕖𝕣𝕚𝕠𝕣:  ${before}\n◈ ℕ𝕦𝕖𝕧𝕠 ℕ𝕚𝕧𝕖𝕝: ${user.level}\n◈ ℝ𝕒𝕟𝕘𝕠: ${user.role}\n◈ 𝔽𝕖𝕔𝕙𝕒: ${new Date().toLocaleString('id-ID')}`.trim(), fkontak)
    }
} 