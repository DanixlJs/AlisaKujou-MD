let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) return conn.reply(m.chat, `😃 Te Faltó El Video.`, m, fake)
global.rwait = '⏱️'
global.done = '✅️'
/* conn.reply(m.chat, global.wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}}) */
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) return conn.reply(m.chat, `😃 Te Faltó El Video.`, m, fake)
await m.react(rwait)
let media = await q.download()
let listo = `${global.botname}`
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: listo }, { quoted: m })
await m.react(done)
}
// handler.help = ['togifaud']
// handler.tags = ['tools']
handler.command = ['togifaud']
export default handler