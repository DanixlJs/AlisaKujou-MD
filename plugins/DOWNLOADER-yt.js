import Scraper from "@SumiFX/Scraper"
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('✧ Ingresa un enlace de Youtube.')
if (!args[0].match(/youtu/gi)) return conn.reply(m.chat, `✧ El enlace no es válido.`, m)
let user = global.db.data.users[m.sender]
try {
let { title, size, quality, thumbnail, dl_url } = await Scraper.ytmp4(args[0])
if (size.includes('GB') || size.replace(' MB', '') > 500) { return await m.reply('✧ El archivo pesa mas de 500 MB, se canceló la Descarga.')}
let txt = `❀ *YOUTUBE DL*\n ✰ *Titulo ⪼* ${title}\n◈ *Calidad ⪼* ${quality}\n◈ *Peso ⪼* ${size}\n\n> Enviando su archivo, aguarde un momento.`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m)
await conn.sendFile(m.chat, dl_url, title + '.mp4', `❀ Aqui tiene.`, m, false, { asDocument: user.useDocument })
} catch (e){
    console.log(e)
    m.reply('✧ Ocurrió un error inesperado.')
}}
handler.help = ['yt <enlace>']
handler.tags = ['downloader']
handler.command = ['ytmp4', 'yt', 'ytv']
handler.registrado = true 
handler.diamantes = 5
export default handler
