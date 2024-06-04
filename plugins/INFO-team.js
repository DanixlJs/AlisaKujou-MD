const handler = async (m,{conn}) => {

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

✰ *Agradecimientos:*
➤ 📦 Diego-YL-117
◈ *Número ⪼* +57 301 2482597
◈ *GitHub ⪼* https://github.com/Diego-YL-177

> → Si quieres formar parte del equipo ponte en contacto con mi Creador.`

conn.reply(m.chat, texto, m, fake, )

m.react('🥏') 

}

handler.help = ['colaboradores', 'team']
handler.command = ['colaboradores', 'team']
handler.register = true
handler.tags = ['info']
handler.exp = 50

export default handler
