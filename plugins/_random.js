import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `❀ ¡Hola! Soy ${global.wm}, en que puedo ayudarte hoy?\n✰ Usa */menu* para ver mis comandos.`, m, fake, )
}
if (/^que|Que|q|Q$/i.test(m.text)) {
conn.reply(m.chat, `*so* 🧀`, m, fake, )
}
if (/^a|A$/i.test(m.text)) {
conn.reply(m.chat, `*rrocito* 🍚`, m, fake, )
}
return !0;
};
export default handler;
