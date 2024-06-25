let handler = async (m, { conn, command, usedPrefix }) => {

let queso = `*so* 🧀`
let txt = `*rrocito* 🍚`

if (command == 'que') {
await conn.sendFile(m.chat, '', 'cafi.jpg', queso.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: botname,
body: `🤍 Botsito`,
mediaType: 1,
sourceUrl: channel,
thumbnailUrl: icons
}}
}, { mentions: m.sender })
}

if (command == 'a' || command == 'aa' || command == 'A' || command == 'Aa') {
 await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: botname,
body: `🤍 Botsito`,
"previewType": "PHOTO",
thumbnailUrl: icons, 
sourceUrl: channel}}},
{ quoted: fkontak})
}}

handler.command = /^(que|aa|Aa|A|a)$/i
export default handler