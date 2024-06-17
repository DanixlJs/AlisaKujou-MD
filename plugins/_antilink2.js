const linkRegex = /https:/i;
export async function before(m, {isAdmin, isBotAdmin, text}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot) return;
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  if (chat.antiLink2 && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const l1 = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(l1)) return !0;
    }
    await this.sendMessage(m.chat, {text: `✧ 「 ${user} 」envió un Link que contiene *https://*, procedo a eliminarlo.`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('✧ Necesito ser Administrador para eliminar intrusos.');
    if (isBotAdmin) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }}}
