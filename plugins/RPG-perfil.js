import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'

var handler = async (m, { conn }) => {

let user = db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let { premium, level, diamantes, alisacoins, rango, experiencia, registrado, regtime, edad , desc, genero, userol } = global.db.data.users[who]
let username = conn.getName(who)

let str = `
❀ *PERFIL DE USUARIO*
✰ *Nombre ⪼* ${username}
◈ *Tag ⪼* @${who.replace(/@.+/, '')}
◈ *Edad ⪼* ${registrado ? edad : ''}
◈ *Género ⪼* ${genero}
◈ *Rol ⪼* ${userol ? userol : 'Usuario'}

${desc ? desc : ''}

✰ *RECURSOS*
◈ *Diamantes ⪼* ${diamantes}
◈ *AlisaCoins ⪼* ${alisacoins}
◈ *Nivel ⪼* ${level}
◈ *Experiencia ⪼* ${experiencia}
◈ *Rango ⪼* ${rango}

◈ *Registrado ⪼* ${registrado ? '✅': '❌'}
◈ *Premium ⪼* ${premium ? '✅': '❌'}
`.trim()

conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, fake, { mentions: [who] })

}

handler.help = ['profile']
handler.registrado = true
handler.group = true
handler.tags = ['rpg']
handler.command = ['profile', 'perfil']

export default handler