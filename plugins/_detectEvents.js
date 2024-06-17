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
let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => `${global.icons}`)
const img = await (await fetch(pp)).buffer()
const chat = global.db.data.chats[m.chat]
const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)]
const mentionsContentM = [m.sender, m.messageStubParameters[0]]
if (chat.detect2 && m.messageStubType == 2) {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './Session/';
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
console.log(`❀ Eliminacion de Session (PreKey) que provocan el undefined el Chat.`)}}}
if (chat.detect2 && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `❀ ${usuario} cambió el nombre del grupo.`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (chat.detect2 && m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `❀ ${usuario} cambió la imagen del grupo.`, mentions: [m.sender] }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
} else if (chat.detect2 && m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `❀ ${usuario} modificó la descripción del grupo.\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect2 && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `❀ Ahora ${m.messageStubParameters[0] == 'on' ? 'solo Administradores' : 'todos'} pueden editar la informacìón del grupo.`, mentions: [m.sender] }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect2 && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `❀ El grupo ha sido ${m.messageStubParameters[0] == 'on' ? 'cerrado' : 'abierto'}\n\n> ${m.messageStubParameters[0] == 'on' ? 'Solo Administradores' : 'Ahora todos'} pueden enviar mensajes.`, mentions: [m.sender] }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect2 && m.messageStubType == 29) {
let txt1 = `❀ Nuevo Administrador `
txt1 += `@${m.messageStubParameters[0].split`@`[0]} `
txt1 += `a ascendido a Administrador, le otorgó @${m.sender.split`@`[0]}`
await conn.sendMessage(m.chat, {text: txt1, mentions: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "body": global.dev, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": global.channel, "sourceUrl": global.channel}}})
} else if (chat.detect2 && m.messageStubType == 30) {
let txt2 = `✧ @${m.messageStubParameters[0].split`@`[0]} ya no es Administrador, `
txt2 += `fue degradado @${m.sender.split`@`[0]}`
await conn.sendMessage(m.chat, {text: txt2, mentions: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "body": global.dev, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": global.channel, "sourceUrl": global.channel}}})
} else if (chat.detect2 && m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `❀ ${usuario} se cambió la configuración de los Mensajes Temporales a *${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (chat.detect2 && m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `❀ ${usuario} desactivó los Mensajes Temporales.`, mentions: [m.sender] }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}
