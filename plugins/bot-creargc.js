/*
⚠ PROHIBIDO EDITAR ⚠
El codigo de este archivo fue actualizado por:
- Diego-YL-177 >> https://github.com/Diego-YL-177
*/

let handler = async (m, { conn, text }) => {

if (!text) return m.reply('🥷 *Y EL NOMBRE?*')
try{
//m.react(done)
m.reply('✅️ *CREANDO EL GRUPO*')
let group = await conn.groupCreate(text, [m.sender])
let link = await conn.groupInviteCode(group.gid)
m.reply('https://chat.whatsapp.com/' + url)
} catch (e) {
m.reply(`🐰 *ERROR*`)
}
}
handler.help = ['creargc *<nombre>*']
handler.tags = ['owner']
handler.command = /^(creargrupo|creargroup|creargc|gccreate)$/
handler.owner = true
handler.premium = false
export default handler