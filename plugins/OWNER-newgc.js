let handler = async (m, { conn, text }) => {
if (m.sender === conn.user.jid) return

if (!text) return m.reply('✧ Ingresa un nombre para el grupo.')
try{
m.reply('❀ Creando Grupo.')
let group = await conn.groupCreate(text, [m.sender])
let link = await conn.groupInviteCode(group.gid)
m.reply('https://chat.whatsapp.com/' + url)
} catch (e) {
m.reply(`✧ Ocurrió un error inesperado.`)
}
}

handler.help = ['newgc <nombre>']
handler.tags = ['owner']
handler.command = ['newgc']
handler.owner = true
handler.registrado = true


export default handler
