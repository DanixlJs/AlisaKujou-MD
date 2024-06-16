let handler = async (m, { conn, text, usedPrefix, command }) => {
if ( m.sender === conn.user.jid) return
  if (!text) return m.reply(`✧ Ingresa el nuevo nombre del Bot.`)
  try {
    await conn.updateProfileName(text)
    m.reply('❀ Nombre cambiado con Éxito.')
  } catch (e) {
    console.log(e)
    throw `✧ Ocurrió un error inesperado.`
  }
}

handler.help = ['setbotname']
handler.tags = ['owner']
handler.command = ['setbotname']
handler.registrado = true
handler.owner = true

export default handler