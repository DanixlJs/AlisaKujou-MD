const handler = async (m, {conn, command, text, isOwner}) => {
if (isOwner) {
return
}
if (command === 'prefix') {
if (!text) return m.reply('✧ Ingresa un Prefijo para Alisa')
if (text.length > 1) return m.reply('✧ El prefijo no puede tener más de 1 carácteres.')
global.prefix = [`${text}`]
await conn.reply(m.chat, `❀ Se cambió el Prefijo a *[ ${text} ]*`, m, fake, )
}
if (command === 'resetprefix') {
global.prefix = new RegExp('^[/.#!]')
await conn.reply(m.chat, '❀ Se ha reseteado el prefijo de Alisa', m, fake, )
}

handler.tags = ['owner']
handler.command = ['prefix', 'resetprefix']


export default handler