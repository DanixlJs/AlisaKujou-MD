let handler = async (m, { conn,usedPrefix, command, text, isROwner }) => {
if (!m.mentionedJid[0] && !m.quoted) {
return m.reply('✧ Etiqueta al usuario que quieras degradar.')
}
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
if (user === isROwner) return m.reply('Nel wey')
conn.groupParticipantsUpdate(m.chat, [user], 'demote')
m.react('✅')
}
handler.help = ['demote <@tag>']
handler.tags = ['grupo']
handler.command = ['demote']
handler.registrado = true
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
