import Scraper from '@SumiFX/Scraper'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, '✧ Ingresa el nombre de la canción que quieras descargar.', m)
try {
/* conn.reply(m.chat, `> ⏱️ Cargando espere un momento...`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: botname,
body: `😸 Espere!, xD`,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}}) */
let res = await Scraper.ytsearch(text)
let { title, size, quality, thumbnail, dl_url } = await Scraper.ytmp3(res[0].url)
if (size.includes('GB') || size.replace(' MB', '') > 100) { return await m.reply('✧ El archivo supera los 100 MB, se canceló la descarga.')}
let txt = `❀ *DOWNLOADER - YOUTUBE*\n✰ *Título ⪼* ${title}\n◈ *Duración ⪼* ${res[0].duration}\n◈ *Autor ⪼* ${res[0].author}\n◈ *Calidad ⪼* ${quality}\n◈ *Publicado ⪼* ${res[0].published}\n◈ *Peso ⪼* ${size}\n◈ *Url ⪼* ${res[0].url}\n\n> Descargando su canción, espere un momento.`
await conn.sendFile(m.chat, thumbnail, 'icon.jpg', txt, m)
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg', contextInfo: { externalAdReply: { title: title, body: global.dev, thumbnailUrl: thumbnail, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })
} catch (e){
m.reply('✧ Ocurrió un error inesperado.')
console.log(e)
}}
handler.help = ["play <texto>"]
handler.tags = ["downloader"]
handler.command = ["play"]
handler.registrado = true 
export default handler
