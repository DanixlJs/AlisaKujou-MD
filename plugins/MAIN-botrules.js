let handler = async (m, { conn, usedPrefix, command}) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let reglas = `✰ *ℝ𝕖𝕘𝕝𝕒𝕤 𝕕𝕖 ${global.wm}*
→ ℕ𝕠 𝕙𝕒𝕔𝕖𝕣 𝕝𝕝𝕒𝕞𝕒𝕕𝕒𝕤 𝕒𝕝 𝔹𝕠𝕥.
→ ℙ𝕣𝕠𝕙𝕚𝕓𝕚𝕕𝕠 𝕖𝕝 𝕊𝕡𝕒𝕞.
→ ℂ𝕠𝕟𝕥𝕒𝕔𝕥𝕒 𝕒𝕝 𝔻𝕦𝕖𝕟̃𝕠 𝕤𝕚 𝕙𝕒𝕪 𝕡𝕣𝕠𝕓𝕝𝕖𝕞𝕒𝕤.

◈ 𝕊𝕚 𝕟𝕠 𝕔𝕦𝕞𝕡𝕝𝕖𝕤 𝕝𝕒𝕤 𝕣𝕖𝕘𝕝𝕒𝕤 𝕤𝕖𝕣𝕒𝕤 𝕓𝕝𝕠𝕢𝕦𝕖𝕒𝕕𝕠 𝕠 𝕖𝕟 𝕖𝕝 𝕡𝕖𝕠𝕣 𝕕𝕖 𝕝𝕠𝕤 𝕔𝕒𝕤𝕠𝕤 𝔹𝕒𝕟𝕖𝕒𝕕𝕠.`.trim()
await conn.sendFile(m.chat, global.icons, 'img.jpg', reglas, m, fake, )

}

handler.command = ['botrules']
handler.help = ['botrules']
handler.tags = ['info']
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}