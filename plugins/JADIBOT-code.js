const { useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, MessageRetryMap, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = await import('@whiskeysockets/baileys');
import moment from 'moment-timezone';
import NodeCache from 'node-cache';
import readline from 'readline';
import qrcode from "qrcode";
import crypto from 'crypto';
import fs from "fs";
import pino from 'pino';
import * as ws from 'ws';
const { CONNECTING } = ws;
import { Boom } from '@hapi/boom';
import { makeWASocket } from '../lib/simple.js';
if (!(global.conns instanceof Array)) global.conns = [];
let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner, isROwner }) => {
if (!global.db.data.settings[_conn.user.jid].modejadibot && !isROwner) {
m.reply('✧ La opción de ser Sub-Bot ha sido desactivado por mi creador.')
return
}
let parent = args[0] && args[0] == 'plz' ? _conn : await global.conn;
if (!((args[0] && args[0] == 'plz') || (await global.conn).user.jid == _conn.user.jid)) {
return m.reply(`✧ Este comando solo puede ser usado en el bot principal.\n> https://wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix}code`);
}
async function serbot() {
let authFolderB = crypto.randomBytes(10).toString('hex').slice(0, 8);
if (!fs.existsSync("./JadiBotSessions/" + authFolderB)) {
fs.mkdirSync("./JadiBotSessions/" + authFolderB, { recursive: true });
}
if (args[0]) {
fs.writeFileSync("./JadiBotSessions/" + authFolderB + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t'));
}
const { state, saveState, saveCreds } = await useMultiFileAuthState(`./JadiBotSessions/${authFolderB}`);
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache();
const { version } = await fetchLatestBaileysVersion();
let phoneNumber = m.sender.split('@')[0];
const methodCodeQR = process.argv.includes("qr");
const methodCode = !!phoneNumber || process.argv.includes("code");
const MethodMobile = process.argv.includes("mobile");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver));
const connectionOptions = {logger: pino({ level: 'silent' }),printQRInTerminal: false,mobile: MethodMobile,browser: ["Ubuntu", "Chrome", "20.0.04"], 
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true,
generateHighQualityLinkPreview: true,
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid);
let msg = await store.loadMessage(jid, clave.id);
return msg?.message || "";
},
msgRetryCounterCache,
msgRetryCounterMap,
defaultQueryTimeoutMs: undefined,
version
};
let conn = makeWASocket(connectionOptions);
if (methodCode && !conn.authState.creds.registered) {
if (!phoneNumber) {
process.exit(0);
}
let cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
if (!Object.keys(PHONENUMBER_MCC).some(v => cleanedNumber.startsWith(v))) {
process.exit(0);
}
setTimeout(async () => {
let codeBot = await conn.requestPairingCode(cleanedNumber);
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot;
let txt = `❀ *SER BOT - CODE*\n✰ Usa éste Código para convertirte en Sub-Bot Temporal.\n> ◈ Tres Puntitos → Dispositivos Vinculados → Vincular Dispositivo → Vincular con el número de teléfono.\n\n➤ *Importante:*\n◈ No es recomendable usar tu cuenta principal.\n◈ Si el Bot principal se reinicia, todos los Sub-Bots se desconectaran.`;
await parent.reply(m.chat, txt, m, fake);
await parent.reply(m.chat, codeBot, m, fake);
rl.close();
}, 3000);
}
conn.isInit = false;
let isInit = true;
async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update;
if (isNewLogin) conn.isInit = true;
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
let i = global.conns.indexOf(conn);
if (i < 0) return console.log(await creloadHandler(true).catch(console.error));
delete global.conns[i];
global.conns.splice(i, 1);
if (code !== DisconnectReason.connectionClosed) { parent.sendMessage(m.chat, { text: "✧ Conexión perdida con el servidor." }, { quoted: m });
}}
if (global.db.data == null) loadDatabase();
if (connection == 'open') {
conn.isInit = true;
global.conns.push(conn);
await parent.reply(m.chat, args[0] ? '❀ Conectado con éxito al WhatsApp.' : '❀ Vinculaste un Sub-Bot con éxito.', m, fake);
await sleep(5000);
if (args[0]) return;
await parent.reply(conn.user.jid, `❀ La próxima inicia sesión con tu Token de Sub-Bot.\n> ✰ Use *${usedPrefix}token* para saber su Token.`, m, fake);
}}
setInterval(async () => {
if (!conn.user) {
try { conn.ws.close(); } catch { }conn.ev.removeAllListeners();
let i = global.conns.indexOf(conn);
if (i < 0) return;
delete global.conns[i];
global.conns.splice(i, 1);
}
}, 60000);
let handler = await import('../handler.js');
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error);
if (Object.keys(Handler || {}).length) handler = Handler;
} catch (e) {
console.error(e);
}
if (restatConn) {
try { conn.ws.close(); } catch { }
conn.ev.removeAllListeners();
conn = makeWASocket(connectionOptions);
isInit = true;
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler);
conn.ev.off('connection.update', conn.connectionUpdate);
conn.ev.off('creds.update', conn.credsUpdate);
}
conn.handler = handler.handler.bind(conn);
conn.connectionUpdate = connectionUpdate.bind(conn);
conn.credsUpdate = saveCreds.bind(conn, true);
conn.ev.on('messages.upsert', conn.handler);
conn.ev.on('connection.update', conn.connectionUpdate);
conn.ev.on('creds.update', conn.credsUpdate);
isInit = false;
return true;
};
creloadHandler(false);
}
serbot();
};
handler.help = ['code'];
handler.tags = ['jadibot'];
handler.command = ['code'];
handler.registrado = true;
export default handler;
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}