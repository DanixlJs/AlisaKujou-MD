import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
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
console.log(`Error: ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender

global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

var l1 = 'https://youtube.com/';
var l2 = 'https://whatsapp.com/';
var l3 = 'https://tiktok.com/';
var l4 = 'https://instagram.com/';
global.fakeLink = [l1, l2, l3, l4].getRandom()

var img1 = fs.readFileSync('./media/image1.jpg');
var img2 = fs.readFileSync('./media/image2.jpg');
var img3 = fs.readFileSync('./media/image3.jpg');
var img4 = fs.readFileSync('./media/image4.jpg');
var img5 = fs.readFileSync('./media/image5.jpg');
var img6 = fs.readFileSync('./media/image6.jpg');
var img7 = fs.readFileSync('./media/image7.jpg');
global.icons = [img1, img2, img3, img4, img5, img6, img7].getRandom()
var vid1 = fs.readFileSync('./media/vid1.mp4');
var vid2 = fs.readFileSync('./media/vid2.mp4');
var vid3 = fs.readFileSync('./media/vid3.mp4');
global.vid = [vid1, vid2, vid3].getRandom()

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "120363220559890200@g.us" } : {}) }, message: { orderMessage: { itemCount : 2024, status: 1, surface : 1, message: global.wm, orderTitle: 'Bang', thumbnail: global.icons, sellerJid: '0@s.whatsapp.net' }}}

const moji = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/YartexBot-MD/main/storage/juegos/emojis.json`)).data
const emoji = await moji[Math.floor(moji.length * Math.random())]

var credit = 'X8KpIFJlcXVlc3RlZCBieSBDdXJpb3NpdHlCb3Rf'
global.cred = Buffer.from(credit, 'base64')

global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")


global.fake = { contextInfo: { mentionedJid: conn.parseMention(global.wm), forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363302120826314@newsletter', serverMessageId: '', newsletterName: '💙RemChamMD - Anuncios💙' }, externalAdReply: { title: global.wm, body: `Hola ` + nombre, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: global.icons, thumbnail: global.icons, sourceUrl: global.fakeLink }}}, { quoted: m }
}

export default handler

