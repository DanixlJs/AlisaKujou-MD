import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `Escriba un texto a buscar, Ejemplo:\n*${usedPrefix + command} Re:Zero Edits*`, m, )

let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `- *RESULTADOS*
- *Título:* ${v.title}
- *Enlace:* ${v.url}
- *Duración:* ${v.timestamp}
- *Subido:* ${v.ago}
- *Vistas:* ${v.views}`}}).filter(v => v).join('\n\n')

conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)

}
handler.help = ['ytsearch <texto>']
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i
handler.register = true
handler.limit = true

export default handler
