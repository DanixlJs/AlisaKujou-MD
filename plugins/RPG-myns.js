import { createHash } from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {
if (m.sender === conn.user.jid) return

if (!global.db.data.users[m.sender].registrado) return m.reply(`✧ Necesitas estar registrado para usar este comando.\n *${usedPrefix}reg <nombre.edad>*`)

let sn = createHash('md5').update(m.sender).digest('hex')

conn.reply(m.chat, sn, m, fake, )
}

handler.help = ['myns']
handler.tags = ['rpg']
handler.command = ['myns']

export default handler