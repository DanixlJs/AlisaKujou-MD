let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `❀ ${global.botname} ha sido desactivado en el Grupo.`, m, fake, )

}

handler.help = ['banchat']
handler.register = true
handler.tags = ['mods']
handler.command = ['banchat']
handler.mods = true 
handler.group = true

export default handler