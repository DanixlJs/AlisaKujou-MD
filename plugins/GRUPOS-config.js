const handler = async (m, {conn, args, usedPrefix, command}) => {
	if (command === 'open') {
	await conn.groupSettingUpdate(m.chat, 'not_announcement');
	m.react('✅')
	}
	
	if (command === 'close') {
	await conn.groupSettingUpdate(m.chat, 'announcement');
	m.react('✅')
	}
};

handler.help = ['open', 'close'];
handler.tags = ['grupo'];
handler.command = ['open', 'close'];
handler.admin = true;
handler.botAdmin = true;
handler.registrado = true;

export default handler;
