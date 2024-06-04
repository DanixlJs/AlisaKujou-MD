export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`❀ *DEJASTE DE ESTAR AFK* ${user.afkReason ? '\n◈ *Razón ⪼* ' + user.afkReason : ''}\n◈ *Tiempo ⪼* ${(new Date - user.afk).toTimeString()}`.trim());
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
    m.reply(`✧ Esté usuario está *AFK*, no lo etiquetes.`.trim());
  }
  return true;
}
