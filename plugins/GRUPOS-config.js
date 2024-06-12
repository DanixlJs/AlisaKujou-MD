const handler = async (m, {conn, args, usedPrefix, command, isAdmin, isOwner, isGroup, isBotAdmin}) => {
	let nn = global.db.data.chats[m.chat];
	let bot = global.db.data.settings[conn.user.jid];
	if (command === 'open') {
		if (!isAdmin) return m.react('');
		if (!isbotAdmin) return m.react('');
	await conn.groupSettingUpdate(m.chat, 'not_announcement');
	m.react('✅');
	}
	
	if (command === 'close') {
		if (!isAdmin) return m.react('');
		if (!isbotAdmin) return m.react('');
	await conn.groupSettingUpdate(m.chat, 'announcement');
	m.react('✅');
	}

	if (command === 'config') {
	let msg = `*CONFIGURACIONES*\n> Bienvenido al menu de Configuración de ${global.botname\n*Use ${usedPrefix}toggle <opción>*\n\n`;
		if (isGroup) msg += `*CONFIG - GRUPOS*
- *welcome* ${chat.welcome ? 'on' : 'off'}
- *detect* ${chat.detect ? 'on' : 'off'}
- *detect2* ${chat.detect2 ? 'on' : 'off'}
- *antidelete* ${chat.antidelete ? 'on' : 'off'}
- *modohorny* ${chat.modohorny ? 'on' : 'off'}
- *reaction* ${chat.reaction ? 'on' : 'off'}
- *autosticker* ${chat.autosticker ? 'on' : 'off'}
- *audios* ${chat.audios ? 'on' : 'off'}
- *antiLink* ${chat.antiLink ? 'on' : 'off'}
- *antiLink2* ${chat.antiLink2 ? 'on' : 'off'}
- *antiviewonce* ${chat.antiviewonce ? 'on' : 'off'}
- *antiToxic* ${chat.antiToxic ? 'on' : 'off'}
- *antiTraba* ${chat.antiTraba ? 'on' : 'off'}
- *antiArab* ${chat.antiArab ? 'on' : 'off'}
- *antiArab2* ${chat.antiArab2 ? 'on' : 'off'}
- *antiporno* ${chat.antiporno ? 'on' : 'off'}
- *game* ${chat.game ? 'on' : 'off'}
- *autolevelup* ${chat.autolevelup ? 'on' : 'off'}
- *modoadmin* ${chat.modoadmin ? 'on' : 'off'}
- *simi* ${chat.simi ? 'on' : 'off'}\n\n`;

	if (isOwner) msg += `*CONFIG - OWNER*
- *self* ${global.opts['self'] ? 'on' : 'off'}
- *pconly* ${global.opts['pconly'] ? 'on' : 'off'}
- *pgonly* ${global.opts['pgonly'] ? 'on' : 'off'}
- *restrict* ${bot.restrict ? 'on' : 'off'}
- *modejadibot* ${bot.modejadibot}
- *autoread* ${bot.autoread ? 'on' : 'off'}
- *autoread2* ${bot.autoread2 ? 'on' : 'off'}
- *antiCall* ${bot.antiCall ? 'on' : 'off'}
- *antiPrivate* ${bot.antiPrivate ? 'on' : 'off'}
- *antispam* ${bot.antispam ? 'on' : 'off'}
- *modoia* ${bot.modoia ? 'on' : 'off'}
- *audios_bot* ${bot.audios_ia ? 'on' : 'off'}`
	}
};

handler.help = ['open', 'close', 'config'];
handler.tags = ['grupo'];
handler.command = ['open', 'close', 'config'];
handler.group = true;
handler.registrado = true;

export default handler;
