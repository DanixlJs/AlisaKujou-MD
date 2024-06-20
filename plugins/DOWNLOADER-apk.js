import Scraper from "@SumiFX/Scraper"
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('✧ Ingresa el nombre del APK qué quieras descargar.')
try {
let { name, packname, update, size, thumbnail, dl_url } = await Scraper.aptoide(text)
if (size.includes('GB') || size.replace(' MB', '') > 200) { return await m.reply('✧ El archivo pesa mas de 200 MB, se canceló la Descarga.')}
let txt = `❀ *APTOIDE DL*\n✰ *Nombre ⪼* ${name}\n◈ *Packname ⪼* ${packname}\n◈ *Peso ⪼* ${size}\n◈ *Actualizado el ⪼* ${update}`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m)
await conn.sendMessage(m.chat, {document: { url: dl_url }, mimetype: 'application/vnd.android.package-archive', fileName: name + '.apk', caption: null }, {quoted: m})
} catch {
}}
handler.help = ['apk <aplicación>']
handler.tags = ['downloader']
handler.command = ['aptoide', 'apk']
handler.registrado = true 
handler.diamantes = 1
export default handler