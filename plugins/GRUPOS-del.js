const handler = async (m, {conn, usedPrefix, command }) => {
  if (!m.quoted) throw `✧ Responde al mensaje que quieras eliminar.`;
  try {
    const delet = m.message.extendedTextMessage.contextInfo.participant;
    const bang = m.message.extendedTextMessage.contextInfo.stanzaId;
    return conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
  } catch {
    return conn.sendMessage(m.chat, {delete: m.quoted.vM.key});
  }
};

handler.help = ['del', 'delete'];
handler.tags = ['grupo'];
handler.command = ['del', 'delete'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
