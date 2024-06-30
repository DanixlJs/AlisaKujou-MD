var handler = async (m, { conn, command, text }) => {
if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.')
if (!text) return conn.reply(m.chat, `✧ Escribe el nombre de dos personas para calcular su amor`, m,)
let [text1, ...text2] = text.split(' ')
text2 = (text2 || []).join(' ')
if (!text2) return conn.reply(m.chat, `✧ Escribe el nombre de la segunda persona.`, m,)
let love = `❀ *${text1}* tu oportunidad de enamorarte de *${text2}* es del ${Math.floor(Math.random() * 100)}% 👩🏻‍❤️‍👨🏻`
m.reply(love, null, { mentions: conn.parseMention(love) })
}
handler.help = ['ship <@tag1> <@tag2>']
handler.tags = ['rpg']
handler.command = ['ship']
handler.registrado = true
export default handler