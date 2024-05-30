const toxicRegex = /puto|puta|estupido|imbecil|mierda|mrd|verga|vrga|maricon/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[mconn.conn.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 3)) await m.reply(`${user.warn == 1 ? `⧼✦⧽ ℍ𝕠𝕝𝕒 @${m.sender.split`@`[0]}` : `⧼✦⧽ @${m.sender.split`@`[0]}`}, 𝕕𝕖𝕔𝕚𝕣 𝕝𝕒 𝕡𝕒𝕝𝕒𝕓𝕣𝕒 "${isToxic}" 𝕖𝕤𝕥á 𝕡𝕣𝕠𝕙𝕚𝕓𝕚𝕕𝕠 𝕖𝕟 𝕖𝕤𝕥𝕖 𝕘𝕣𝕦𝕡𝕠.\n→ 𝔸𝕕𝕧𝕖𝕣𝕥𝕖𝕟𝕔𝕚𝕒: ${user.warn}/3.` + '*', false, {mentions: [m.sender]});
  }

  if (user.warn >= 3) {
    user.warn = 0;
    await m.reply(`ℍ𝕠𝕝𝕒 @${m.sender.split`@`[0]}, 𝕤𝕦𝕡𝕖𝕣𝕒𝕤𝕥𝕖 𝕝𝕒𝕤 𝟝 𝕒𝕕𝕧𝕖𝕣𝕥𝕖𝕟𝕔𝕚𝕒𝕤 𝕡𝕠𝕣 𝕝𝕠 𝕢𝕦𝕖 𝕤𝕖𝕣á𝕤 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕕𝕠 𝕕𝕖 𝕖𝕤𝕥𝕖 𝕘𝕣𝕦𝕡𝕠 𝕡𝕠𝕣 𝕥𝕦 𝕔𝕠𝕞𝕡𝕠𝕣𝕥𝕒𝕞𝕚𝕖𝕟𝕥𝕠 𝕚𝕟𝕒𝕕𝕖𝕔𝕦𝕒𝕕𝕠.`, false, {mentions: [m.sender]});
    user.banned = true;
    await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
  }
  return !1;
}
