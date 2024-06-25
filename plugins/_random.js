import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
global.fkontak = { contextInfo: { mentionedJid: conn.parseMention(global.wm), forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363302120826314@newsletter', serverMessageId: '', newsletterName: global.botname }, externalAdReply: { title: global.wm + '\n' + global.dev, body: '❀ Hola ' + nametag, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: global.icons, thumbnail: global.icons, sourceUrl: channel }}}, { quoted: m }
const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `❀ ¡Hola! Soy ${global.wm}, en que puedo ayudarte hoy?\n✰ Usa */menu* para ver mis comandos.`, m, fake, )
}
if (/^que|Que|q|Q$/i.test(m.text)) {
conn.reply(m.chat, `so 🧀`, m, fkontak, )
}
if (/^a|A$/i.test(m.text)) {
conn.reply(m.chat, `*rrocito* 🍚`, m, fkontak, )
}
return !0;
};
export default handler;
