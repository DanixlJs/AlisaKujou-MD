let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `❀ *INFINITY HOST* ❀
*¿Quieres un hosting para poner tu Bot y no sabes cual usar?*
Pues te presento a *Infinity Host*, un hosting que te ofrece una gran variedad de servicios para poner tus proyectos y que estos estén 24/7 Activos.

❀ *PRECIOS*
- *1GB, 100CPU* = 1dolar
- *2GB, 120CPU* = 2dolar
- *3GB, 140CPU* = 3dolar
- *4GB, 175CPU* = 4dolar
- *5GB, 200CPU* = 5dolar

✰ *Página:* https://dashboard.infinitywa.xyz
✰ *Panel:* https://store.panel-infinitywa.store

*¿Qué esperas para Adquirir sus servicios? Únete a esta familia :)*`
conn.reply(m.chat, txt, m, fake, )
}
handler.tags =['info'] 
handler.help = ['infinity', 'host', 'hosting'] 
handler.command = /^(infinity|infinityWa|host|hosting)$/i
export default handler