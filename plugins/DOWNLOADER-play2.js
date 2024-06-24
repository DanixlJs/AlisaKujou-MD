import Scraper from '@SumiFX/Scraper'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, '✧ Ingresa el nombre de la canción que quieras descargar.', m)
try {
let res = await Scraper.ytsearch(text)
let { title, size, quality, thumbnail, dl_url } = await Scraper.ytmp4(res[0].url)
if (size.includes('GB') || size.replace(' MB', '') > 100) { return await m.reply('✧ El archivo supera los 100 MB, se canceló la descarga.')}
let txt = `❀ *DOWNLOADER - YOUTUBE*\n✰ *Título ⪼* ${title}\n◈ *Duración ⪼* ${res[0].duration}\n◈ *Autor ⪼* ${res[0].author}\n◈ *Calidad ⪼* ${quality}\n◈ *Publicado ⪼* ${res[0].published}\n◈ *Peso ⪼* ${size}\n◈ *Url ⪼* ${res[0].url}> Descargando su video, espere un momento.`
await conn.sendFile(m.chat, thumbnail, 'icon.jpg', txt, m)
await conn.sendFile(m.chat, dl_url, title + '.mp4', `❀ *Titulo ⪼* ${title}\n◈ *Calidad ⪼* ${quality}`, m, false, { asDocument: true})
} catch (e){
m.reply('✧ Ocurrió un error inesperado.')
console.log(e)
}}
handler.help = ["play2 <texto>"]
handler.tags = ["downloader"]
handler.command = ["play2"]
handler.registrado = true 
export default handler
