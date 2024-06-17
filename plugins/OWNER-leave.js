let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `❀ ${global.botname} ya no formará parte del Grupo.`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
return console.log(e)
}}
handler.help = ['leave']
handler.command = ['leave']
handler.group = true
handler.rowner = true
export default handler
