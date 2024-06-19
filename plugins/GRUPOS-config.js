const handler = async (m, {conn, args, usedPrefix, command, isAdmin, isOwner, isBotAdmin}) => {
	let nn = global.db.data.chats[m.chat];
	let bot = global.db.data.settings[conn.user.jid];
	if (command === 'open') {
		if (!isAdmin) return m.react('❌');
		if (!isbotAdmin) return m.react('❌');
	await conn.groupSettingUpdate(m.chat, 'not_announcement');
	m.react('✅');
	}
	if (command === 'close') {
		if (!isAdmin) return m.react('❌');
		if (!isbotAdmin) return m.react('❌');
	await conn.groupSettingUpdate(m.chat, 'announcement');
	m.react('✅');
	}
	if (command === 'config') {
	if (!isAdmin && !isOwner) return m.reply(`✧ No tienes permisos para utilizar este comando.`);
	let msg = `╾──⟬ *CONFIGURACIONES* ⟭──╼\n> ✰ Lista de opciones configurables de *${global.botname}*`;	
	if (isAdmin) msg += `
╾──⟬ *𝐂𝐎𝐍𝐅𝐈𝐆 - 𝐆𝐑𝐔𝐏𝐎𝐒* ⟭──╼

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
- *simi* ${nn.simi ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}\n\n`;
	if (isOwner) msg += `
╾──⟬ *𝐂𝐎𝐍𝐅𝐈𝐆 - 𝐎𝐖𝐍𝐄𝐑* ⟭──╼
- *self* ${global.opts['self'] ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *pconly* ${global.opts['pconly'] ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *pgonly* ${global.opts['pgonly'] ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *modejadibot* ${bot.modejadibot ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *autoread* ${bot.autoread ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiCall* ${bot.antiCall ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiPrivate* ${bot.antiPrivate ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antispam* ${bot.antispam ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *modoia* ${bot.modoia ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
`;	
	await conn.sendFile(m.chat, global.icons, 'img.jpg', msg, m, )
	}
};
handler.help = ['open', 'close', 'config'];
handler.tags = ['grupo'];
handler.command = ['open', 'close', 'config'];
handler.group = true;
handler.registrado = true;
export default handler;
