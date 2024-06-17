import speed from 'performance-now'

var handler = async (m, { conn }) => {
let timestamp = speed()
let latensi = speed() - timestamp
let texto = `❀ *${global.botname}*
✰ *Velocidad:*
→ ${latensi.toFixed(4)}`.trim()
m.react('✈️')
conn.reply(m.chat, texto, m, fake, )

}
handler.help = ['speed']
handler.tags = ['info']
handler.command = ['speed']
handler.registrado = true

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
