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
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return conn.reply(m.chat, `𝔸ℕ𝕋𝕀𝕃𝕀ℕ𝕂: 𝕃𝕚𝕟𝕜 𝕕𝕖𝕥𝕖𝕔𝕥𝕒𝕕𝕠, 𝕡𝕖𝕣𝕠 𝕖𝕣𝕖𝕤 𝔸𝕕𝕞𝕚𝕟𝕚𝕤𝕥𝕣𝕒𝕕𝕠𝕣 𝕒𝕤𝕚 𝕢𝕦𝕖 𝕥𝕖 𝕤𝕒𝕝𝕧𝕒𝕤.`, m, fake, )
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await conn.reply(m.chat, `𝔸ℕ𝕋𝕀𝕃𝕀ℕ𝕂: ${await this.getName(m.sender)} 𝕞𝕒𝕟𝕕𝕒𝕤𝕥𝕖 𝕦𝕟 𝕖𝕟𝕝𝕒𝕔𝕖 𝕡𝕣𝕠𝕙𝕚𝕓𝕚𝕕𝕠 𝕡𝕠𝕣 𝕝𝕠 𝕔𝕦𝕒𝕝 𝕤𝕖𝕣𝕒𝕤 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕕𝕠.`, m, fake, )
if (!isBotAdmin) return conn.reply(m.chat, `⧼✦⧽ ℕ𝕠 𝕤𝕠𝕪 𝕒𝕕𝕞𝕚𝕟, 𝕟𝕠 𝕡𝕦𝕖𝕕𝕠 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣 𝕚𝕟𝕥𝕣𝕦𝕤𝕠𝕤.`, m, fake, )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `⧼✦⧽ ℕ𝕠 𝕡𝕦𝕖𝕕𝕠 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣 𝕚𝕟𝕥𝕣𝕦𝕤𝕠𝕤 𝕡𝕠𝕣 𝕞𝕚 𝕔𝕠𝕟𝕗𝕚𝕘𝕦𝕣𝕒𝕔𝕚ó𝕟 𝕒𝕔𝕥𝕦𝕒𝕝.`, m, fake, )
}
return !0

}