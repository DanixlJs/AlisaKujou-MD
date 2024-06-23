let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) return m.reply(`✧ Los comandos *NSFW* están desactivados en este grupo.\n> *${usedPrefix}on nsfw* para activarlos si eres Administrador.`);
if (!text) return m.reply(`✧ Etiqueta a una persona.`)
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
handler.registrado = true
export default handler
