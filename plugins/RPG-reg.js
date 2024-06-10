import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')

if (user.registrado === true) throw `✧ Ya estás registrado, usa *${usedPrefix}unreg <serie>* para eliminar tu registro.\n> → *Nota ⪼* Usa *${usedPrefix}myns* para saber tu número de serie.`

if (!Reg.test(text)) throw `✧ Asegúrate de agregar tu nombre y edad, Ejemplo:\n> → *${usedPrefix + command} ${name2}.18*`

let [_, name, splitter, edad] = text.match(Reg)
if (!name) throw '✧ El nombre no puede estar vacío..'
if (!edad) throw '✧ La edad no puede estar vacía.'
if (name.length >= 30) throw '✧ El nombre es demasiado largo.' 
edad = parseInt(edad)
if (edad > 80) throw '✧ Ingresa tu edad real.'
if (edad < 10) throw '✧ Ingresa tu edad real.'
user.name = name.trim()
user.edad = edad
user.regtime = + new Date
user.registrado = true
global.db.data.users[m.sender].alisacoins += 600
global.db.data.users[m.sender].diamantes += 10
global.db.data.users[m.sender].experiencia += 245
let sn = createHash('md5').update(m.sender).digest('hex')
m.react('📩')

let regbot = `❀ *REGISTRO COMPLETO*
✰ *Nombre ⪼* ${name}
◈ *Edad ⪼* ${edad} años

➤ *RECOMPENSAS*
◈ 10 Diamantes
◈ 600 AlisaCoins
◈ 245 Experiencia

> ⬇️ *Su número de Serie* ⬇️
`
await conn.reply(m.chat, regbot, m, fake, )
conn.reply(m.chat, sn, m, fake, )

}

handler.help = ['reg <nombre.edad>']
handler.tags = ['info', 'rpg']
handler.command = ['reg', 'verificar', 'registrar'] 

export default handler