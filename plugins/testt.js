var handler = async (m, { conn, text, usedPrefix, command}) => {

let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img

try {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bot = conn.user.jid.split`@`[0] 
bant = `✧ Etiqueta a la persona que quieras banear.`

if (!text && !m.quoted) return conn.reply(m.chat, bant, m, { mentions: [user] })               
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user.split('@')[0]
if(user === conn.user.jid) return conn.reply(m.chat, `✧ No puedes banear a ${bot}`, m, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, `✧ No puedes banear a mi creador.`, m, { mentions: [aa] })
return
}}
users = global.db.data.users
if (users[user].banned === true) conn.reply(m.chat, `✧ @${number} ya estaba baneado.`, m, { mentions: [user] }) 
users[user].banned = true
usr = m.sender.split('@')[0]     
await conn.reply(m.chat, '❀ El usuario ha sido Baneado.', m, { mentions: [user] })   
let bantext = `✧ @${user} ha sido baneado por @{usr}`
conn.reply('120363284046748076@g.us', bantext, m, null, { mentions: conn.parseMention[bantext]})

}} catch (e) {
await conn.reply(m.chat, '✧ Ocurrió un error inesperado.', m, fake, )
console.log(e) 
}

}

handler.tags = ['mods']
handler.help = ['ban @<tag>']
handler.command = ['ban']
handler.register = true
handler.mods = true

export default handler