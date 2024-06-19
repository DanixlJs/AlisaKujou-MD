import fs from 'fs'
import path from 'path'
let handler = async (m, { conn }) => {
  if (!global.db.data.users[m.sender]) global.db.data.users[m.sender] = {}
  if (global.db.data.users[m.sender].muto) {
    await conn.sendMessage(m.chat, { delete: { remoteJid: m.key.remoteJid, fromMe: false, id: m.key.id, participant: m.sender } })
  }
}
export default handler
