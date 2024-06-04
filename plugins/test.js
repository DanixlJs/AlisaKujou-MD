const handler = async (m, {conn, text, command, usedPrefix}) => {
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    let user = global.db.data.users[who]
    if (!who) return m.reply('Etiqueta al usuario que quieras Banear.')
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, 'El usuario ha sido Baneado permanentemente.', m, fake, )
}

handler.mods = true
handler.help = ['banuser <@tag>']
handler.command = ['banuser']
handler.register = true

export default handler