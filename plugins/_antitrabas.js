import * as fs from 'fs';

export async function before(m, {conn, isAdmin, isBotAdmin, usedPrefix}) {
if (conn.user.jid) return;
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const delet = m.key.participant;
  const bang = m.key.id;
  const name = await conn.getName(m.sender);
  
  if (chat.antiTraba && m.text.length > 5000) { 
  	
    if (isAdmin) return m.reply(`✧ El Administrador @${m.sender.split('@')[0]} acaba de enviar un mensaje de 5000 Caracteres -.-!`);
    m.reply(`✧ Se detectó un mensaje de muchos caracteres`, `${isBotAdmin ? ' procedo a eliminarlo.' : ' pero necesito administrador para eliminarlo.'}`);
    
    if (!bot.restrict) return m.reply('✧ No puedo eliminar intrusos con mi configuración actual.');
    
    if (isBotAdmin && bot.restrict) {
      conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      setTimeout(() => {
      conn.sendMessage(m.chat, {text: `✧ *ANTI TRABAS*\n${'\n'.repeat(400)}\n> El Número wa.me/${m.sender.split('@')[0]} Alias ${name}, acaba de enviar un mensaje de muchos caracteres que puede ocasionar fallos en los dispositivos.`, mentions: [m.sender]}, {quoted: fakemek});
      }, 0); setTimeout(() => { 
      	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }, 1000);
    }
  }
}
