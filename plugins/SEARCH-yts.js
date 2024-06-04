import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `✧ Ingresa un texto para realizar la búsqueda, Ejemplo:\n> → *${usedPrefix + command} Empanada Durmiendo*`, m, )

let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `❀ *YOUTUBE SEARCH*
✰ *Título ⪼* ${v.title}
◈ *Link ⪼* ${v.url}
◈ *Duración ⪼* ${v.timestamp}
◈ *Publicado ⪼* ${v.ago}
◈ *Vistas ⪼* ${v.views}`}}).filter(v => v).join('\n\n')

conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)

}

handler.help = ['ytsearch <texto>']
handler.tags = ['search']
handler.command = ['yts', 'ytsearch']
handler.register = true
handler.limit = true

export default handler
