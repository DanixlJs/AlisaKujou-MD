import Scraper from "@SumiFX/Scraper"
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('✧ Ingresa un enlace de YouTube.')
if (!args[0].match(/youtu/gi)) return conn.reply(m.chat, `✧ El enlace no es un enlace válido de YouTube.`, m)
try {
let { title, size, quality, thumbnail, dl_url } = await Scraper.ytmp4(args[0])
if (size.includes('GB') || size.replace(' MB', '') > 300) { return await m.reply('✧ El archivo supera los 300MB, se canceló la descarga.')}
let txt = `❀ *DOWNLOADER - YOUTUBE*\n✰ *Título ⪼* ${title}\n◈ *Cálidad ⪼* ${quality}\n◈ *Peso ⪼* ${size}\n\n> Descargando su archivo, espere un momento.`
await conn.sendFile(m.chat, thumbnail, 'icono.jpg', txt, m)
await conn.sendFile(m.chat, dl_url, title + '.mp4', `❀ *Titulo ⪼* ${title}\n◈ *Calidad ⪼* ${quality}`, m, false, { asDocument: true })
} catch (e){
m.reply('✧ Ocurrió un error inesperado.')
console.log(e)
}}
handler.help = ['ytmp3 <enlace>']
handler.tags = ['downloader']
handler.command = ['ytmp3']
handler.registrado = true
export default handler
