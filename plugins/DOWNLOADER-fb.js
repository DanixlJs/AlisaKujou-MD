import Scraper from '@SumiFX/Scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('✧ Ingresa un enlace de Facebook.')
try {
let { title, SD, HD } = await Scraper.fbdl(args[0])
await conn.sendMessage(m.chat, { video: { url: SD || HD }, caption: `❀ *DOWNLOADER - FACEBOOK*\n✰ *Titulo ⪼* ${title}` }, { quoted: m})
} catch (e){
m.reply('Ocurrió un  error inesperado.')
console.log(e)
}}
handler.help = ['fb <enlace>']
handler.tags = ['downloader']
handler.command = ['fb', 'facebook']
handler.registrado = true 
export default handler
