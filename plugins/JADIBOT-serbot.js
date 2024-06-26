import { DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser } from '@whiskeysockets/baileys'
import qrcode from 'qrcode'
import fs from 'fs'
import pino from 'pino'
import crypto from 'crypto'
import NodeCache from 'node-cache'
import { makeWASocket } from '../lib/simple.js'
if (global.conns instanceof Array) {
console.log()
} else {
global.conns = []
}
let handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems, isROwner }) => {
if (!global.db.data.settings[conn.user.jid].modejadibot && isROwner) {
m.reply('✧ La opción de ser Sub-Bot ha sido desactivado por mi creador.')
return
}
let parentw = args[0] && args[0] == "plz" ? conn : await global.conn
if (!(args[0] && args[0] == 'plz' || (await global.conn).user.jid == conn.user.jid)) {
return m.reply("✧ Este comando solo puede ser usado en el bot principal.\n> https://wa.me/" + global.conn.user.jid.split`@`[0x0] + "?text=" + usedPrefix + "qr")
}
async function serbot() {
let serbotFolder = crypto.randomBytes(10).toString('hex').slice(0, 8)
let folderSub = `./JadiBotSessions/${serbotFolder}`
if (!fs.existsSync(folderSub)) {
fs.mkdirSync(folderSub, { recursive: true })
}
if (args[0]) {
fs.writeFileSync(`${folderSub}/creds.json`, Buffer.from(args[0], 'base64').toString('utf-8'))
}
const { state, saveCreds } = await useMultiFileAuthState(folderSub)
const msgRetryCounterCache = new NodeCache()
const { version } = await fetchLatestBaileysVersion()
const connectionOptions = {
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: [`${global.botname}(Sub-Bot)`, 'Safari', '2.0.0'],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true,
generateHighQualityLinkPreview: true,
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid)
let msg = await store.loadMessage(jid, clave.id)
return msg?.message || ""
},
msgRetryCounterCache,
version
}
let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true
async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) {
conn.isInit = true
}
if (qr) {
let txt = `❀ *SER BOT - QR*\n✰ Escanea el código QR para convertirte en Sub-Bot Temporal.\n> ◈ Tres Puntitos → Dispositivos Vinculados → Vincular Dispositivo.\n\n➤ *Importante:*\n◈ No es recomendable usar tu cuenta principal.\n◈ Si el Bot principal se reinicia, todos los Sub-Bots se desconectaran.`
let sendQR = await parentw.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), "qrcode.png", txt, m, null, fake)
setTimeout(() => {
parentw.sendMessage(m.chat, { delete: sendQR.key })
}, 30000)
}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
let i = global.conns.indexOf(conn)
if (i < 0) {
return console.log(await creloadHandler(true).catch(console.error))
}
delete global.conns[i]
global.conns.splice(i, 1)
if (code !== DisconnectReason.connectionClosed) {
await parentw.reply(conn.user.jid, "✧ Conexión perdida con el servidor.", m, fake)
}
}
if (global.db.data == null) {
loadDatabase()
}
if (connection == "open") {
conn.isInit = true
global.conns.push(conn)
await parentw.reply(m.chat, args[0] ? '❀ Conectado con éxito al WhatsApp.' : '❀ Vinculaste un Sub-Bot con éxito.', m, fake)
await sleep(5000)
if (args[0]) {
return
}
await parentw.reply(conn.user.jid, "❀ La próxima vez inicia Sesión con tu Token.", m, fake)
await parentw.reply(conn.user.jid, "❀ *TÚ TOKEN DE SUB-BOT*\n" + usedPrefix + command + " " + Buffer.from(fs.readFileSync(`${folderSub}/creds.json`), 'utf-8').toString('base64'), m, fake )
}
}
const timeoutId = setTimeout(() => {
if (!conn.user) {
try {
conn.ws.close()
} catch {}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)
if (i >= 0) {
delete global.conns[i]
global.conns.splice(i, 1)
}
fs.rmdirSync(`./JadiBotSessions/${serbotFolder}`, { recursive: true })
}
}, 30000)
let handler = await import("../handler.js")
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) {
handler = Handler
}
} catch (e) {
console.error(e)
}
if (restatConn) {
try {
conn.ws.close()
} catch {}
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
isInit = true
}
if (!isInit) {
conn.ev.off("messages.upsert", conn.handler)
conn.ev.off("connection.update", conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
conn.handler = handler.handler.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)
conn.ev.on("messages.upsert", conn.handler)
conn.ev.on("connection.update", conn.connectionUpdate)
conn.ev.on("creds.update", conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
serbot()
}
handler.help = ["qr"]
handler.tags = ["jadibot"]
handler.command = ["qr"]
handler.registrado = true
export default handler
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}