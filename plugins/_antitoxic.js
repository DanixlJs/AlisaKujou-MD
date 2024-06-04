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
    if (!(user.warn >= 3)) await m.reply(`${user.warn == 1 ? `✧ Hola @${m.sender.split`@`[0]}` : `✧ Hola @${m.sender.split`@`[0]}`}, decir la palabra "${isToxic}" esta prohibido.\n> → *Advertencia ⪼* ${user.warn}/3.` + '*', false, {mentions: [m.sender]});
  }

  if (user.warn >= 3) {
    user.warn = 0;
    await m.reply(`✧ @${m.sender.split`@`[0]}, superaste las 3 advertencias por lo que seras eliminado por tu comportamiento inadecuado.`, false, {mentions: [m.sender]});
    user.banned = true;
    await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
  }
  return !1;
}
