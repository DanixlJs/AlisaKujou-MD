const handler = async (m, {conn, participants, groupMetadata}) => {

  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';

  const {antiToxic, reaction, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];

  const groupAdmins = participants.filter((p) => p.admin);

  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');

  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';

  const text = `✰ *𝕀𝕟𝕗𝕠𝕣𝕞𝕒𝕔𝕚𝕠𝕟 𝕕𝕖𝕝 𝔾𝕣𝕦𝕡𝕠*
◈ 𝕀𝔻:
→ ${groupMetadata.id}
◈ ℕ𝕠𝕞𝕓𝕣𝕖:
→ ${groupMetadata.subject}
𝔻𝕖𝕤𝕔𝕣𝕚𝕡𝕔𝕚𝕠𝕟:
→ ${groupMetadata.desc?.toString() || 'Sin Descripción'}
𝕄𝕚𝕖𝕞𝕓𝕣𝕠𝕤:
→ ${participants.length} Participantes
ℂ𝕣𝕖𝕒𝕕𝕠𝕣 𝕕𝕖𝕝 𝔾𝕣𝕦𝕡𝕠:
→ @${owner.split('@')[0]}
𝔸𝕕𝕞𝕚𝕟𝕚𝕤𝕥𝕣𝕒𝕔𝕚𝕠𝕟:
${listAdmin}

✰ *ℂ𝕠𝕟𝕗𝕚𝕘𝕦𝕣𝕒𝕔𝕚𝕠𝕟*

◈ *Welcome:* ${welcome ? '✅' : '❌'}
◈ *Detect:* ${detect ? '✅' : '❌'} 
◈ *Detect 2:* ${detect2 ? '✅' : '❌'} 
◈ *Antilink:* ${antiLink ? '✅' : '❌'} 
◈ *Antilink 𝟸:* ${antiLink2 ? '✅' : '❌'} 
◈ *Modohorny:* ${modohorny ? '✅' : '❌'} 
◈ *Autosticker:* ${autosticker ? '✅' : '❌'} 
◈ *Audios:* ${audios ? '✅' : '❌'} 
◈ *Antiviewonce:* ${antiviewonce ? '✅' : '❌'} 
◈ *Reacción* ${reaction ? "✅️" : "❌️"}
◈ *Antidelete:* ${antidelete ? '✅' : '❌'} 
◈ *Antitoxic:* ${antiToxic ? '✅' : '❌'} 
◈ *Antitraba:* ${antiTraba ? '✅' : '❌'} 
◈ *Modoadmin:* ${modoadmin ? '✅' : '❌'} 
`.trim();

  conn.sendFile(m.chat, pp, 'img.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};

handler.help = ['infogrupo'];
handler.tags = ['grupo'];
handler.command = ['infogrupo'];
handler.register = true
handler.group = true;

export default handler;
