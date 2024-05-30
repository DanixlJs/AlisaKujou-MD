import { search, download } from 'aptoide-scraper'

var handler = async (m, {conn, usedPrefix, command, text}) => {

if (!text) return conn.reply(m.chat, '⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕖 𝕦𝕟 𝕥𝕖𝕩𝕥𝕠 𝕡𝕒𝕣𝕒 𝕣𝕖𝕒𝕝𝕚𝕫𝕒𝕣 𝕝𝕒 𝕓𝕦𝕤𝕢𝕦𝕖𝕕𝕒.\n◈ 𝔼𝕛𝕖𝕞𝕡𝕝𝕠:\n*→ ${usedPrefix + command} CapCut*', m, )
try {
let searchA = await search(text)
let data5 = await download(searchA[0].id)

let response = `✰ ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤 𝕕𝕖 𝕝𝕒 𝔹𝕦𝕤𝕢𝕦𝕖𝕕𝕒.\n◈ ℕ𝕠𝕞𝕓𝕣𝕖: ${data.name}\n◈ ℙ𝕒𝕔𝕜𝕒𝕘𝕖: ${data5.package}\n◈ 𝔸𝕔𝕥𝕦𝕒𝕝𝕚𝕫𝕒𝕔𝕚𝕠́𝕟: ${data5.lastup}\n◈ 𝕋𝕒𝕞𝕒𝕟̃𝕠: ${data5.size}`

await conn.sendMessage(m.chat, { text: response, contextInfo: { externalAdReply: { title: data5.name, body: global.wm, sourceUrl: global.fakeLink, thumbnailUrl: data5.icon, mediaType: 1, showAdAttribution: true, renderLargerThumbnail: true }}} , { quoted: m })   

 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.reply(m.chat, '⧼✦⧽ 𝔼𝕝 𝕒𝕣𝕔𝕙𝕚𝕧𝕠 𝕖𝕤 𝕕𝕖𝕞𝕒𝕤𝕚𝕒𝕕𝕠 𝕡𝕖𝕤𝕒𝕕𝕠.', m, )
}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m})
} catch {
return conn.reply(m.chat, '⧼✦⧽ 𝕆𝕔𝕦𝕣𝕣𝕚𝕠́ 𝕦𝕟 𝕖𝕣𝕣𝕠𝕣 𝕚𝕟𝕖𝕤𝕡𝕖𝕣𝕒𝕕𝕠.', m, )
}    
}

handler.tags = ['downloader']
handler.help = ['apkmod <texto>']
handler.command = ['apkmod']
handler.register = true

export default handler