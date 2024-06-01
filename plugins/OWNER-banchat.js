let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `❀ ${global.botname} ha sido desactivado en el Grupo.`, m, fake, )

}

handler.help = ['banchat']
handler.register = true
handler.tags = ['owner']
handler.command = ['banchat']
handler.owner = true 
handler.group = true

export default handler