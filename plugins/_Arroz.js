import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command, __dirname }) => {
try {
let info = `*rrocito* 🍚`
conn.sendMessage(m.chat, {
text: info,
contextInfo: {
externalAdReply: {
title: botname + ' 🤍',
thumbnailUrl: 'https://qu.ax/zPKl.jpg',
sourceUrl: channel,
mediaType: 2,
}}}, { quoted: m });
} catch (error) {
console.error(error)}}
handler.customPrefix = /^(A|a)$/i
handler.command = new RegExp
export default handler