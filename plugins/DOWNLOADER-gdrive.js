import Scraper from '@SumiFX/Scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('✧ Ingresa un enlace de un archivo de Google Drive.')
let user = global.db.data.users[m.sender]
try {
let { title, size, type, dl_url } = await Scraper.GDriveDl(args[0])
if (size.includes('GB') || size.replace(' MB', '') > user.premium ? 500 : 100) { return await m.reply(`El archivo pesa mas de ${user.premium ? '500' : '100'}MB, ${user.premium ? 'se canceló la descarga.' : 'pasate premium para descargar archivos de hasta 500MB.'}`)}
let txt = `❀ *DOWNLOADER - GDRIVE*\n✰ *Nombre * ${title}\n◈ *Peso * ${size}\n> Descargando su archivo, espere un momento.`
await conn.reply(m.chat, txt, m, fake, )
await conn.sendMessage(m.chat, { document: { url: dl_url }, fileName: title, mimetype: type }, { quoted: m })
} catch (e){
m.reply('✧ Ocurrió un error inesperado.')
console.log(e)
}}
handler.help = ['gdrive <enlace>']
handler.tags = ['downloader', 'premium']
handler.command = ['gdrive']
handler.registrado = true
export default handler
