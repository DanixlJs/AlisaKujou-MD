const handler = async (m, {conn, groupMetadata}) => {
if (m.sender === conn.user.jid) return
m.reply(`${groupMetadata.id}`)
}

handler.command = ['id']
handler.rowner = true

export default handler