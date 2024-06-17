let handler = async (m, { conn, args }) => {
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)

conn.reply(m.chat, link, m, {detectLink: true})
}

handler.help = ['link']
handler.command = ['link']
handler.group = true
handler.botAdmin = true
handler.registrado = true

export default handler
