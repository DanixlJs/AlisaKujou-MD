import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function before(m, { conn, participants, groupMetadata}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
const groupName = (await conn.groupMetadata(m.chat)).subject
const groupAdmins = participants.filter((p) => p.admin)
let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
const img = await (await fetch(pp)).buffer()
const chat = global.db.data.chats[m.chat]
const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)]
const mentionsContentM = [m.sender, m.messageStubParameters[0]]

if (chat.detect2 && m.messageStubType == 2) {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './RemSession/';
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
console.log(`Eliminacion RemSession (PreKey) que provocan el undefined el chat`)}}}

if (chat.detect2 && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `⧼✿⧽ ${usuario} 𝕒 𝕔𝕒𝕞𝕓𝕚𝕒𝕕𝕠 𝕖𝕝 𝕟𝕠𝕞𝕓𝕣𝕖 𝕕𝕖𝕝 𝕘𝕣𝕦𝕡𝕠.`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 

} else if (chat.detect2 && m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `⧼✿⧽ ${usuario} 𝕒 𝕔𝕒𝕞𝕓𝕚𝕒𝕕𝕠 𝕝𝕒 𝕚𝕞á𝕘𝕖𝕟 𝕕𝕖𝕝 𝕘𝕣𝕦𝕡𝕠.`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 

} else if (chat.detect2 && m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `⧼✿⧽ ${usuario} 𝕒 𝕞𝕠𝕕𝕚𝕗𝕚𝕔𝕒𝕕𝕠 𝕝𝕒 𝕕𝕖𝕤𝕔𝕣𝕚𝕡𝕔𝕚ó𝕟.\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `⧼✿⧽ 𝔸𝕙𝕠𝕣𝕒 ${m.messageStubParameters[0] == 'on' ? '𝕤𝕠𝕝𝕠 𝕒𝕕𝕞𝕚𝕟𝕤' : '𝕥𝕠𝕕𝕠𝕤'} 𝕡𝕦𝕖𝕕𝕖𝕟 𝕖𝕕𝕚𝕥𝕒𝕣 𝕝𝕒 𝕚𝕟𝕗𝕠𝕣𝕞𝕒𝕔𝕚ó𝕟 𝕕𝕖𝕝 𝕘𝕣𝕦𝕡𝕠.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `⧼✿⧽ 𝔼𝕝 𝕘𝕣𝕦𝕡𝕠 𝕙𝕒 𝕤𝕚𝕕𝕠 ${m.messageStubParameters[0] == 'on' ? '𝕔𝕖𝕣𝕣𝕒𝕕𝕠' : '𝕒𝕓𝕚𝕖𝕣𝕥𝕠'}*\n\n${m.messageStubParameters[0] == 'on' ? '𝕤𝕠𝕝𝕠 𝕒𝕕𝕞𝕚𝕟𝕤' : '𝕥𝕠𝕕𝕠𝕤'} 𝕡𝕦𝕖𝕕𝕖𝕟 𝕖𝕟𝕧𝕚𝕒𝕣 𝕞𝕖𝕟𝕤𝕒𝕛𝕖𝕤.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 29) {
let txt1 = `⧼✿⧽ ℕ𝕦𝕖𝕧𝕠 𝔸𝕕𝕞𝕚𝕟 `
txt1 += `@${m.messageStubParameters[0].split`@`[0]} `
txt1 += `𝕒 𝕒𝕤𝕔𝕖𝕟𝕕𝕚𝕕𝕠 𝕒 𝔸𝕕𝕞𝕚𝕟𝕚𝕤𝕥𝕣𝕒𝕕𝕠𝕣, 𝕝𝕖 𝕠𝕥𝕠𝕣𝕘𝕠: @${m.sender.split`@`[0]}`
await m.reply(txt1)
} else if (chat.detect2 && m.messageStubType == 30) {
let txt2 = `⧼✿⧽ @${m.messageStubParameters[0].split`@`[0]} 𝕪𝕒 𝕟𝕠 𝕖𝕤 𝕒𝕕𝕞𝕚𝕟, `
txt2 += `𝕕𝕖𝕘𝕣𝕒𝕕𝕒𝕕𝕠 𝕡𝕠𝕣 @${m.sender.split`@`[0]}`
await m.reply(txt2)

} else if (chat.detect2 && m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `⧼✿⧽ ${usuario} 𝕔𝕒𝕞𝕓𝕚ó 𝕝𝕒 𝕕𝕦𝕣𝕒𝕔𝕚ó𝕟 𝕕𝕖 𝕞𝕖𝕟𝕤𝕒𝕛𝕖𝕤 𝕥𝕖𝕞𝕡𝕠𝕣𝕒𝕝𝕖𝕤 𝕒 *${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `⧼✿⧽ ${usuario} 𝕕𝕖𝕤𝕒𝕔𝕥𝕚𝕧ó 𝕝𝕠𝕤 𝕞𝕖𝕟𝕤𝕒𝕛𝕖𝕤 𝕥𝕖𝕞𝕡𝕠𝕣𝕒𝕝𝕖𝕤.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}