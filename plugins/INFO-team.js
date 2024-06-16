const handler = async (m,{conn}) => {
if (m.sender === conn.user.jid) return

let texto = `❀ *EQUIPO DE PROGRAMADORES*
✰ *Bot ⪼* ${global.botname}
◈ *Versión ⪼* ${global.vs}

✰ *Propietario:*
➤ 👑 DanixlJs
◈ *Rol ⪼* Owner
◈ *Número ⪼* +595 983 799 436
◈ *GitHub ⪼* https://github.com/DanixlJs

✰ *Colaboradores:*
➤ 👨‍💻 WilsonOFC
◈ *Rol ⪼* Developer
◈ *Número ⪼* +54 9 2964 65-0915
◈ *GitHub ⪼* https://github.com/WilsonOFC

➤ 👨‍💻 Diego-YL-177
◈ *Rol ⪼* Developer
◈ *Número ⪼* +57 301 2482597
◈ *GitHub ⪼* https://github.com/Diego-YL-177

➤ 👨‍💻 DanielDiod
◈ *Rol ⪼* Developer
◈ *Número ⪼* +51 955 918 117
◈ *GitHub ⪼* https://github.com/DanielDiod

✰ *Agradecimientos:*
➤ 📦 Diego-YL-117

> Si quieres formar parte del equipo ponte en contacto con mi Creador.`

conn.reply(m.chat, texto, m, fake, )

m.react('🥏') 

}

handler.help = ['colaboradores', 'team']
handler.command = ['colaboradores', 'team']
handler.registrado = true
handler.tags = ['info']

export default handler
