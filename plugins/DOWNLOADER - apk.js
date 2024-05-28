import { search, download } from 'aptoide-scraper'

var handler = async (m, {conn, usedPrefix, command, text}) => {

if (!text) return conn.reply(m.chat, 'Ingresa el nombre del APK.', m, )

try {

let searchA = await search(text)
let data5 = await download(searchA[0].id)
let response = `- *APTOIDE-DL*\n- *Nombre:* ${data5.name}\n- *Package:* ${data5.package}\n- *Actualización:* ${data5.lastup}\n- *Tamaño:* ${data5.size}`
await conn.sendMessage(m.chat, { text: response, contextInfo: { externalAdReply: { title: data5.name, body: global.wm, sourceUrl: global.fakeLink, thumbnailUrl: data5.icon, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })   

 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.reply(m.chat, '> El archivo es demaciado pesado.', m, )
}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m})
} catch {
return conn.reply(m.chat, 'Ocurrió un fallo inesperado.', m, )
}    
}

handler.tags = ['downloader']
handler.help = ['apkmod <texto>']
handler.command = /^(apkmod|apk|dapk2|aptoide|aptoidedl)$/i
handler.register = true

export default handler