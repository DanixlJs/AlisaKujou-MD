let handler = async (m, { conn, usedPrefix, command}) => {
let reglas = `❀ *ALISA - REGLAS*

- Queda prohibido el uso del código fuente para usos Politicos o Empresariales.
- Queda prohibido la venta ilegal del código fuente de Alisa.
- Esta totalmente prohibido editar y resubir el código de Alisa a GitHub sin dar los creditos correspondientes.
- No hacer llamadas al Bot.
- Prohibido el Spam de Comandos.
- Contacta con mi creador si tienes problemas.

> La incumplición de las reglas será sancionado dependiendo de la gravedad del hecho.`.trim()
await conn.sendFile(m.chat, global.icons, 'img.jpg', reglas, m, fake, )
}
handler.command = ['botrules']
handler.help = ['botrules']
handler.tags = ['info']
handler.registrado = true
export default handler
