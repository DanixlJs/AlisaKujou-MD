import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    const { key } = await conn.sendMessage(m.chat, {text: `🚀`}, {quoted: m});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `🚀🚀`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `🚀🚀🚀`, edit: key});
await conn.sendMessage(m.chat, {text: `⧼✿⧽ ℝ𝕖𝕚𝕟𝕚𝕔𝕚𝕒𝕟𝕕𝕠.`, edit: key});
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['restart', 'reiniciar']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 
handler.rowner = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))