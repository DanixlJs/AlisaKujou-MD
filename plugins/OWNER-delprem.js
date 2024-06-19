let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) return m.reply(`✧ Etiqueta a un usuario.`);
  
  let [mentionedJid] = m.mentionedJid || [];
  if (!mentionedJid) return m.reply('✧ Por favor, menciona a un usuario.');

  if (!global.db.data.users[mentionedJid]) global.db.data.users[mentionedJid] = {};
  
  global.db.data.users[mentionedJid].premium = false;
  global.db.data.users[mentionedJid].premiumTime = 0;
  let tag = mentionedJid.replace('@s.whatsapp.net', '');

  conn.reply(m.chat, `✧ *@${tag}* ya no es un usuario premium.`, m, { mentions: [mentionedJid]} );
};

handler.help = ['delprem <@tag>'];
handler.tags = ['owner'];
handler.command = ['delprem'];
handler.rowner = true;
handler.registrado = true;

export default handler;
