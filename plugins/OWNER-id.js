const handler = async (m, {isOwner, conn, groupMetadata}) => {
if (isOwner) {
return
}
m.reply(`${groupMetadata.id}`)
}
handler.command = ['id']
export default handler