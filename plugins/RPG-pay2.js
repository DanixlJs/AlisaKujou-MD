const confirmacion = {};
async function handler(m, { conn, args, usedPrefix, command }) {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  if (confirmacion[m.sender]) {
    return conn.sendMessage(m.chat, { text: '✧ Aun hay una transferencia en proceso, por favor espera un momento.', mentions: [m.sender] }, { quoted: m });
  }
  const user = global.db.data.users[m.sender];
  const usageMessage = `✧ Asegúrate de usarlo de la siguiente manera, Ejemplo:\n> *${usedPrefix + command} 20 @${m.sender.split('@')[0]}*`.trim();
  const amount = parseInt(args[0]);
  if (isNaN(amount) || amount <= 0) {
    return conn.sendMessage(m.chat, { text: usageMessage, mentions: [m.sender] }, { quoted: m });
  }
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[1] ? (args[1].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : '';
  if (!who) {
    return conn.sendMessage(m.chat, { text: '✧ Menciona al usuario al que deseas hacer la transferencia.', mentions: [m.sender] }, { quoted: m });
  }
  if (!(who in global.db.data.users)) {
    return conn.sendMessage(m.chat, { text: `✧ El usuario *${who}* no está en la base de datos.`, mentions: [m.sender] }, { quoted: m });
  }
  if (user.diamantes < amount) {
    return conn.sendMessage(m.chat, { text: `✧ No tienes suficientes Diamantes para transferir.`, mentions: [m.sender] }, { quoted: m });
  }
  const confirmMessage = `❀ *CONFIRMACIÓN*\n✰ ¿Estás seguro de que deseas transferir *${amount}* Diamantes a @${(who || '').replace(/@s\.whatsapp\.net/g, '')}?
◈ Tienes 60 segundos para confirmar

➤ *Escribe:* 
> *si = para confirmar*
> *no = para cancelar*`.trim();
  await conn.sendMessage(m.chat, { text: confirmMessage, mentions: [who] }, { quoted: m });
  confirmacion[m.sender] = {
    sender: m.sender,
    to: who,
    message: m,
    amount,
    timeout: setTimeout(() => {
      conn.sendMessage(m.chat, { text: '✧ Se acabó el tiempo, la transferencia ha sido cancelada.', mentions: [m.sender] }, { quoted: m });
      delete confirmacion[m.sender];
    }, 60 * 1000)
  };
}
handler.before = async (m) => {
  if (m.isBaileys) return;
  if (!(m.sender in confirmacion)) return;
  if (!m.text) return;
  const { timeout, sender, message, to, amount } = confirmacion[m.sender];
  if (m.id === message.id) return;
  const user = global.db.data.users[sender];
  const _user = global.db.data.users[to];
  if (/^No|no$/i.test(m.text)) {
    clearTimeout(timeout);
    delete confirmacion[sender];
    return conn.sendMessage(m.chat, { text: '✧ Transferencia cancelada.', mentions: [m.sender] }, { quoted: m });
  }
  if (/^Si|si$/i.test(m.text)) {
    const previous = user.diamantes;
    const _previous = _user.diamantes;
    user.diamantes -= amount;
    _user.diamantes += amount;
    if (previous > user.diamantes && _previous < _user.diamantes) {
      conn.sendMessage(m.chat, { text: `❀ Se transfirieron correctamente *${amount}* Diamantes a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, mentions: [to] }, { quoted: m });
    } else {
      user.diamantes = previous;
      _user.diamantes = _previous;
      conn.sendMessage(m.chat, { text: `✧ Error al transferir *${amount}* Diamantes a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, mentions: [to] }, { quoted: m });
    }
    clearTimeout(timeout);
    delete confirmacion[sender];
  }
};
handler.help = ['pay2 <cantidad> <@tag>'];
handler.tags = ['rpg'];
handler.command = ['pay2'];
handler.registrado = true;
export default handler;
function isNumber(x) {
  return !isNaN(x);
}
