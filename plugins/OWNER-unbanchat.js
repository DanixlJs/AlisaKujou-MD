var handler = async (m) => {

global.db.data.chats[m.chat].isBanned = false
conn.reply(m.chat, `${global.botname} Ha sido activado de nuevo en el Chat.`, m, fake, )

}

handler.help = ['unbanchat']
handler.register = true
handler.tags = ['owner']
handler.command = ['unbanchat']
handler.owner = true 
handler.group = true

export default handler