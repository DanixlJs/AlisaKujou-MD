import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
if (m.sender === conn.user.jid) return;
  const chat = global.db.data.chats[m.chat];
  
if (/^bot$/i.test(m.text) && !chat.isBanned) {

conn.reply(m.chat, `❀ ¡Hola! Soy ${global.wm}, en que puedo ayudarte hoy?\n✰ Usa */menu* para ver mis comandos.`, m, fake, )

  }
  return !0;
};
export default handler;