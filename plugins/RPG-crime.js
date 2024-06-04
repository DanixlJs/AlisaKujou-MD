let crime = 500
let diamante = 10

const handler = async (m, {conn, usedPrefix, command, groupMetadata, participants, isPrems}) => {
const date = global.db.data.users[m.sender].crime + 600000; //600000 = 10 m

if (new Date - global.db.data.users[m.sender].crime < 3600000) return m.reply(`✧ Espera *${msToTime(date - new Date())}* para realizar otro crimen.`)
let randow
if (m.isGroup) randow = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else randow = m.chat
try {
let ps = groupMetadata.participants.map(v => v.id)
let randow = ps.getRandom()
let users = global.db.data.users[randow]
const exp = Math.floor(Math.random() * 9000)
const diamond = Math.floor(Math.random() * 150)
const money = Math.floor(Math.random() * 9000)

let or = ['text', 'text2', 'text3', 'text4', 'text5']; 

let media = or[Math.floor(Math.random() * 4)]
global.db.data.users[m.sender].crime = new Date * 1;

if (media === 'text') return m.reply(`❀ ${pickRandom(global.robar)} *${exp}* experiencia.`).catch(global.db.data.users[m.sender].exp += exp) 

if (media === 'text2') return m.reply(`✧ ${pickRandom(global.robmal)} *${exp}* experiencia.`).catch(global.db.data.users[m.sender].exp -= crime) 

if (media === 'text3') return m.reply(`❀ ${pickRandom(global.robar)} *${diamond}* Diamantes y *${money} AlisaCoins.`).catch(global.db.data.users[m.sender].limit += diamond).catch(global.db.data.users[m.sender].money += money)

if (media === 'text4') return m.reply(`✧ ${pickRandom(global.robmal)} *${diamond}* Diamante y *${money}* AlisaCoins.`).catch(global.db.data.users[m.sender].limit -= diamante).catch(global.db.data.users[m.sender].money -= crime)

if (media === 'text5') return conn.reply(m.chat, `❀ Le robaste a @${randow.split`@`[0]} una cantidad de *${exp}* experiencia.`, m, {contextInfo: {mentionedJid: [randow]}}).catch(global.db.data.users[m.sender].exp += exp).catch(global.db.data.users[randow].exp -= crime) 
} catch (e) {
console.log(e)}}

handler.help = ['crime'];
handler.tags = ['rpg'];
handler.command = ['crime'];
handler.register = true
handler.group = true

export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.robar = ['Robaste un Banco y Obtuviste', 'Negociaste con el Jefe de la Mafia y Obtuviste', 'Casi te atrapa la policía pero lograste robar una cantidad valiosa de recursos obteniendo', 'Los mafiosos te han pagado :', 'Le has robado al Administrador del Grupo', 'Le robaste a tu Presidente una suma de', 'Le robaste a un Famoso un valor de', 'Secuestraste a un Moderador de Nekos Club y Sofi te pago por el rescate los siguientes recursos'];

global.robmal = ['La policía te agarro robando y perdiste', 'Fuiste a robar un banco y tu ayudante te vendió a la policía, perdiste', 'No pudiste escapar de la Policía y perdiste']
