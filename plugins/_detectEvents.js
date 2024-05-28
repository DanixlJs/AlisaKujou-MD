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
await this.sendMessage(m.chat, { text: `> ${usuario} a cambiado el nombre del grupo.`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 

} else if (chat.detect2 && m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `> ${usuario} a cambiado la imágen del grupo.`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 

} else if (chat.detect2 && m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `> ${usuario} a modificado la descripción.\n\n- *Nueva descripción:*\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `> Ahora ${m.messageStubParameters[0] == 'on' ? 'solo admins' : 'todos'} pueden editar la información del grupo.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `> El grupo ha sido ${m.messageStubParameters[0] == 'on' ? 'cerrado' : 'abierto'}*\n\n${m.messageStubParameters[0] == 'on' ? 'solo admins' : 'todos'} pueden enviar mensajes.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 29) {
let txt1 = `> Nuevo Admin `
txt1 += `@${m.messageStubParameters[0].split`@`[0]} `
txt1 += `a ascendido a Administrador, le otorgó: @${m.sender.split`@`[0]}`
await m.reply(text1)

} else if (chat.detect2 && m.messageStubType == 30) {
let txt2 = `> @${m.messageStubParameters[0].split`@`[0]} ya no es admin, `
txt2 += `degradado por @${m.sender.split`@`[0]}`

await m.reply(text2)

} else if (chat.detect2 && m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `> ${usuario} cambió la duración de mensajes temporales a *${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect2 && m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `> ${usuario} desactivó los mensajes temporales.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}