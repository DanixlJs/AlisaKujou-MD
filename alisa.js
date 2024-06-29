console.log('\n➤ Archivo en Ejecución: main.js')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';
// IMPORTACIONES
import './config.js';
import './api.js';
import {createRequire} from 'module';
import path, {join} from 'path';
import {fileURLToPath, pathToFileURL} from 'url';
import {platform} from 'process';
import * as ws from 'ws';
import {readdirSync, statSync, unlinkSync, existsSync, readFileSync, rmSync, watch} from 'fs';
import yargs from 'yargs';
import {spawn} from 'child_process';
import lodash from 'lodash';
import chalk from 'chalk';
import syntaxerror from 'syntax-error';
import {tmpdir} from 'os';
import {format} from 'util';
import P from 'pino';
import pino from 'pino';
import Pino from 'pino';
import {Boom} from '@hapi/boom';
import {makeWASocket, protoType, serialize} from './lib/simple.js';
import {Low, JSONFile} from 'lowdb';
import {mongoDB, mongoDBV2} from './lib/mongoDB.js';
import store from './lib/store.js';
const {proto} = (await import('@whiskeysockets/baileys')).default;
const {DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC} = await import('@whiskeysockets/baileys');
import readline from 'readline';
import NodeCache from 'node-cache';
const {CONNECTING} = ws;
const {chain} = lodash;
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

