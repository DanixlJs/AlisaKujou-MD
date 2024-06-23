import * as fs from 'fs';
export async function before(m, {conn, isAdmin, isBotAdmin, usedPrefix}) {
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const delet = m.key.participant;
  const bang = m.key.id;
  const name = await conn.getName(m.sender);
  if (chat.antiTraba && m.text.length > 5000) { 
    if (isAdmin) return conn.reply(`✧ El Administrador @${m.sender.replace('@s.whatsapp.net', '').trim()} acaba de enviar un mensaje de 5000 Caracteres -_-!`, m, { mentions: [m.sender]} );
    conn.reply(m.chat, `✧ Se detectó un mensaje de muchos caracteres`, `${isBotAdmin ? ' procedo a eliminarlo.' : ' pero necesito administrador para eliminarlo.'}`, m, fake,);
    if (isBotAdmin) {
      conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      setTimeout(() => {
      conn.sendMessage(m.chat, {text: `✧ *ANTI TRABAS*\n${'\n'.repeat(400)}\n> El Número @${m.sender.replace('@s.whatsapp.net', '').trim()}, Alias *{name}*, acaba de enviar un mensaje de muchos caracteres que puede ocasionar fallos en los dispositivos.`, mentions: [m.sender]}, {quoted: fakemek});
      }, 0); setTimeout(() => { 
      	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }, 1000);
    }
  }
}