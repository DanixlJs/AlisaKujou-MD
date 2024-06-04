let media = global.icons
let handler = async (m, { conn, command }) => {

let str = `❀ *GRUPOS OFICIALES*
✰ *⏤͟͟͞͞𝐄𝐥 𝐒𝐨́𝐭𝐚𝐧𝐨 𝐝𝐞 𝐀𝐥𝐢𝐬𝐚 🤍*
> [https://chat.whatsapp.com/Kbj38zCqOvqH9KM5bRH1Hb]
✰ *🤍 𝗔𝗹𝗶𝘀𝗮 𝗞𝘂𝗷𝗼𝘂 - 𝗠𝗗​᭄ ᎪΝႮΝᏟᏆϴՏ*
> [https://whatsapp.com/channel/0029Vaa4kxh4dTnEJ0pwVr1y]`

m.react('🧰') 

await conn.reply(m.chat, str, m, fake, )}

handler.command = ['grupos']
handler.help = ['grupos']
handler.tags = ['info']
handler.register = true
handler.exp = 33

export default handler