// UWU
protoType();
serialize();
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') {
return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString();
}; global.__dirname = function dirname(pathURL) {
return path.dirname(global.__filename(pathURL, true));
}; global.__require = function require(dir = import.meta.url) {
return createRequire(dir);
};
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');
global.timestamp = {start: new Date};
global.videoList = [];
global.videoListXXX = [];
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`));
global.DATABASE = global.db; 
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) {
return new Promise((resolve) => setInterval(async function() {
if (!global.db.READ) {
clearInterval(this);
resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
}
}, 1 * 1000));
}
if (global.db.data !== null) return;
global.db.READ = true;
await global.db.read().catch(console.error);
global.db.READ = null;
global.db.data = {
users: {},
chats: {},
stats: {},
msgs: {},
sticker: {},
settings: {},
...(global.db.data || {}),
 };
 global.db.chain = chain(global.db.data);
};
loadDatabase();
global.chatgpt = new Low(new JSONFile(path.join(__dirname, '/db/chatgpt.json')));
global.loadChatgptDB = async function loadChatgptDB() {
if (global.chatgpt.READ) {
return new Promise((resolve) =>
setInterval(async function() {
if (!global.chatgpt.READ) {
clearInterval(this);
resolve( global.chatgpt.data === null ? global.loadChatgptDB() : global.chatgpt.data );
}
}, 1 * 1000));
}
if (global.chatgpt.data !== null) return;
global.chatgpt.READ = true;
await global.chatgpt.read().catch(console.error);
global.chatgpt.READ = null;
global.chatgpt.data = {
users: {},
...(global.chatgpt.data || {}),
};
global.chatgpt.chain = lodash.chain(global.chatgpt.data);
};
loadChatgptDB();
global.authFile = `Session`;
const {state, saveState, saveCreds} = await useMultiFileAuthState(global.authFile);
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = global.botnumber
const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")
const colores = chalk.bgMagenta.white
const opcionQR = chalk.bold.green
const opcionTexto = chalk.bold.cyan
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))
let opcion
if (methodCodeQR) {
opcion = '1'
}
if (!methodCodeQR && !methodCode && !fs.existsSync(`./${authFile}/creds.json`)) {
do {
opcion = await question(colores('❀ OPCIONES DE CONECCIÓN:\n') + opcionQR('1- Con código QR\n') + opcionTexto('2- Con código de 8 dígitos\n\n'))
if (!/^[1-2]$/.test(opcion)) {
console.log('✧ Por favor, seleccione solo 1 o 2.\n')
}} while (opcion !== '1' && opcion !== '2' || fs.existsSync(`./${authFile}/creds.json`))
}
const filterStrings = [
"Q2xvc2luZyBzdGFsZSBvcGVu", // "Closing stable open"
"Q2xvc2luZyBvcGVuIHNlc3Npb24=", // "Closing open session"
"RmFpbGVkIHRvIGRlY3J5cHQ=", // "Failed to decrypt"
"U2Vzc2lvbiBlcnJvcg==", // "Session error"
"RXJyb3I6IEJhZCBNQUM=", // "Error: Bad MAC" 
"RGVjcnlwdGVkIG1lc3NhZ2U=" // "Decrypted message" 
]
console.info = () => {} 
console.debug = () => {} 
['log', 'warn', 'error'].forEach(methodName => redefineConsoleMethod(methodName, filterStrings))
const connectionOptions = {
logger: pino({ level: 'silent' }),
printQRInTerminal: opcion == '1' ? true : methodCodeQR ? true : false,
mobile: MethodMobile, 
browser: opcion == '1' ? ['AlisaKujouMD', 'Safari', '2.0.0'] : methodCodeQR ? ['AlisaKujouMD', 'Safari', '2.0.0'] : ['Ubuntu', 'Chrome', '110.0.5585.95'],
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
},
markOnlineOnConnect: true, 
generateHighQualityLinkPreview: true, 
getMessage: async (clave) => {
let jid = jidNormalizedUser(clave.remoteJid)
let msg = await store.loadMessage(jid, clave.id)
return msg?.message || ""
},
msgRetryCounterCache,
msgRetryCounterMap,
defaultQueryTimeoutMs: undefined,   
version
}
global.conn = makeWASocket(connectionOptions);
if (!fs.existsSync(`./${authFile}/creds.json`)) {
if (opcion === '2' || methodCode) {
opcion = '2'
if (!conn.authState.creds.registered) {  
if (MethodMobile) throw new Error('✧ No se puede usar un código de emparejamiento con la API móvil.')
let numeroTelefono
if (!!phoneNumber) {
numeroTelefono = phoneNumber.replace(/[^0-9]/g, '')
if (!Object.keys(PHONENUMBER_MCC).some(v => numeroTelefono.startsWith(v))) {
console.log(chalk.bgBlack(chalk.bold.redBright("✧ Comience con el código de país de su número de WhatsApp, Ejemplo: +595983xxxxxx\n")))
process.exit(0)
}} else {
while (true) {
numeroTelefono = await question(chalk.bgBlack(chalk.bold.yellowBright('✧ Ingresa el número que será bot\nPor ejemplo: +595983xxxxxx\n')))
numeroTelefono = numeroTelefono.replace(/[^0-9]/g, '')
if (numeroTelefono.match(/^\d+$/) && Object.keys(PHONENUMBER_MCC).some(v => numeroTelefono.startsWith(v))) {
break 
} else {
console.log(chalk.bgBlack(chalk.bold.redBright("✧ Por favor, escriba su número de WhatsApp.\nEjemplo: +595983xxxxxx\n")))
}}
rl.close()  
} 

setTimeout(async () => {
let codigo = await conn.requestPairingCode(numeroTelefono)
codigo = codigo?.match(/.{1,4}/g)?.join("-") || codigo
console.log(chalk.black(chalk.bgGreen(`❀ Código de Vinculación: `)), chalk.black(chalk.white(codigo)))
}, 3000)
}}
}
conn.isInit = false;
conn.well = false;
conn.logger.info(`❀ Cargando, espere un momento.\n`);
if (!opts['test']) {
if (global.db) {
setInterval(async () => {
if (global.db.data) await global.db.write();
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', 'JadiBotSessions'], tmp.forEach((filename) => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])));
}, 30 * 1000);
}
}
if (opts['server']) (await import('./server.js')).default(global.conn, PORT);
function clearTmp() {
const tmp = [join(__dirname, './tmp')];
const filename = [];
tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
return filename.map((file) => {
const stats = statSync(file);
if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file); 
return false;
});
}
function purgeSession() {
let prekey = []
let directorio = readdirSync("./Session")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-') 
})
prekey = [...prekey, ...filesFolderPreKeys]
filesFolderPreKeys.forEach(files => {
unlinkSync(`./Session/${files}`)
})
} 
function purgeSessionSB() {
try {
let listaDirectorios = readdirSync('./JadiBotSessions/');
let SBprekey = []
listaDirectorios.forEach(directorio => {
if (statSync(`./JadiBotSessions/${directorio}`).isDirectory()) {
let DSBPreKeys = readdirSync(`./JadiBotSessions/${directorio}`).filter(fileInDir => {
return fileInDir.startsWith('pre-key-') 
})
SBprekey = [...SBprekey, ...DSBPreKeys]
DSBPreKeys.forEach(fileInDir => {
unlinkSync(`./JadiBotSessions/${directorio}/${fileInDir}`)
})
}
})
if (SBprekey.length === 0) return; 
} catch (err) {
console.log(chalk.bold.red(`✧ Algo salio mal durante la eliminación, archivos no eliminados`))
}}
function purgeOldFiles() {
const directories = ['./Session/', './JadiBotSessions/']
const oneHourAgo = Date.now() - (60 * 60 * 1000)
directories.forEach(dir => {
readdirSync(dir, (err, files) => {
if (err) throw err
files.forEach(file => {
const filePath = path.join(dir, file)
stat(filePath, (err, stats) => {
if (err) throw err;
if (stats.isFile() && stats.mtimeMs < oneHourAgo && file !== 'creds.json') { 
unlinkSync(filePath, err => {  
if (err) throw err
console.log(chalk.bold.green(`❀ Archivo ${file} borrado con éxito`))
})
} else { 
console.log(chalk.bold.red(`✧ Archivo ${file} no borrado` + err))
} }) }) }) })
}
async function connectionUpdate(update) {
const {connection, lastDisconnect, isNewLogin} = update;
global.stopped = connection;
if (isNewLogin) conn.isInit = true;
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
await global.reloadHandler(true).catch(console.error);
global.timestamp.connect = new Date;
}
if (global.db.data == null) loadDatabase();
if (update.qr != 0 && update.qr != undefined || methodCodeQR) {
if (opcion == '1' || methodCodeQR) {
console.log(chalk.yellow('╭───────────────────╼\n│❀ Escanea el código para conectarte.\n╰───────────────────╼'));
}}
if (connection == 'open') {
console.log(chalk.bold.cyan('╭───────────────────╼\n│❀ Conección Exitosa al WhatsApp.\n╰───────────────────╼'))
}
let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
if (reason == 405) {
await fs.unlinkSync("./Session/" + "creds.json")
console.log(chalk.bold.redBright(`✧ Conexión reemplazada, por favor espere un momento me voy a reiniciar.\nSi aparece error vuelve a iniciar con: npm start`)) 
process.send('reset')}
if (connection === 'close') {
if (reason === DisconnectReason.badSession) {
conn.logger.error(`✧ Sesión incorrecta, por favor elimina la carpeta ${global.authFile} y escanea nuevamente.`);
} else if (reason === DisconnectReason.connectionClosed) {
conn.logger.warn(`✧ Conexión cerrada, reconectando.`);
await global.reloadHandler(true).catch(console.error);
} else if (reason === DisconnectReason.connectionLost) {
conn.logger.warn(`✧ Conexión perdida con el servidor, reconectando.`);
await global.reloadHandler(true).catch(console.error);
} else if (reason === DisconnectReason.connectionReplaced) {
conn.logger.error(`✧ Conexión reemplazada, se ha abierto otra nueva sesión, por favor, cierra la sesión actual primero.`);
} else if (reason === DisconnectReason.loggedOut) {
conn.logger.error(`✧ Conexion cerrada, por favor elimina la carpeta ${global.authFile} y escanea nuevamente.`);
} else if (reason === DisconnectReason.restartRequired) {
conn.logger.info(`✧ Reinicio necesario, reinicie el servidor si presenta algún problema.`);
await global.reloadHandler(true).catch(console.error);
} else if (reason === DisconnectReason.timedOut) {
conn.logger.warn(`✧ Tiempo de conexión agotado, reconectando.`);
await global.reloadHandler(true).catch(console.error);
} else {
conn.logger.warn(`✧ Razón de desconexión desconocida. ${reason || ''}: ${connection || ''}`);
await global.reloadHandler(true).catch(console.error);
}
}}
process.on('uncaughtException', console.error);
let isInit = true;
let handler = await import('./handler.js');
global.reloadHandler = async function(restatConn) {
try {
const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error);
if (Object.keys(Handler || {}).length) handler = Handler;
} catch (e) {
console.error(e);
}
if (restatConn) {
const oldChats = global.conn.chats;
try {
global.conn.ws.close();
} catch { }
conn.ev.removeAllListeners();
global.conn = makeWASocket(connectionOptions, {chats: oldChats});
isInit = true;
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler);
conn.ev.off('group-participants.update', conn.participantsUpdate);
conn.ev.off('groups.update', conn.groupsUpdate);
conn.ev.off('message.delete', conn.onDelete);
conn.ev.off('call', conn.onCall);
conn.ev.off('connection.update', conn.connectionUpdate);
conn.ev.off('creds.update', conn.credsUpdate);
}
conn.welcome = '╭───────────────────╼\n│ 「 @user 」\n│ᰔᩚ 𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚\n│➥ @subject\n│\n│✰ Usa */menu* para ver mis comandos.\n│\n│➤ 𝐍𝐨𝐭𝐚: Lee la descripción del grupo para evitar inconvenientes.\n╰───────────────────╼'
conn.bye = '╭───────────────────╼\n│➽ 𝐒𝐞 𝐧𝐨𝐬 𝐟𝐮𝐞 𝐮𝐧 𝐔𝐬𝐮𝐚𝐫𝐢𝐨\n│ 「 @user 」\n│Ya no forma parte del grupo.\n│\n│➤ Esperemos que vuelva pronto.\n╰───────────────────╼'
conn.spromote = '❀ 「 @user 」 𝐚𝐡𝐨𝐫𝐚 𝐞𝐬 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.'
conn.sdemote = '❀ 「 @user 」 𝐲𝐚 𝐧𝐨 𝐞𝐬 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.'
conn.sDesc = '❀ 𝐋𝐞𝐚𝐧 𝐥𝐚 𝐧𝐮𝐞𝐯𝐚 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨𝐧 𝐝𝐞𝐥 𝐆𝐫𝐮𝐩𝐨.\n\n@desc'
conn.sSubject = '❀ 𝐒𝐞 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐨 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐆𝐫𝐮𝐩𝐨 𝐚\n✰ @subject'
conn.sIcon = '❀ 𝐒𝐞 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐨 𝐥𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐝𝐞𝐥 𝐆𝐫𝐮𝐩𝐨.'
conn.sRevoke = '❀ 𝐋𝐢𝐧𝐤 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐝𝐨 𝐚\n> [@revoke]'
conn.handler = handler.handler.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
conn.onDelete = handler.deleteUpdate.bind(global.conn);
conn.onCall = handler.callUpdate.bind(global.conn);
conn.connectionUpdate = connectionUpdate.bind(global.conn);
conn.credsUpdate = saveCreds.bind(global.conn, true);
const currentDateTime = new Date();
const messageDateTime = new Date(conn.ev);
if (currentDateTime >= messageDateTime) {
const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0]);
} else {
const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0]);
}
conn.ev.on('messages.upsert', conn.handler);
conn.ev.on('group-participants.update', conn.participantsUpdate);
conn.ev.on('groups.update', conn.groupsUpdate);
conn.ev.on('message.delete', conn.onDelete);
conn.ev.on('call', conn.onCall);
conn.ev.on('connection.update', conn.connectionUpdate);
conn.ev.on('creds.update', conn.credsUpdate);
isInit = false;
return true;
};
const pluginFolder = global.__dirname(join(__dirname, './plugins/index'));
const pluginFilter = (filename) => /\.js$/.test(filename);
global.plugins = {};
async function filesInit() {
for (const filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
const file = global.__filename(join(pluginFolder, filename));
const module = await import(file);
global.plugins[filename] = module.default || module;
} catch (e) {
conn.logger.error(e);
delete global.plugins[filename];
}
}
}
filesInit().then((_) => Object.keys(global.plugins)).catch(console.error);
global.reload = async (_ev, filename) => {
if (pluginFilter(filename)) {
const dir = global.__filename(join(pluginFolder, filename), true);
if (filename in global.plugins) {
if (existsSync(dir)) conn.logger.info(`❀ Plugin Actualizado ⪼ '${filename}'`);
else {
conn.logger.warn(`✧ Plugin Eliminado ⪼ '${filename}'`);
return delete global.plugins[filename];
}
} else conn.logger.info(`❀ Nuevo Plugin ⪼ '${filename}'`);
const err = syntaxerror(readFileSync(dir), filename, {
sourceType: 'module',
allowAwaitOutsideFunction: true,
});
if (err) conn.logger.error(`✧ Error de Syntaxis  en ⪼ '${filename}'\n${format(err)}`);
else {
try {
const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`));
global.plugins[filename] = module.default || module;
} catch (e) {
conn.logger.error(`✧ Error en el Plugin '${filename}\n${format(e)}'`);
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)));
}
}
}
};
function redefineConsoleMethod(methodName, filterStrings) {
const originalConsoleMethod = console[methodName]
console[methodName] = function() {
const message = arguments[0]
if (typeof message === 'string' && filterStrings.some(filterString => message.includes(atob(filterString)))) {
arguments[0] = ""
}
originalConsoleMethod.apply(console, arguments)
}};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
const test = await Promise.all([
spawn('ffmpeg'),
spawn('ffprobe'),
spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
spawn('convert'),
spawn('magick'),
spawn('gm'),
spawn('find', ['--version']),
].map((p) => {
return Promise.race([
new Promise((resolve) => {
p.on('close', (code) => {
resolve(code !== 127);
});
}),
new Promise((resolve) => {
p.on('error', (_) => resolve(false));
})]);
}));
const [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test;
const s = global.support = {ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find};
Object.freeze(global.support);
}
setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return;
const a = await clearTmp();
console.log(chalk.greenBright(`\n╭───────────────────╼\n│❀ Archivo no necesario eliminado.\n╰───────────────────╼`));
}, 180000);
setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return;
await purgeSession();
console.log(chalk.greenBright(`\n╭───────────────────╼\n│❀ Archivo no necesario eliminado.\n╰───────────────────╼`));
}, 1000 * 60 * 60);
setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return;
await purgeSessionSB();
console.log(chalk.greenBright(`\n╭───────────────────╼\n│❀ Archivo no necesario eliminado.\n╰───────────────────╼`));
}, 1000 * 60 * 60);
setInterval(async () => {
if (stopped === 'close' || !conn || !conn.user) return;
await purgeOldFiles();
console.log(chalk.greenBright(`\n╭───────────────────╼\n│❀ Archivo no necesario eliminado.\n╰───────────────────╼`));
}, 180000)
_quickTest()
.then()
.catch(console.error)
