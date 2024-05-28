import * as fs from 'fs';

export async function before(m, {conn, isAdmin, isBotAdmin, usedPrefix}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const delet = m.key.participant;
  const bang = m.key.id;
  const name = await conn.getName(m.sender);
  if (chat.antiTraba && m.text.length > 5000) { 
    if (isAdmin) return m.reply(`El administrador @${m.sender.split('@')[0]} acaba de enviar un texto que contiene muchos carácteres -.-!`);
    m.reply(`Se detectó un mensaje con muchos carácteres`, `${isBotAdmin ? ' procedo a eliminarlo' : ' pero noo soy administrador, no puedo hacer nada.'}`);
    if (isBotAdmin && bot.restrict) {
      conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
        	setTimeout(() => {
        	conn.sendMessage(m.chat, {text: `- *ANTI TRABAS*\n${'\n'.repeat(400)}\n- *El Número:* wa.me/${m.sender.split('@')[0]}\n- *Alias:* ${name}\n> Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`, mentions: [m.sender]}, {quoted: fakemek});
      }, 0);
      setTimeout(() => {
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }, 1000);
    } else if (!bot.restrict) return m.reply('No puedo eliminar intrusos con mi configuración actual.');
  }
  return !0;
}
