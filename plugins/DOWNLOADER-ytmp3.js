import Scraper from "@SumiFX/Scraper"
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('✧ Ingresa un enlace de YouTube.')
if (!args[0].match(/youtu/gi)) return conn.reply(m.chat, `✧ El enlace no es un enlace válido de YouTube.`, m)
try {
let { title, size, quality, thumbnail, dl_url } = await Scraper.ytmp3(args[0])
let fileSize = parseFloat(size.replace(/[^0-9.]/g, ''))
let isGB = size.includes('GB')
if (isGB) fileSize *= 1024
if (fileSize > (user.premium ? 500 : 100)) { return await m.reply(`✧ El archivo supera los ${user.premium ? 500 : 100}MB, ${user.premium ? 'se canceló la descarga.' : 'pasate a premium para descargar archivos de hasta 500MB.'}`)}
let txt = `❀ *DOWNLOADER - YOUTUBE*\n✰ *Título ⪼* ${title}\n◈ *Cálidad ⪼* ${quality}\n◈ *Peso ⪼* ${size}\n\n> Descargando su archivo, espere un momento.`
await conn.sendFile(m.chat, thumbnail, 'icono.jpg', txt, m)
await conn.sendFile(m.chat, dl_url, title + '.mp3', `❀ *Titulo ⪼* ${title}\n◈ *Calidad ⪼* ${quality}`, m, false, { mimetype: 'audio/mpeg', asDocument: true })
} catch (e){
m.reply('✧ Ocurrió un error inesperado.')
console.log(e)
}}
handler.help = ['ytmp3 <enlace>']
handler.tags = ['downloader']
handler.command = ['ytmp3']
handler.registrado = true
export default handler
