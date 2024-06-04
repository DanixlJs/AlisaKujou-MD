let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `✧ Los comandos *NSFW* están desactivados en este grupo.\n> → *${usedPrefix}enable modohorny* para activarlos si eres Administrador.`;

if (!text) throw `✧ Etiqueta a una persona.`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender

let is = conn.getName(m.sender)

let msg = `❀ *@${m.sender.split`@`[0]}* te acabas de follar a *${text}*, la dejaste templando qué ni puede moverse.`.trim()

m.reply(msg, null, { mentions: conn.parseMention(msg)})
}

handler.command = ['fuck']
handler.tags = ['nsfw']
handler.help = ['fuck <@tag>']
handler.group = true
handler.fail = null
handler.register = true

export default handler
