import fetch from 'node-fetch'
import axios from 'axios'
import translate from '@vitalets/google-translate-api'
import {Configuration, OpenAIApi} from 'openai'
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key})
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command, isOwner}) => {
if (!global.db.data.chats[m.chat].modoia && !isOwner) return m.reply('✧ Los comandos de *AI*  fueron desactivados por mi Creador.)
if (usedPrefix == 'a' || usedPrefix == 'A') return
if (!text) return conn.reply(m.chat, `✧ Ingrese una petición para que la AI lo responda, Ejemplo:\n> *${usedPrefix + command} Código de una Calculadora en .js*`, m, fake, )   
try {
await m.reply('❀ Procesando, espere un momento.')
conn.sendPresenceUpdate('composing', m.chat)
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/ia2?text=${text}`)
let res = await gpt.json()
await m.reply(res.gpt)
} catch {
try {
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}`)
let res = await gpt.json()
await m.reply(res.data) 
} catch{
}}}
handler.help = ['chatgpt <texto>', 'ia <texto>']
handler.tags = ['ai']
handler.registrado = true
handler.diamantes = 1
handler.command = ['ia', 'chatgpt']

export default handler
