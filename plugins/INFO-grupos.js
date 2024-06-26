let handler = async (m, { conn, command }) => {
let str = `❀ *GRUPOS OFICIALES*

❀ *GRUPOS DE COLABORACIÓN*
✰ 🤍𝗔𝗹𝗶𝘀𝗮 𝗞𝘂𝗷𝗼𝘂​᭄ 𝚡 ⏤͟͟͞͞𝐍𝐞𝐤𝐨'𝐬 𝐂𝐥𝐮𝐛⏤͟͟͞͞★
> [https://chat.whatsapp.com/Kbj38zCqOvqH9KM5bRH1Hb]

✰ *🤍 𝗔𝗹𝗶𝘀𝗮 𝗞𝘂𝗷𝗼𝘂 - 𝗠𝗗​᭄ ᎪΝႮΝᏟᏆϴՏ*
> [https://whatsapp.com/channel/0029Vaa4kxh4dTnEJ0pwVr1y]

❀ *CANALES OFICIALES*
✰ *🤍 𝗔𝗹𝗶𝘀𝗮 𝗞𝘂𝗷𝗼𝘂 - 𝗠𝗗​᭄ ᎪΝႮΝᏟᏆϴՏ*
> [${channel}]

✰ *♋︎ 𝐃𝙴𝚅 𝐖𝙾𝚁𝙻𝙳 - 𝐓𝙴𝙰𝙼 ♋︎*
> [${channel2}]`

await conn.reply(m.chat, str, m, fake, )
}
handler.command = ['grupos']
handler.help = ['grupos']
handler.tags = ['info']
handler.registrado = true
handler.disabled = true
export default handler
