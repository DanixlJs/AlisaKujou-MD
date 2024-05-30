import { tmpdir } from 'os'
import path, { join } from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, command, __dirname, args, text }) => {

let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) return conn.reply(m.chat, `⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕒 𝕖𝕝 𝕟𝕠𝕞𝕓𝕣𝕖 𝕕𝕖𝕝 𝕡𝕝𝕦𝕘𝕚𝕟 𝕢𝕦𝕖 𝕢𝕦𝕚𝕖𝕣𝕒𝕤 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣.`)
    if (!ar1.includes(args[0])) return conn.reply(m.chat, `⧼✦⧽ ℕ𝕠 𝕤𝕖 𝕖𝕟𝕔𝕠𝕟𝕥𝕣𝕠 𝕖𝕝 ℙ𝕝𝕦𝕘𝕚𝕟 𝕚𝕟𝕕𝕚𝕔𝕒𝕕𝕠.`)
const file = join(__dirname, '../plugins/' + args[0] + '.js')
unlinkSync(file)
conn.reply(m.chat, `⧼✿⧽ *"plugins/${args[0]}.js" 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕕𝕠 𝕔𝕠𝕣𝕣𝕖𝕔𝕥𝕒𝕞𝕖𝕟𝕥𝕖.`)

}
handler.help = ['deplugin <archivo>']
handler.tags = ['owner']
handler.command = ['delplugin']
handler.rowner = true

export default handler