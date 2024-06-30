import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) return m.reply('Dont: node main.js\nDo: node index.js')
    if (conn.user.jid == conn.user.jid) {
    const { key } = await conn.sendMessage(m.chat, {text: `🚀`}, {quoted: m});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `🚀🚀`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `🚀🚀🚀`, edit: key});
await conn.sendMessage(m.chat, {text: `❀ Reiniciando.`, edit: key});
    process.send('reset')
  } else m.reply('✧ Ocurrió un error inesperado.')
}
handler.help = ['restart', 'reload']
handler.tags = ['owner']
handler.command = ['restart','reload'] 
handler.rowner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
