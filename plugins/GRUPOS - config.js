const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

  const optionsFull = `- *MENU-CONFIGURACIONES*

- *${usedPrefix}enable welcome*
- *${usedPrefix}disable welcome*
- *${usedPrefix}enable public*
- *${usedPrefix}disable public*
- *${usedPrefix}enable privado*
- *${usedPrefix}disable privado*
- *${usedPrefix}enable juegos*
- *${usedPrefix}disable juegos*
- *${usedPrefix}enable modohorny*
- *${usedPrefix}disable modohorny*
- *${usedPrefix}enable antilink*
- *${usedPrefix}disable antilink*
- *${usedPrefix}enable antilink2*
- *${usedPrefix}disable antilink2*
- *${usedPrefix}enable detect*
- *${usedPrefix}disable detect*
- *${usedPrefix}enable detect2*
- *${usedPrefix}disable detect2*
- *${usedPrefix}enable restrict*
- *${usedPrefix}disable restrict*
- *${usedPrefix}enable autoread*
- *${usedPrefix}disable autoread*
- *${usedPrefix}enable audios*
- *${usedPrefix}disable audios*
- *${usedPrefix}enable autosticker*
- *${usedPrefix}disable autosticker*
- *${usedPrefix}enable antiviewonce*
- *${usedPrefix}disable antiviewonce*
- *${usedPrefix}enable antitoxic*
- *${usedPrefix}disable antitoxic*
- *${usedPrefix}enable reaction*
- *${usedPrefix}disable reaction*
- *${usedPrefix}enable antitraba*
- *${usedPrefix}disable antitraba*
- *${usedPrefix}enable pconly*
- *${usedPrefix}disable pconly*
- *${usedPrefix}enable gconly*
- *${usedPrefix}disable gconly*
- *${usedPrefix}enable anticall*
- *${usedPrefix}disable anticall*
- *${usedPrefix}enable antirabes*
- *${usedPrefix}disable antirabes*
- *${usedPrefix}enable antirabes2*
- *${usedPrefix}disable antirabes*
- *${usedPrefix}enable modoadmin*
- *${usedPrefix}disable modoadmin*
- *${usedPrefix}enable simsimi*
- *${usedPrefix}disable simsimi*
- *${usedPrefix}enable antispam*
- *${usedPrefix}disable antispam*
`.trim();

const isEnable = /true|enable|(turn)?on|1/i.test(command);
const chat = global.db.data.chats[m.chat];
const user = global.db.data.users[m.sender];
const bot = global.db.data.settings[conn.user.jid] || {};
const type = (args[0] || '').toLowerCase();
let isAll = false; const isUser = false;
switch (type) {ˋ

case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn);
throw false;
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn);
throw false;
}
chat.welcome = isEnable;
break;

case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn);
throw false;
}
} else if (!isAdmin) {
global.dfail('admin', m, conn);
throw false;
}
chat.detect = isEnable;
break;

case 'detect2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn);
throw false;
}
} else if (!isAdmin) {
global.dfail('admin', m, conn);
throw false;
}
chat.detect2 = isEnable;
break;

case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.simi = isEnable;
break;

case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiporno = isEnable;
break;

case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.delete = isEnable;
break;

case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antidelete = isEnable;
break;

case 'public':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['self'] = !isEnable;
break;

case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiLink = isEnable;
break;

case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiLink2 = isEnable;
break;

case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiviewonce = isEnable;
break;

case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.modohorny = isEnable;
break;

case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.modoadmin = isEnable;
break;

case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.autosticker = isEnable;
break;

case 'audios':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.audios = isEnable;
break;

case 'restrict':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
bot.restrict = isEnable;
break;

case 'audios_bot':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
bot.audios_bot = isEnable;      
break;

case 'autoread':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
global.opts['nyimak'] = isEnable;
break;

case 'autoread':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('rowner', m, conn);
throw false;
}
bot.autoread2 = isEnable;

break;
case 'pconly':
case 'privateonly':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['pconly'] = isEnable;
break;

case 'gconly':
case 'grouponly':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['gconly'] = isEnable;
break;

case 'swonly':
case 'statusonly':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
global.opts['swonly'] = isEnable;
break;

case 'anticall':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
bot.antiCall = isEnable;
break;

case 'antiprivado':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
bot.antiPrivate = isEnable;
break;

case 'modejadibot':
isAll = true;
if (!isROwner) {
global.dfail('rowner', m, conn);
throw false;
}
bot.modejadibot = isEnable;
break;

case 'antispam':
isAll = true;
if (!(isROwner || isOwner)) {
global.dfail('owner', m, conn);
throw false;
}
bot.antispam = isEnable;
break;

case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiToxic = isEnable;
break;

case 'game': case 'juegos': case 'fun': case 'ruleta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break;

case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break;

case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiTraba = isEnable;
break;

case 'autolevelup': case 'autonivel': case 'nivelautomatico':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break;

case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn); 
throw false;
}
}
chat.antiArab = isEnable;
break;

case 'antiarabes2':
if (m.isGroup) {
if (!(isAdmin || isROwner || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}
}
chat.antiArab2 = isEnable;
break;
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: fkontak});
throw false;
}
await conn.reply(m.chat, `- *REM CHAN-MD*
- *Tipo*: ${type}
- *Estado:* ${isEnable ? 'Activado' : 'Desactivado'}
- *Para:* ${isAll ? `${global.botname}` : isUser ? '' : 'Este Chat'}`, fkontak, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: global.wm,
body: `Hola ` + nombre, previewType: 0, thumbnail: global.icons, sourceUrl: global.fakeLink}}})} 

handler.help = ['enable <opcion>', 'disable <opcion>'];
handler.tags = ['gropos', 'owner'];
handler.command = /^((en|dis)able|on|off)$/i;
handler.register = true;
export default handler;