let handler = async (m, { conn, command, usedPrefix }) => {
let queso = `*so* 🧀`
let arroz = `*rrocito* 🍚`

if (command == 'que' || command == 'Que' || command == 'q' || command == 'Q') {
'', 'queso.jpg', queso.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: packname + ' 🤍',
mediaType: 1,
sourceUrl: channel,
thumbnailUrl: icons
}}
}, { mentions: m.sender })
}

if (command == 'a' || command == 'A' || command == 'aa' {
 await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: packname + ' 🤍',
"previewType": "PHOTO",
thumbnailUrl: icon, 
sourceUrl: channel}}},
{ quoted: fkontak})
}}

handler.command = /^(que|Que|q|Q|A|a|aa)$/i
export default handler