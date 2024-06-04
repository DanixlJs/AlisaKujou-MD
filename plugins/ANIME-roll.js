const handler = async (m, {conn, command, usedPrefix}) => {

let text = `❀ *ROLL - ANIME*\n✰ *Nombre ⪼* Alisa Mikhailovna Kujou\n◈ *Fuente ⪼* Tokidoki Bosotto Russia-go de Dereru Tonari no Aalya-san\n◈ *Valor ⪼* 50\n◈ *Estado ⪼* Libre`

conn.sendFile(m.chat, global.icons, 'img.jpg', text, m )
}

handler.tags = ['anime']
handler.registrado = true
handler.rowner = true
handler.help = ['roll', 'randomwaifu']
handler.command = ['roll', 'randomwaifu']

export default handler