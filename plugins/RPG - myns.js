import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')

conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', '乂 SU SERIE 乂', 'status@broadcast')
}

handler.help = ['myns']
handler.tags = ['info']
handler.command = ['myns']
handler.register = true

export default handler