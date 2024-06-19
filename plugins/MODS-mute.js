let handler = async (m, { conn, text, args, usedPrefix, command, isOwner }) => {
  if (command === 'mute') {
  if (!text) return m.reply(`Etiqueta a la persona que quieras mutear.`)
  let [mentionedJid] = m.mentionedJid || []
  if (!mentionedJid) return m.reply('Por favor, etiqueta a un usuario.')
  if (mentionedJid === isOwner) return m.reply('No puedes mutear a mi Desarrollador.')
  if (!global.db.data.users[mentionedJid]) global.db.data.users[mentionedJid] = {}
  global.db.data.users[mentionedJid].muto = true
  let taguser = conn.getName(mentionedJid)
  conn.reply(`*${taguser}* ha sido muteado.`)
}
  if (command === 'unmute') {
  if (!text) return m.reply(`Etiqueta a la persona que quieras desmutear.`)
  let [mentionedJid] = m.mentionedJid || []
  if (!mentionedJid) return m.reply('Por favor, etiqueta a un usuario.')
  if (!global.db.data.users[mentionedJid]) global.db.data.users[mentionedJid] = {}
  global.db.data.users[mentionedJid].muto = false
  let taguser = conn.getName(mentionedJid)
  conn.reply(`*${taguser}* ha sido desmuteado.`)
}
}

handler.help = ['mute <@tag>', 'unmute <@tag>'];
handler.tags = ['mods'];
handler.command = ['mute', 'unmute']
handler.mods = true
handler.group = true

export default handler