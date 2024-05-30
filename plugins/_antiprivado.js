export async function before(m, {conn, isAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('contacto')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner) {
    await m.reply(`⧼✦⧽ 𝔸𝕥𝕖𝕟𝕔𝕚𝕠𝕟, 𝕖𝕤𝕥𝕒 𝕡𝕣𝕠𝕙𝕚𝕓𝕚𝕕𝕠 𝕖𝕤𝕔𝕣𝕚𝕓𝕚𝕣 𝕒𝕝 𝕡𝕣𝕚𝕧𝕒𝕕𝕠 𝕕𝕖𝕝 𝔹𝕠𝕥, 𝕤𝕚 𝕢𝕦𝕚𝕖𝕣𝕖𝕤 𝕦𝕤𝕒𝕣 𝕖𝕝 𝔹𝕠𝕥u𝕟𝕖𝕥𝕖 𝕒𝕝 𝕘𝕣𝕦𝕡𝕠 𝕠𝕗𝕚𝕔𝕚𝕒𝕝.\n\n→ *[${global.gp}]*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}