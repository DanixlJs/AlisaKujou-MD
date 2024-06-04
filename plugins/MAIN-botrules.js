let handler = async (m, { conn, usedPrefix, command}) => {

let reglas = `❀ *BOT RULES*
◈ No hacer llamadas al Bot.
◈ Prohibido el Spam de Comandos.
◈ Contacta con mi creador si tienes problemas.

> → Si no cumples las reglas serás Baneado.`.trim()
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