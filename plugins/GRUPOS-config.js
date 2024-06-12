const handler = async (m, {conn, args, usedPrefix, command, isAdmin, isOwner, isGroup, isBotAdmin}) => {
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
	let msg = `*CONFIGURACIONES*\n> Bienvenido al menu de Configuración de ${global.botname}\n*Use ${usedPrefix}toggle <opción>*\n\n`;
	if (isGroup) msg += `*CONFIG - GRUPOS*
- *welcome* ${nn.welcome ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *detect* ${nn.detect ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *detect2* ${nn.detect2 ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antidelete* ${nn.antidelete ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *modohorny* ${nn.modohorny ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *reaction* ${nn.reaction ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *autosticker* ${nn.autosticker ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *audios* ${nn.audios ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiLink* ${nn.antiLink ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiLink2* ${nn.antiLink2 ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiviewonce* ${nn.antiviewonce ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiToxic* ${nn.antiToxic ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiTraba* ${nn.antiTraba ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiArab* ${nn.antiArab ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiArab2* ${nn.antiArab2 ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiporno* ${nn.antiporno ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *game* ${chat.game ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *autolevelup* ${chat.autolevelup ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *modoadmin* ${chat.modoadmin ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *simi* ${chat.simi ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}\n\n`;

	if (isOwner) msg += `*CONFIG - OWNER*
- *self* ${global.opts['self'] ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *pconly* ${global.opts['pconly'] ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *pgonly* ${global.opts['pgonly'] ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *restrict* ${bot.restrict ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *modejadibot* ${bot.modejadibot}
- *autoread* ${bot.autoread ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *autoread2* ${bot.autoread2 ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiCall* ${bot.antiCall ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antiPrivate* ${bot.antiPrivate ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *antispam* ${bot.antispam ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *modoia* ${bot.modoia ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}
- *audios_bot* ${bot.audios_ia ? '   ⧼✅⧽ Activado' : '   ⧼❌⧽ Desactivado'}`;
		await conn.reply(m.chat, msg, m, fake, )
	}
};

handler.help = ['open', 'close', 'config'];
handler.tags = ['grupo'];
handler.command = ['open', 'close', 'config'];
handler.group = true;
handler.registrado = true;

export default handler;
