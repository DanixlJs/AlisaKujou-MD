export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`⧼✿⧽ 𝔻𝕖𝕛𝕒𝕤𝕥𝕖 𝕕𝕖 𝕖𝕤𝕥𝕒𝕣 𝔸𝕗𝕜 ${user.afkReason ? '\n→ ℝ𝕒𝕫𝕠𝕟: ' + user.afkReason : ''}\n◈ 𝕋𝕚𝕖𝕞𝕡𝕠: ${(new Date - user.afk).toTimeString()}`.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`⧼✦⧽ 𝔼𝕤𝕥𝕖 𝕦𝕤𝕦𝕒𝕣𝕚𝕠 𝕖𝕤𝕥𝕒 𝔸𝕗𝕜, 𝕟𝕠 𝕝𝕠 𝕖𝕥𝕚𝕢𝕦𝕖𝕥𝕖𝕤.`.trim());
  }
  return true;
}
