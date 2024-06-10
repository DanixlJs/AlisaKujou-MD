const handler = async (m, {conn, text}) => {

let user = global.db.data.users[m.sender]
user.desc = "";
conn.reply(m.chat, '❀ Se eliminó tu descripción', m, )
}

handler.help = ['deldesc']
handler.command = ['deldesc']
handler.registrado = true
handler.tags = ['rpg']

export default handler
