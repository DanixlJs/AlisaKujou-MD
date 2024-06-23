const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.')
let user = global.db.data.users[m.sender]
if (command === 'setgenre') {
if (!text) return m.reply('✧ Por favor escribe el género con el que te identificas.\n◈ Hombre\n◈ Mujer\n◈ Otro')
if (text !== 'Hombre' && text !== 'Mujer' && text !== 'Otro') return m.reply('✧ Por favor selecciona un Género válido.')
await conn.reply(m.chat, `❀ Se cambió tu género a *${text}*.`, m, fake, )
user.genero = `${text}`
}
if (command === 'setdesc') {
if (!text) return m.reply('✧ Ingresa un texto para poner en tu descripción.')
if (text.lenght > 200) return m.reply('✧ La descripción no puede tener más de 200 Caracteres')
user.desc = `${text}`
m.reply('❀ Se ha cambiado tu descripción.')
}
}
handler.help = ['setgenre <genero>', 'setdesc <texto>']
handler.command = ['setgenre', 'setdesc']
handler.registrado = true

export default handler
