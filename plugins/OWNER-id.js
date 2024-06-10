const handler = async (m, {conn, groupMetadata}) => {
m.reply(`${groupMetadata.id}`)
}

handler.command = ['id']
handler.rowner = true

export default handler