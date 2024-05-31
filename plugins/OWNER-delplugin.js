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
    if (!text) return conn.reply(m.chat, `⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕖 𝕖𝕝 𝕟𝕠𝕞𝕓𝕣𝕖 𝕕𝕖𝕝 ℙ𝕝𝕦𝕘𝕚𝕟 𝕒 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣.`, m, fake)
    if (!ar1.includes(args[0])) return conn.reply(m.chat, `⧼✦⧽ ℕ𝕠 𝕤𝕖 𝕖𝕟𝕔𝕠𝕟𝕥𝕣𝕠 𝕖𝕝 ℙ𝕝𝕦𝕘𝕚𝕟, 𝕧𝕖𝕣𝕚𝕗𝕚𝕢𝕦𝕖 𝕢𝕦𝕖 𝕤𝕖𝕒 𝕔𝕠𝕣𝕣𝕖𝕔𝕥𝕠.`, m, fake)
const file = join(__dirname, '../plugins/' + args[0] + '.js')
unlinkSync(file)
conn.reply(m.chat, `⧼✿⧽ 𝔼𝕝 𝕡𝕝𝕦𝕘𝕚𝕟 *"${args[0]}.js"* 𝕙𝕒 𝕤𝕚𝕕𝕠 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕕𝕠 𝕔𝕠𝕣𝕣𝕖𝕔𝕥𝕒𝕞𝕖𝕟𝕥𝕖.*`)

}
handler.help = ['delplugin <archivo>']
handler.tags = ['owner']
handler.command = ['delplugin']

handler.rowner = true

export default handler