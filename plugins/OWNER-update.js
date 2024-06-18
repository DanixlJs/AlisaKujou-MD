import { execSync } from 'child_process'
var handler = async (m, { conn, text }) => {
m.react('🚀') 
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = '❀ Ya estoy actualizada a la última versión.'
if (messager.includes('Updating')) messager = '❀ *ACTUALIZACIÓN EXITOSA*\n\n' + stdout.toString()
conn.reply(m.chat, messager, m, fake,)
} catch { 
try {
const status = execSync('git status --porcelain')
if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('Session/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `✧ Se han hecho cambios locales qué entran en conflicto con las Actualizaciones del Repositorio, Para actualizar, reinstala el Bot o realiza las actualizaciones manualmente.\n\n✰ *ARCHIVOS EN CONFLICTO*\n\n${conflictedFiles.join('\n')}`
await conn.reply(m.chat, errorMessage, m, fake,)
}
}
} catch (error) {
console.error(error)
let errorMessage2 = '✧ Ocurrió un error inesperado.'
if (error.message) {
errorMessage2 += '\n✧ Mensaje de error: ' + error.message;
}
await conn.reply(m.chat, errorMessage2, m, fake,)
}
}
}
handler.help = ['update', 'actualizar']
handler.tags = ['owner']
handler.command = ['update', 'actualizar']
handler.rowner = true
export default handler
