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
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  if (chat.antiLink2 && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      const linkThisGroup2 = `https://www.youtube.com/`;
      const linkThisGroup3 = `https://youtu.be/`;
      if (m.text.includes(linkThisGroup)) return !0;
      if (m.text.includes(linkThisGroup2)) return !0;
      if (m.text.includes(linkThisGroup3)) return !0;
    }
    await this.sendMessage(m.chat, {text: `𝔸ℕ𝕋𝕀𝕃𝕀ℕ𝕂: ${user} 𝕞𝕒𝕟𝕕𝕒𝕤𝕥𝕖 𝕦𝕟 𝕖𝕟𝕝𝕒𝕔𝕖 𝕡𝕣𝕠𝕙𝕚𝕓𝕚𝕕𝕠 𝕡𝕠𝕣 𝕝𝕠 𝕢𝕦𝕖 𝕡𝕣𝕠𝕔𝕖𝕤𝕕𝕠 𝕒 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣𝕥𝕖.`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('⧼✦⧽ ℕ𝕠 𝕤𝕠𝕪 𝔸𝕕𝕞𝕚𝕟 𝕡𝕠𝕣 𝕝𝕠 𝕢𝕦𝕖 𝕟𝕠 𝕡𝕦𝕖𝕕𝕠 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣 𝕚𝕟𝕥𝕣𝕦𝕤𝕦𝕤.');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('⧼✦⧽ ℕ𝕠 𝕡𝕦𝕖𝕕𝕠 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣 𝕚𝕟𝕥𝕣𝕦𝕤𝕠𝕤 𝕔𝕠𝕟 𝕞𝕚 𝕔𝕠𝕟𝕗𝕚𝕘𝕦𝕣𝕒𝕔𝕚ó𝕟 𝕒𝕔𝕥𝕦𝕒𝕝.');
  }
  return !0;
}