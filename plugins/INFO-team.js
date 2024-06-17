const handler = async (m,{conn}) => {
let texto = `❀ *EQUIPO DE PROGRAMADORES*
✰ *Bot ⪼* ${global.botname}
◈ *Versión ⪼* ${global.vs}

✰ *Propietario:*
➤ 👑 DanixlJs
◈ *Rol ⪼* Owner
◈ *Número ⪼* +595 983 799 436
◈ *GitHub ⪼* https://github.com/DanixlJs

➤ 👨‍💻 DiegoOfc
◈ *Rol ⪼* Developer
◈ *Número ⪼* +57 301 2482597
◈ *GitHub ⪼* https://github.com/DiegoOfc

✰ *Agradecimientos:*
➤ 📦 DiegoOfc

> Si quieres formar parte del equipo ponte en contacto con mi Creador.`
conn.reply(m.chat, texto, m, fake, )
m.react('🥏') 
}
handler.help = ['colaboradores', 'team']
handler.command = ['colaboradores', 'team']
handler.registrado = true
handler.tags = ['info']
export default handler
