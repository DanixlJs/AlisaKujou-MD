import Scraper from "@SumiFX/Scraper"
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('✧ Ingresa un enlace de Mediafire.')
if (!args[0].match(/mediafire/gi)) return m.reply('✧ El enlace no es un enlace válido de Mediafire.')
let user = global.db.data.users[m.sender]
try {
let { title, ext, aploud, size, dl_url } = await Scraper.mediafire(args[0])
if (size.includes('GB') || size.replace(' MB', '') > user.premium ? 500 : 100) { return await m.reply(`✧ El archivo pesa más de ${user.premium ? '500' : '100'}MB, ${user.premium ? 'se canceló la descarga.' : 'pasate a Premium para descargar archivos de hasta 500MB.'}`)}
let txt = `❀ *DOWNLOADER - MEDIAFIRE*\n✰ *Titulo * ${title}\n◈ *Subido * ${aploud}\n◈ *Peso * ${size}\n> Descargando su archivo, espere un momento.`
await conn.reply(m.chat, txt, m, fake, )
await conn.sendFile(m.chat, dl_url, title, null, m, null, { mimetype: ext, asDocument: true })
} catch (e){
m.reply('✧ Ocurrió un error inesperado.')
console.log(e)
}}
handler.help = ['mediafire <enlace>']
handler.tags = ['downloader']
handler.command = ['mediafire', 'mf']
handler.registrado = true 
export default handler
