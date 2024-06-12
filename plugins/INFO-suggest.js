const handler = async (m, { conn, text, usedPrefix, groupMetadata }) => {
	const user = global.db.data.users[m.sender]
	let time = user.suggestime + 300000
	
	if (new Date < 300000) throw `✧ Espera *${msToTime(time - new Date())}* para enviar otro reporte.`
	if (!text) return m.reply('✧ Ingresa la sugerencia que quieras enviar a los Moderadores.')
	if (text.length < 5) return m.reply('✧ Tu sugerencia es demasiado corta, minimo 5 carácteres.')
	
	conn.reply('120363284046748076@g.us', `❀ *SUGERENCIA RECIBIDA*\n\n✰ *Usuario ⪼* wa.me/${m.sender.split`@`[0]}\n◈ *Sugerencia ⪼* ${text}\n◈ *Grupo ⪼* ${groupMetadata.subject}\n◈ *ID ⪼* ${groupMetadata.id}`, m, fake,)
	m.reply('❀ Tu sugerencia se envió con éxito a los Moderadores.')
	user.suggestime = 300000
}

handler.registrado = true
handler.help = ['suggest <texto>']
handler.command = ['suggest']
handler.group = true

export default handler

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100)
  let seconds = Math.floor((duration / 1000) % 60)
  let minutes = Math.floor((duration / (1000 * 60)) % 60)
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  hours = (hours < 10) ? '0' + hours : hours
  minutes = (minutes < 10) ? '0' + minutes : minutes
  seconds = (seconds < 10) ? '0' + seconds : seconds
  return minutes + ' Minuto(s) ' + seconds + ' Segundo(s)'
}
