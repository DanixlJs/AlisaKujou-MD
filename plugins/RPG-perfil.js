import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
var handler = async (m, { conn }) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/7079b6b104a3eb98b2392.png')
let { premium, level, diamantes, dinero, rango, experiencia, registrado, regtime, edad , desc, genero, userol } = global.db.data.users[who]
let username = conn.getName(who)
let noprem = `
❀ *PERFIL DE USUARIO*
✰ *Nombre ⪼* ${username}
◈ *Tag ⪼* @${who.replace(/@.+/, '')}
◈ *Edad ⪼* ${registrado ? edad : ''}
◈ *Género ⪼* ${genero ? genero : 'Sin Género'}
◈ *Rol ⪼* ${userol ? userol : 'Usuario'} ${desc ? `\n\n${desc}` : ''}

✰ *RECURSOS*
◈ *Diamantes ⪼* ${diamantes}
◈ *${global.botcoins} ⪼* ${dinero}
◈ *Nivel ⪼* ${level}
◈ *Experiencia ⪼* ${experiencia}
◈ *Rango ⪼* ${rango}

◈ *Registrado ⪼* ${registrado ? '✅': '❌'}
◈ *Premium ⪼* ${premium ? '✅': '❌'}
`.trim()
let prem = `╭──⪩ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ⪨
│⧼👤⧽ *ᴜsᴜᴀʀɪᴏ:* 「${username}」
│⧼🍃⧽ *ᴇᴅᴀᴅ:* ${registrado ? edad : ''}
│⧼⭐⧽ *ɢᴇɴᴇʀᴏ:* ${genero ? genero : 'Sin Género'}
│⧼🔱⧽ *ʀᴏʟ:* ${userol ? userol : '『𝑷𝒓𝒆𝒎𝒊𝒖𝒎』'}
╰───⪨
✐ ${desc ? desc : 'Sin Descripción Ｏ(≧∇≦)Ｏ'}

╭────⪩ 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 ⪨
│⧼💎⧽ *ᴅɪᴀᴍᴀɴᴛᴇs:* ${diamantes}
│⧼💴⧽ *ᴄᴏɪɴs:* ${dinero}
│
│⧼🔰⧽ *ɴɪᴠᴇʟ:* ${level}
│⧼🌟⧽ *ᴇxᴘᴇʀɪᴇɴᴄɪᴀ:* ${experiencia}
│⧼⚜️⧽ *ʀᴀɴɢᴏ:* ${rango}
│
╰───⪨ *𝓤𝓼𝓾𝓪𝓻𝓲𝓸 𝓓𝓮𝓼𝓽𝓪𝓬𝓪𝓭𝓸* ⪩`.trim()
conn.sendFile(m.chat, pp, 'perfil.jpg', `${premium ? prem.trim() : noprem.trim()}`, m, fake, { mentions: [who] })
}
handler.help = ['profile']
handler.registrado = true
handler.group = true
handler.tags = ['rpg']
handler.command = ['profile', 'perfil']
export default handler
