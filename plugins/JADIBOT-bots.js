import ws from 'ws'

async function handler(m, { conn: stars, usedPrefix }) {
  let uniqueUsers = new Map()

  global.conns.forEach((conn) => {
    if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
      uniqueUsers.set(conn.user.jid, conn)
    }
  })

  let users = [...uniqueUsers.values()]

  let message = users.map((v, index) => `╭──「@${v.user.jid.replace(/[^0-9]/g, '')}」╼\n│➥ *${index + 1}-*\n│✰ *Link ⪼* https://wa.me/${v.user.jid.replace(/[^0-9]/g, '')}\n│✰ *Nombre ⪼* ${v.user.name || 'Sub-Bot'}\n╰────╼`).join('\n\n')

  let replyMessage = message.length === 0 ? '' : message
  global.totalUsers = users.length
  let responseMessage = `╭──「${global.wm}」╼\n│❀ *Total Sub-Bots ≫* ${global.totalUsers || '0'}\n╰────╼\n\n${replyMessage.trim()}`.trim()

  await stars.sendMessage(m.chat, { text: responseMessage, mentions: stars.parseMention(responseMessage) }, { quoted: fkontak })
}

handler.command = ['bots']
handler.help = ['bots']
handler.tags = ['jadibot']
handler.registrado = true

export default handler
