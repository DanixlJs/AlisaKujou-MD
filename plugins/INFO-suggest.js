const handler = async (m, { conn, text, usedPrefix, groupMetadata }) => {
	if (!text) return m.reply('✧ Ingresa la sugerencia que quieras enviar a los Moderadores.')
	if (text.length < 5) return m.reply('✧ Tu sugerencia es demasiado corta, minimo 5 carácteres.')
	
	conn.reply('120363284046748076@g.us', `❀ *SUGERENCIA RECIBIDA*\n\n✰ *Usuario ⪼* wa.me/${m.sender.split`@`[0]}\n◈ *Sugerencia ⪼* ${text}\n◈ *Grupo ⪼* ${groupMetadata.subject}\n◈ *ID ⪼* ${groupMetadata.id}`, m, fake,)
	m.reply('❀ Tu sugerencia se envió con éxito a los Moderadores.')
}

handler.registrado = true
handler.help = ['suggest <texto>']
handler.command = ['suggest']
handler.group = true

export default handler