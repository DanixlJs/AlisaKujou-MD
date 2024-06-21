import speed from 'performance-now'
var handler = async (m, { conn }) => {
let timestamp = speed()
let latensi = speed() - timestamp
let texto = `❀ *Speed ⪼* ${latensi.toFixed(4)}ms`
conn.reply(m.chat, texto, m, fake, )
}
handler.help = ['speed']
handler.tags = ['info']
handler.command = ['speed']
handler.registrado = true
export default handler
