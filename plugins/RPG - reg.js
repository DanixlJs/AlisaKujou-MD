import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')
if (user.registered === true) throw `Ya estás registrado, usa *${prefix}unreg <serie>* para eliminar tu registro.\n\n> Nota: Usa *${prefix}myns* para saber tu número de serie.`
if (!Reg.test(text)) throw `Lo uso mal, manera correcta de uso *${usedPrefix + command} nombre.edad*\n> Ejemplo: *${usedPrefix + command}* ${name2}.18`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw 'El nombre no puede estar vacío.'
if (!age) throw 'La edad no puede estar vacía.'
if (name.length >= 30) throw 'El nombre es demasiado largo.' 
age = parseInt(age)
if (age > 100) throw '👴🏻 Wow el abuelo quiere jugar al bot.'
if (age < 5) throw '👀 hay un bebé jsjsj.'
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
let regbot = `
- *REGISTRO*
- *Nombre:* ${name}
- *Edad:* ${age} años

- *RECOMPENSAS*
- 10 Diamantes 💎
- 600 RemCoins 💰
- 245 Exp 💸
- Monedas 🪙`
await m.reply(regbot)
await m.reply(`${sn}`)

}
handler.help = ['reg <nombre.edad>']
handler.tags = ['info', 'rpg']
handler.command = ['reg', 'verificar', 'registrar'] 

export default handler