import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1861aab98389b13db8588.jpg')

if (user.registered === true) throw `𝕐𝕒 𝕖𝕤𝕥á𝕤 𝕣𝕖𝕘𝕚𝕤𝕥𝕣𝕒𝕕𝕠, 𝕦𝕤𝕒 *${usedPrefix}unreg <serie>* 𝕡𝕒𝕣𝕒 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣 𝕥𝕦 𝕣𝕖𝕘𝕚𝕤𝕥𝕣𝕠.\n→ ℕ𝕠𝕥𝕒: 𝕌𝕤𝕒 *${usedPrefix}myns* 𝕡𝕒𝕣𝕒 𝕤𝕒𝕓𝕖𝕣 𝕥𝕦 𝕟ú𝕞𝕖𝕣𝕠 𝕕𝕖 𝕤𝕖𝕣𝕚𝕖.`

if (!Reg.test(text)) throw `⧼✦⧽ 𝕌𝕤𝕠 ℂ𝕠𝕣𝕣𝕖𝕔𝕥𝕠:\n→ *{usedPrefix + command} ${name2}.18*`

let [_, name, splitter, age] = text.match(Reg)
if (!name) throw '𝔼𝕝 𝕟𝕠𝕞𝕓𝕣𝕖 𝕟𝕠 𝕡𝕦𝕖𝕕𝕖 𝕖𝕤𝕥𝕒𝕣 𝕧𝕒𝕔𝕚𝕠.'
if (!age) throw '𝕃𝕒 𝕖𝕕𝕒𝕕 𝕟𝕠 𝕡𝕦𝕖𝕕𝕖 𝕖𝕤𝕥𝕒𝕣 𝕧𝕒𝕔𝕚𝕒.'
if (name.length >= 30) throw '𝔼𝕝 𝕟𝕠𝕞𝕓𝕣𝕖 𝕖𝕤 𝕕𝕖𝕞𝕒𝕤𝕚𝕒𝕕𝕠 𝕝𝕒𝕣𝕘𝕠.' 
age = parseInt(age)
if (age > 80) throw '👴🏻 𝕎𝕠𝕨 𝕖𝕝 𝕒𝕓𝕦𝕖𝕝𝕠 𝕢𝕦𝕚𝕖𝕣𝕖 𝕛𝕦𝕘𝕒𝕣 𝕒𝕝 𝕓𝕠𝕥.'
if (age < 10) throw '👀 𝕙𝕒𝕪 𝕦𝕟 𝕓𝕖𝕓𝕖 𝕛𝕤𝕛𝕤𝕛.'
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
let regbot = `✰ *ℝ𝕖𝕘𝕚𝕤𝕥𝕣𝕠 ℂ𝕠𝕞𝕡𝕝𝕖𝕥𝕠*
◈ ℕ𝕠𝕞𝕓𝕣𝕖: ${name}
◈ 𝔼𝕕𝕒𝕕: ${age} años
◈ ℝ𝕖𝕔𝕠𝕞𝕡𝕖𝕟𝕤𝕒𝕤: 
→ 10 Diamantes 💎
→ 600 RemCoins 💰
→ 245 Exp 💸
→ Monedas 🪙`
await conn.sendFile(m.chat, global.icons, 'img.jpg', regbot)
await m.reply(`${sn}`)

}

handler.help = ['reg <nombre.edad>']
handler.tags = ['info', 'rpg']
handler.command = ['reg', 'verificar', 'registrar'] 

export default handler