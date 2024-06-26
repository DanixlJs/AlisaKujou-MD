const handler = async (m, {conn, command}) => {
if (command === 'infinity') {
let infifake = { contextInfo: { mentionedJid: [m.sender], forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: '♾️ INFINITY - HOST ♾️' }, externalAdReply: { title: '✅ HOSTIN DE CALIDAD ✅', body: '❀ Y buen precio 🌟', mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: 'https://telegra.ph/file/5a177278036dd3966b6b2.jpg', thumbnail: 'https://telegra.ph/file/5a177278036dd3966b6b2.jpg', sourceUrl: 'https://dashboard.infinitywa.xyz' }}}, { quoted: m }
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

*¿Qué esperas para Adquirir sus servicios? Únete a esta familia :)*
`
await conn.reply(m.chat, txt, m, infifake,)
}
}

handler.command = ['infinity']

export default handler