export async function before(m, {conn, isAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('contacto')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner) {
    await m.reply(`✧ Está prohibido escribir en mi Privado, únete al grupo oficial para usar el Bot.\n\n> → [${global.gp}]`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}