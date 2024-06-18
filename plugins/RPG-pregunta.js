var handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `✧ Ingresa una pregunta.`, m, fake, )
m.react('❔')
await delay(1000 * 1)
m.react('❓')
await delay(1000 * 1)
m.react('❔')
await delay(1000 * 1)
conn.reply(m.chat, `❀ *PREGUNTAS*
✰ *Pregunta ⪼* ${text}
◈ *Respuesta ⪼* ${['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible','Por que haces estas preguntas','Por eso te dejo tu ex','Para que quieres saber','No te dire la respuesta', 'Y si mejor me coges en 4?'].getRandom()}`, m, fake, )
}
handler.help = ['pregunta']
handler.tags = ['rpg']
handler.command = ['pregunta']
handler.registrado = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
