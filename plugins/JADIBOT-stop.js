import fs from "fs"
async function handler(m, {conn, usedPrefix}) {
   if (conn.user.jid == global.conn.user.jid) return m.reply(`✧ El Bot principal no se puede apagar.`)
   m.reply(`❀ Deteniendo Bot.`)
   conn.fstop = true
   conn.ws.close()
}
handler.command = ['stop']
handler.help = ['stop']
handler.tags = ['jadibot']
handler.owner = true
handler.disabled = true
handler.private = true
handler.registrado = true
export default handler
