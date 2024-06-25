var handler = async (m, { conn, command, text }) => {
if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.')
if (!text) return conn.reply(m.chat, `✧ _Escribe el nombre de dos personas para calcular su amor_`, m, fake, )
let [text1, ...text2] = text.split(' ')

text2 = (text2 || []).join(' ')
if (!text2) return conn.reply(m.chat, `✧ _Escribe el nombre de la segunda persona_`, m, fake, )
let love = `❤️ *${text1}* tu oportunidad de enamorarte de *${text2}* es de *${Math.floor(Math.random() * 100)}%* 👩🏻‍❤️‍👨🏻`

m.reply(love, null, { mentions: conn.parseMention(love) })

}
handler.help = ['ship']
handler.tags = ['fun']
handler.command = /^(ship)$/i

export default handler