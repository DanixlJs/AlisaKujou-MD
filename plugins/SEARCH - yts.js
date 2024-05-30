import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕖 𝕦𝕟 𝕥𝕖𝕩𝕥𝕠 𝕡𝕒𝕣𝕒 𝕣𝕖𝕒𝕝𝕚𝕫𝕒𝕣 𝕝𝕒 𝕓𝕦𝕤𝕢𝕦𝕖𝕕𝕒.\n◈ 𝔼𝕛𝕖𝕞𝕡𝕝𝕠:\n→ *${usedPrefix + command} Re:Zero Edits*`, m, )

let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `✰ *ℝ𝕖𝕤𝕦𝕝𝕥𝕒𝕕𝕠𝕤*
◈ 𝕋𝕚𝕥𝕦𝕝𝕠: ${v.title}
◈ 𝕃𝕚𝕟𝕜: ${v.url}
◈ 𝔻𝕦𝕣𝕒𝕔𝕚𝕠𝕟: ${v.timestamp}
◈ ℙ𝕦𝕓𝕝𝕚𝕔𝕒𝕕𝕠: ${v.ago}
◈ 𝕍𝕚𝕤𝕥𝕒𝕤: ${v.views}`}}).filter(v => v).join('\n\n')

conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)

}

handler.help = ['ytsearch <texto>']
handler.tags = ['search']
handler.command = ['yts', 'ytsearch']
handler.register = true
handler.limit = true

export default handler
