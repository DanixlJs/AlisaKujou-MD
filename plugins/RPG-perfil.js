import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'

var handler = async (m, { conn }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = wait conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
let { premium, level, diamantes, alisacoins, rango, experiencia, registrado, regtime, edad , desc, genero, userol } = global.db.data.users[who]
let username = conn.getName(who)

let noprem = `
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

let prem = `╭──⪩ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ⪨
│⧼👤⧽ ᴜsᴜᴀʀɪᴏ 「${username}」
│⧼🍃⧽ ᴇᴅᴀᴅ ${registrado ? edad : ''}
│⧼⭐⧽ ɢᴇɴᴇʀᴏ ${genero}
│⧼🔱⧽ ʀᴏʟ ${userol ? userol : 『𝑷𝒓𝒆𝒎𝒊𝒖𝒎』'}
╰───⪨
✐ ${desc ? desc : 'Ｏ(≧∇≦)Ｏ'}

╭────⪩ 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 ⪨
│⧼💎⧽ ᴅɪᴀᴍᴀɴᴛᴇs ${diamantes}
│⧼💴 ᴀʟɪsᴀᴄᴏɪɴs ${alisacoins}
│
│⧼🔰⧽ ɴɪᴠᴇʟ ${level}
│⧼🌟⧽ ᴇxᴘᴇʀɪᴇɴᴄɪᴀ ${experiencia}
│⧼⚜️⧽ ʀᴀɴɢᴏ ${rango}
│
╰───⪨ *𝓤𝓼𝓾𝓪𝓻𝓲𝓸 𝓓𝓮𝓼𝓽𝓪𝓬𝓪𝓭𝓸* ⪩`.trim()

let msg = ${premium ? prem : noprem}

conn.sendFile(m.chat, pp, 'perfil.jpg', ${who.premium ? `${prem.trim()}` : `${noprem.trim()}`}, m, fake, { mentions: [who] })

}

handler.help = ['profile']
handler.registrado = true
handler.group = true
handler.tags = ['rpg']
handler.command = ['profile', 'perfil']

export default handler
