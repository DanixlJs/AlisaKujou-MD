import Scraper from '@SumiFX/Scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('✧ Ingresa un enlace de Instagram.')
try {
let { dl_url } = await Scraper.igdl(args[0])
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: '❀ Aqui tiene.' }, { quoted: m})
} catch (e) {
  console.log(e)
  m.reply('✧ Ocurrió un error inesperado.')
}}
handler.help = ['ig <enlace>']
handler.tags = ['downloader']
handler.command = ['ig', 'instagram']
handler.registrado = true 
handler.diamantes = 5
export default handler
