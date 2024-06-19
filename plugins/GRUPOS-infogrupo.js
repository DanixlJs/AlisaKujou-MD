const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || `${global.icons}`;
  let nn = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `❀ *INFO GRUPO*
✰ *ID:*
→ ${groupMetadata.id}
◈ *Nombre:*
→ ${groupMetadata.subject}
◈ *Descripción:*
→ ${groupMetadata.desc?.toString() || 'Sin Descripción'}
◈ *Miembros:*
→ ${participants.length} Participantes
◈ *Creador del Grupo:*
→ @${owner.split('@')[0]}
◈ *Administradores:*
${listAdmin}

➤ *CONFIGURACIÓN*

- *welcome* ${nn.welcome ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *detect* ${nn.detect ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antidelete* ${nn.antidelete ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *modohorny* ${nn.modohorny ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *autosticker* ${nn.autosticker ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiLink* ${nn.antiLink ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiLink2* ${nn.antiLink2 ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiviewonce* ${nn.antiviewonce ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiToxic* ${nn.antiToxic ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiTraba* ${nn.antiTraba ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiArab* ${nn.antiArab ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiporno* ${nn.antiporno ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *game* ${nn.game ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *autolevelup* ${nn.autolevelup ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *modoadmin* ${nn.modoadmin ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *simi* ${nn.simi ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
`.trim();
  conn.sendFile(m.chat, pp, 'img.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrupo'];
handler.tags = ['grupo'];
handler.command = ['infogrupo', 'gp'];
handler.registrado = true
handler.group = true;
export default handler;
