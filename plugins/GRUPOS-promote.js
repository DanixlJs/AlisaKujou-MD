var handler = async (m, { conn,usedPrefix, command, text }) => {
if (isNaN(text) && !text.match(/@/g)){
} else if (isNaN(text)) {
var number = text.split`@`[1]
} else if (!isNaN(text)) {
var number = text
}
if (!text && !m.quoted) return m.reply(m.chat, `✧ Etiqueta a un usuario para otorgarle Administrador.`)
if (number.length > 13 || (number.length < 11 && number.length > 0)) return m.reply(m.chat, `✧ El número es incorrecto.`)
try {
if (text) {
var user = number + '@s.whatsapp.net'
} else if (m.quoted.sender) {
var user = m.quoted.sender
} else if (m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, `❀ Hecho.`, m, fake, )
}
}
handler.help = ['promote <@tag>']
handler.tags = ['grupo']
handler.command = ['promote']
handler.registrado = true
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
