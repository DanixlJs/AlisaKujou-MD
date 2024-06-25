let handler = async (m, { conn, command, usedPrefix }) => {
let queso = `*so* 🧀`
let arroz = `*rrocito* 🍚`

if (command == 'que' || command == 'Que' || command == 'q' || command == 'Q') {
conn.sendMessage(m.chat, {
text: queso,
contextInfo: {
externalAdReply: {
title: botname + ' 🤍',
thumbnailUrl: 'https://qu.ax/zPKl.jpg',
sourceUrl: channel,
mediaType: 2,
}}}, { quoted: m })
}

conn.sendMessage(m.chat, {
text: arroz,
contextInfo: {
externalAdReply: {
title: botname + ' 🤍',
thumbnailUrl: 'https://qu.ax/zPKl.jpg',
sourceUrl: channel,
mediaType: 2,
}}}, { quoted: m });
}}

handler.command = /^(que|Que|q|Q|A|a|aa)$/i
export default handler