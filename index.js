console.log('\n➤ Archivo en Ejecución: index.js\n\n╭───────────────────╼\n│❀ Iniciando Alisa Kujou - MD\n╰───────────────────╼')
import { join, dirname } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts'
import { createInterface } from 'readline'
import yargs from 'yargs'
import chalk from 'chalk'
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) 
const { name, description, author, version } = require(join(__dirname, './package.json')) 
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)
say('Alisa Kujou', {
font: 'block',
align: 'center',
colors: ['white']
})
say(`MultiDivice`, {
font: 'chrome',
align: 'center',
colors: ['red', 'white']
})
console.log(chalk.yellow(`╭───────────────────╼\n│❀ INFO OWNER\n│◈ Developed: ${author}\n│◈ GitHub: https://github.com/DanixlJs\n│\n│❀ INFO BOT\n│◈ Nombre: ${name}\n│◈ Versión: ${version}\n│◈ Descripción: ${description}\n│◈ Baileys: ^6.7.5\n╰───────────────────╼`))
var isRunning = false
function start(file) {
if (isRunning) return
isRunning = true
let args = [join(__dirname, file), ...process.argv.slice(2)]
say([process.argv[0], ...args].join(' '), {
font: 'console',
align: 'center',
colors: ['green']
})
setupMaster({
exec: args[0],
args: args.slice(1),
})
let p = fork()
p.on('message', data => {
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break
}
})
p.on('exit', (_, code) => {
isRunning = false
console.error('✧ Ocurrió un error:', code)
process.exit();
if (code === 0) return
watchFile(args[0], () => {
unwatchFile(args[0])
start(file)
})
})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())
})
}
start('main.js')
