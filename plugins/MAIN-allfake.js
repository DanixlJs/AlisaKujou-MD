import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg
var handler = m => m
handler.all = async function (m) {
global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`✧ Error: ${e}`)
}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
var l1 = 'https://youtube.com/';
var l2 = 'https://whatsapp.com/';
var l3 = 'https://tiktok.com/';
var l4 = 'https://instagram.com/';
var l5 = 'https://facebook.com/';
var l6 = 'https://github.com/';
global.fakeLink = [l1, l2, l3, l4, l5, l6].getRandom()
global.canales = [channel, channel2].getRandom()
let bot = global.db.data.settings[this.user.jid];
global.botname = bot.botname;
global.wm = bot.botwm;
global.botcoins = bot.botcoins;
global.dev = '「</>」𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 ● 👨‍💻DanixlJs';
global.vs = '2.0.0';
global.packname = 'ᰔᩚ 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐛𝐲';
global.author = `${global.botname} ᰔᩚ`;
global.botcommandcount = bot.botcommandCount;
let category = "imagen"
 const dbPath = './media/database/db.json'
  const dbData = JSON.parse(fs.readFileSync(dbPath))
  const randomIndex = Math.floor(Math.random() * dbData.links[category].length)
  const randomImagen = dbData.links[category][randomIndex]
  const response = await fetch(randomImagen)
  const rimg = await response.buffer()
  global.icons = rimg
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "120363220559890200@g.us" } : {}) }, message: { orderMessage: { itemCount : 2024, status: 1, surface : 1, message: global.wm, orderTitle: 'Bang', thumbnail: global.icons, sellerJid: '0@s.whatsapp.net' }}}
var credit = 'X8KpIFJlcXVlc3RlZCBieSBDdXJpb3NpdHlCb3Rf'
global.cred = Buffer.from(credit, 'base64')
let canalId = ["120363302120826314@newsletter", "120363263466636910@newsletter"]
let canalNombre = [`${global.wm}`, "♋︎ 𝐃𝙴𝚅 𝐖𝙾𝚁𝙻𝙳 - 𝐓𝙴𝙰𝙼 ♋︎"]
async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalId.length)
let id = canalId[randomIndex]
let nombre = canalNombre[randomIndex]
return { id, nombre }
} 
let randomChannel = await getRandomChannel()
global.fake = { contextInfo: { mentionedJid: conn.parseMention(global.wm), forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: randomChannel.id, serverMessageId: '', newsletterName: randomChannel.nombre }, externalAdReply: { title: global.wm, body: global.dev, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: global.icons, thumbnail: global.icons, sourceUrl: global.fakeLink }}}, { quoted: m }
}
export default handler
