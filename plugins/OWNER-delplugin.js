import { tmpdir } from 'os'
import path, { join } from 'path'
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs'
let handler = async (m, { conn, usedPrefix: _p, command, __dirname, args, text }) => {
let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) return conn.reply(m.chat, `✧ Ingrese el nombre del Plugin a eliminar.`, m)
    if (!ar1.includes(args[0])) return conn.reply(m.chat, `✧ No se encontró resultados.`, m)
const file = join(__dirname, '../plugins/' + args[0] + '.js')
unlinkSync(file)
conn.reply(m.chat, `❀ El Plugin *"${args[0]}.js"* ha sido eliminado correctamente.`)
}
handler.help = ['delplugin <archivo>']
handler.tags = ['owner']
handler.command = ['delplugin']
handler.rowner = true
export default handler