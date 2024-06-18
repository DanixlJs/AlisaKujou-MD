import { createHash } from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {
let sn = createHash('md5').update(m.sender).digest('hex')
conn.reply(m.chat, sn, m, fake, )
}
handler.help = ['myns']
handler.tags = ['rpg']
handler.command = ['myns']
handler.registrado = true
export default handler
