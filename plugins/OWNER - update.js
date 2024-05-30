import { execSync } from 'child_process'

var handler = async (m, { conn, text }) => {

m.react('🚀') 
try {

const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()

if (messager.includes('Ya estoy actualizado.')) messager = '⧼✦⧽ 𝕐𝕒 𝕖𝕤𝕥𝕠𝕪 𝕒𝕔𝕥𝕦𝕒𝕝𝕚𝕫𝕒𝕕𝕒 𝕒 𝕝𝕒 𝕦𝕝𝕥𝕚𝕞𝕒 𝕧𝕖𝕣𝕤𝕚ó𝕟.'

if (messager.includes('⧼✦⧽ 𝔸𝕔𝕥𝕦𝕒𝕝𝕚𝕫𝕒𝕟𝕕𝕠.')) messager = '⧼✿⧽ 𝔸𝕔𝕥𝕦𝕒𝕝𝕚𝕫𝕒𝕔𝕚𝕠𝕟 𝕖𝕩𝕚𝕥𝕠𝕤𝕒.\n\n' + stdout.toString()
conn.reply(m.chat, messager, m, fake,)

} catch { 
try {

const status = execSync('git status --porcelain')

if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('RemSession/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `⧼✦⧽ 𝕊𝕖 ℍ𝕒𝕟 ℍ𝕖𝕔𝕙𝕠 ℂ𝕒𝕞𝕓𝕚𝕠𝕤 𝕃𝕠𝕔𝕒𝕝𝕖𝕤 𝔼𝕟 𝕃𝕠𝕤 𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤 𝔻𝕖𝕝 𝔹𝕠𝕥 ℚ𝕦𝕖 𝔼𝕟𝕥𝕣𝕒𝕟 𝔼𝕟 ℂ𝕠𝕟𝕗𝕝𝕚𝕔𝕥𝕠 ℂ𝕠𝕟 𝕃𝕒𝕤 𝔸𝕔𝕥𝕦𝕒𝕝𝕚𝕫𝕒𝕔𝕚𝕠𝕟𝕖𝕤 𝔻𝕖𝕝 ℝ𝕖𝕡𝕠𝕤𝕚𝕥𝕠𝕣𝕚𝕠. ℙ𝕒𝕣𝕒 𝔸𝕔𝕥𝕦𝕒𝕝𝕚𝕫𝕒𝕣, ℝ𝕖𝕚𝕟𝕤𝕥𝕒𝕝𝕒 𝔼𝕝 𝔹𝕠𝕥 𝕠 ℝ𝕖𝕒𝕝𝕚𝕫𝕒 𝕃𝕒𝕤 𝔸𝕔𝕥𝕦𝕒𝕝𝕚𝕫𝕒𝕔𝕚𝕠𝕟𝕖𝕤 𝕄𝕒𝕟𝕦𝕒𝕝𝕞𝕖𝕟𝕥𝕖.\n\n⧼✦⧽ 𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤 𝔼𝕟 ℂ𝕠𝕟𝕗𝕝𝕚𝕔𝕥𝕠: \n\n${conflictedFiles.join('\n')}`
await conn.reply(m.chat, errorMessage, m, fake,)
}
}
} catch (error) {
console.error(error)
let errorMessage2 = '⧼✦⧽ 𝕆𝕔𝕦𝕣𝕣𝕚𝕠́ 𝕦𝕟 𝕖𝕣𝕣𝕠𝕣 𝕚𝕟𝕖𝕤𝕡𝕖𝕣𝕒𝕕𝕠.'
if (error.message) {
errorMessage2 += '\n⧼✦⧽ 𝕄𝕖𝕟𝕤𝕒𝕛𝕖 𝕕𝕖 𝕖𝕣𝕣𝕠𝕣: ' + error.message;
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