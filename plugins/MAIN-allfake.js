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

var img1 = fs.readFileSync('./media/imagen1.jpg');
var img2 = fs.readFileSync('./media/imagen2.jpg');
var img3 = fs.readFileSync('./media/imagen3.jpg');
var img4 = fs.readFileSync('./media/imagen4.jpg');
var img5 = fs.readFileSync('./media/imagen5.jpg');
var img6 = fs.readFileSync('./media/imagen6.jpg');
var img7 = fs.readFileSync('./media/imagen7.jpg');
var img8 = fs.readFileSync('./media/imagen8.jpg');
var img9 = fs.readFileSync('./media/imagen9.jpg');
var img10 = fs.readFileSync('./media/imagen10.jpg');
var img11 = fs.readFileSync('./media/imagen11.jpg');
var img12 = fs.readFileSync('./media/imagen12.jpg');
var img13 = fs.readFileSync('./media/imagen13.jpg');
var img14 = fs.readFileSync('./media/imagen14.jpg');
var img15 = fs.readFileSync('./media/imagen15.jpg');
var img16 = fs.readFileSync('./media/imagen16.jpg');
var img17 = fs.readFileSync('./media/imagen17.jpg');
var img18 = fs.readFileSync('./media/imagen18.jpg');
var img19 = fs.readFileSync('./media/imagen19.jpg');
var img20 = fs.readFileSync('./media/imagen10.jpg');
global.icons = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20].getRandom()

var vid1 = fs.readFileSync('./media/vid1.mp4');
var vid2 = fs.readFileSync('./media/vid2.mp4');
var vid3 = fs.readFileSync('./media/vid3.mp4');
var vid4 = fs.readFileSync('./media/vid4.mp4');
var vid5 = fs.readFileSync('./media/vid4.mp4');
var vid6 = fs.readFileSync('./media/vid4.mp4');
var vid7 = fs.readFileSync('./media/vid4.mp4');
var vid8 = fs.readFileSync('./media/vid4.mp4');
global.vid = [vid1, vid2, vid3, vid4].getRandom()

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "120363220559890200@g.us" } : {}) }, message: { orderMessage: { itemCount : 2024, status: 1, surface : 1, message: global.wm, orderTitle: 'Bang', thumbnail: global.icons, sellerJid: '0@s.whatsapp.net' }}}

const moji = (await axios.get(`https://raw.githubusercontent.com/DanixlJs/AlisaKujou-MD/master/src/JSON/emogis.json`)).data
const emoji = await moji[Math.floor(moji.length * Math.random())]

var credit = 'X8KpIFJlcXVlc3RlZCBieSBDdXJpb3NpdHlCb3Rf'
global.cred = Buffer.from(credit, 'base64')

global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")

global.fake = { contextInfo: { mentionedJid: conn.parseMention(global.wm), forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363302120826314@newsletter', serverMessageId: '', newsletterName: `${global.wm}` }, externalAdReply: { title: global.wm, body: global.dev, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: global.icons, thumbnail: global.icons, sourceUrl: global.fakeLink }}}, { quoted: m }
}

export default handler

