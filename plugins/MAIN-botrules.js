let handler = async (m, { conn, usedPrefix, command}) => {
if (m.sender === conn.user.jid) return

let reglas = `❀ *BOT RULES*
◈ No hacer llamadas al Bot.
◈ Prohibido el Spam de Comandos.
◈ Contacta con mi creador si tienes problemas.

> Si no cumples las reglas serás Baneado.`.trim()
await conn.sendFile(m.chat, global.icons, 'img.jpg', reglas, m, fake, )

}

handler.command = ['botrules']
handler.help = ['botrules']
handler.tags = ['info']
handler.registrado = true

export default handler