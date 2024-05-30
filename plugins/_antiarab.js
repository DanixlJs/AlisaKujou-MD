const handler = (m) => m;
handler.before = async function(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (isBotAdmin && chat.antiArab2 && !isAdmin && !isOwner && !isROwner && bot.restrict) {
    if (m.sender.startsWith('212' || '212')) {
      m.reply(`⧼✦⧽ 𝔼𝕟 𝕖𝕤𝕥𝕖 𝕘𝕣𝕦𝕡𝕠 𝕟𝕠 𝕤𝕖 𝕡𝕖𝕣𝕞𝕚𝕥𝕖𝕟 𝕟ú𝕞𝕖𝕣𝕠𝕤 ℝ𝕒𝕣𝕠𝕤 𝕠 𝔸𝕣𝕒𝕓𝕖𝕤 𝕡𝕠𝕣 𝕝𝕠 𝕢𝕦𝕖 𝕤𝕖𝕣á𝕤 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕕𝕠.`)
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('265' || '265')) {
      m.reply(`⧼✦⧽ 𝔼𝕟 𝕖𝕤𝕥𝕖 𝕘𝕣𝕦𝕡𝕠 𝕟𝕠 𝕤𝕖 𝕡𝕖𝕣𝕞𝕚𝕥𝕖𝕟 𝕟ú𝕞𝕖𝕣𝕠𝕤 ℝ𝕒𝕣𝕠𝕤 𝕠 𝔸𝕣𝕒𝕓𝕖𝕤 𝕡𝕠𝕣 𝕝𝕠 𝕢𝕦𝕖 𝕤𝕖𝕣á𝕤 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕕𝕠.`)
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('92' || '92')) {
      m.reply(`⧼✦⧽ 𝔼𝕟 𝕖𝕤𝕥𝕖 𝕘𝕣𝕦𝕡𝕠 𝕟𝕠 𝕤𝕖 𝕡𝕖𝕣𝕞𝕚𝕥𝕖𝕟 𝕟ú𝕞𝕖𝕣𝕠𝕤 ℝ𝕒𝕣𝕠𝕤 𝕠 𝔸𝕣𝕒𝕓𝕖𝕤 𝕡𝕠𝕣 𝕝𝕠 𝕢𝕦𝕖 𝕤𝕖𝕣á𝕤 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕕𝕠.`)
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }
  }
};
export default handler;
