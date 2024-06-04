 let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return conn.reply(m.chat, `✧ Se detectó un Link.`, m, fake, )
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await conn.reply(m.chat, `✧ ${await this.getName(m.sender)} será eliminado del grupo por mandar un Link de su Grupo.`, m, fake, )
if (!isBotAdmin) return conn.reply(m.chat, `✧ Necesito ser Administrador para eliminar intrusos.`, m, fake, )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `✧ No puedo eliminar intrusos por con mi configuración actual.`, m, fake, )
}
return !0

}