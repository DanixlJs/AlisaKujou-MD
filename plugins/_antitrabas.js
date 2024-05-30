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
    if (isAdmin) return m.reply(`⧼✦⧽ 𝔼𝕝 𝕒𝕕𝕞𝕚𝕟𝕚𝕤𝕥𝕣𝕒𝕕𝕠𝕣 @${m.sender.split('@')[0]} 𝕒𝕔𝕒𝕓𝕒 𝕕𝕖 𝕖𝕟𝕧𝕚𝕒𝕣 𝕦𝕟 𝕥𝕖𝕩𝕥𝕠 𝕢𝕦𝕖 𝕔𝕠𝕟𝕥𝕚𝕖𝕟𝕖 𝕞𝕦𝕔𝕙𝕠𝕤 𝕔𝕒𝕣á𝕔𝕥𝕖𝕣𝕖𝕤 -.-!`);
    m.reply(`⧼✦⧽ 𝕊𝕖 𝕕𝕖𝕥𝕖𝕔𝕥𝕠 𝕦𝕟 𝕞𝕖𝕟𝕤𝕒𝕛𝕖 𝕔𝕠𝕟 𝕞𝕦𝕔𝕙𝕠𝕤 𝕔𝕒𝕣𝕒𝕔𝕥𝕖𝕣𝕖𝕤`, `${isBotAdmin ? ' 𝕡𝕣𝕠𝕔𝕖𝕕𝕠 𝕒 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣𝕝𝕠' : ' 𝕡𝕣𝕠𝕔𝕖𝕕𝕠 𝕒 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣𝕝𝕠.'}`);
    if (isBotAdmin && bot.restrict) {
      conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
        	setTimeout(() => {
        	conn.sendMessage(m.chat, {text: `⧼✦⧽ 𝔸ℕ𝕋𝕀 𝕋ℝ𝔸𝔹𝔸𝕊\n${'\n'.repeat(400)}\n→ 𝔼𝕝 ℕú𝕞𝕖𝕣𝕠: wa.me/${m.sender.split('@')[0]}\n→ 𝔸𝕝𝕚𝕒𝕤: ${name}\n→ 𝔸𝕔𝕒𝕓𝕒 𝕕𝕖 𝕖𝕟𝕧𝕚𝕒𝕣 𝕦𝕟 𝕥𝕖𝕩𝕥𝕠 𝕢𝕦𝕖 𝕔𝕠𝕟𝕥𝕚𝕖𝕟𝕖 𝕞𝕦𝕔𝕙𝕠𝕤 𝕔𝕒𝕣𝕒𝕔𝕥𝕖𝕣𝕖𝕤 𝕢𝕦𝕖 𝕡𝕦𝕖𝕕𝕖 𝕠𝕔𝕒𝕤𝕚𝕠𝕟𝕒𝕣 𝕗𝕒𝕝𝕝𝕠𝕤 𝕖𝕟 𝕝𝕠𝕤 𝕕𝕚𝕤𝕡𝕠𝕤𝕚𝕥𝕚𝕧𝕠𝕤.`, mentions: [m.sender]}, {quoted: fakemek});
      }, 0);
      setTimeout(() => {
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }, 1000);
    } else if (!bot.restrict) return m.reply('⧼✦⧽ ℕ𝕠 𝕡𝕦𝕖𝕕𝕠 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣 𝕚𝕟𝕥𝕣𝕦𝕤𝕠𝕤 𝕔𝕠𝕟 𝕞𝕚 𝕔𝕠𝕟𝕗𝕚𝕘𝕦𝕣𝕒𝕔𝕚ó𝕟 𝕒𝕔𝕥𝕦𝕒𝕝.');
  }
  return !0;
}
