import { execSync } from 'child_process'

var handler = async (m, { conn, text }) => {
m.react('🚀') 
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Ya estoy actualizado.')) messager = 'Ya estoy actualizada a la última versión.'
if (messager.includes('Actualizando.')) messager = 'Actualización éxitosa.\n\n' + stdout.toString()
conn.reply(m.chat, messager, m, fake,)
} catch { 
try {
const status = execSync('git status --porcelain')
if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('sessions/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `> Se Han Hecho Cambios Locales En Los Archivos Del Bot Que Entran En Conflicto Con Las Actualizaciones Del Repositorio. Para Actualizar, Reinstala El Bot o Realiza Las Actualizaciones Manualmente.\n\n- *Archivos En Conflicto:* \n\n${conflictedFiles.join('\n')}`
await conn.reply(m.chat, errorMessage, m, fake,)
}
}
} catch (error) {
console.error(error)
let errorMessage2 = '> Ocurrio un error inesperado.'
if (error.message) {
errorMessage2 += '\n- *Mensaje de error:* ' + error.message;
}
await conn.reply(m.chat, errorMessage2, m, fake,)
}
}

}
handler.help = ['update', 'actualizar']
handler.tags = ['owner']
handler.command = /^(update|actualizar)$/i
handler.rowner = true

export default handler