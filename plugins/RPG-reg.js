import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')

if (user.registered === true) throw `✧ Ya estás registrado, usa *${usedPrefix}unreg <serie>* para eliminar tu registro.\n> → *Nota ⪼* Usa *${usedPrefix}myns* para saber tu número de serie.`

if (!Reg.test(text)) throw `✧ Asegúrate de agregar tu nombre y edad, Ejemplo:\n> → *${usedPrefix + command} ${name2}.18*`

let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '✧ El nombre no puede estar vacío..'
if (!age) throw '✧ La edad no puede estar vacía.'
if (name.length >= 30) throw '✧ El nombre es demasiado largo.' 
age = parseInt(age)
if (age > 80) throw '✧ Ingresa tu edad real.'
if (age < 10) throw '✧ Ingresa tu edad real.'
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
global.db.data.users[m.sender].money += 600
global.db.data.users[m.sender].limit += 10
global.db.data.users[m.sender].exp += 245
global.db.data.users[m.sender].joincount += 5
let sn = createHash('md5').update(m.sender).digest('hex')
m.react('📩')

let regbot = `❀ *REGISTRO COMPLETO*
✰ *Nombre ⪼* ${name}
◈ *Edad ⪼* ${age} años

➤ *RECOMPENSAS*
◈ 10 Diamantes
◈ 600 AlisaCoins
◈ 245 Experiencia
◈ 5 Monedas
> → *Nota ⪼* Use *${usedPrefix}myns* para saber su número de serie.`
await conn.reply(m.chat, regbot, m, fake, )

}

handler.help = ['reg <nombre.edad>']
handler.tags = ['info', 'rpg']
handler.command = ['reg', 'verificar', 'registrar'] 

export default handler