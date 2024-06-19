let handler = async (m, { conn, text, args, usedPrefix, command, isOwner }) => {
  if (command === 'mute') {
  if (!text) return m.reply(`✧ Etiqueta a la persona que quieras mutear.`)
  let user = text.replace('@', '').trim()
  let mentionedJid = `${user}@s.whatsapp.net`
  if (!mentionedJid) return m.reply('✧ Por favor, etiqueta a un usuario.')
  if (mentionedJid === isOwner) return m.reply('✧ No puedes mutear a mi Desarrollador.')
  if (!global.db.data.users[mentionedJid]) global.db.data.users[mentionedJid] = {}
  global.db.data.users[mentionedJid].muto = true
  let taguser = conn.getName(mentionedJid)
  conn.reply(m.chat, `❀ *${taguser}* ha sido muteado.`, m, fake, )
}
  if (command === 'unmute') {
  if (!text) return m.reply(`✧ Etiqueta a la persona que quieras desmutear.`)
  let user = text.replace('@', '').trim()
  let mentionedJid = `${user}@s.whatsapp.net`
  if (!mentionedJid) return m.reply('✧ Por favor, etiqueta a un usuario.')
  if (!global.db.data.users[mentionedJid]) global.db.data.users[mentionedJid] = {}
  global.db.data.users[mentionedJid].muto = false
  let taguser = conn.getName(mentionedJid)
  conn.reply(m.chat, `❀ *${taguser}* ha sido desmuteado.`, m, fake, )
}
}

handler.help = ['mute <@tag>', 'unmute <@tag>'];
handler.tags = ['mods'];
handler.command = ['mute', 'unmute']
handler.mods = true
handler.group = true

export default handler
