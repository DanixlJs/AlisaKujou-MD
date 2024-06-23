import { canLevelUp, xpRange } from '../lib/levelling.js';
import { levelup } from '../lib/canvas.js';
import { promises } from 'fs';
import { join } from 'path';
import moment from 'moment-timezone';

let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');

  let { experiencia, diamantes, level, rango } = global.db.data.users[m.sender];
  let { min, xp, max } = xpRange(level, global.multiplier);
  let d = moment().tz('America/Asuncion');
  let locale = 'es';
  let week = d.locale(locale).format('dddd');
  let date = d.locale(locale).format('LL');
  let time = d.locale(locale).format('LTS');
  let _uptime = process.uptime() * 1000;
  let _muptime;
  if (process.send) {
    process.send('uptime');
    _muptime = await new Promise(resolve => {
      process.once('message', resolve);
      setTimeout(resolve, 1000);
    }) * 1000;
  }
  let muptime = clockString(_muptime);
  let uptime = clockString(_uptime);
  let totalreg = Object.keys(global.db.data.users).length;
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registrado == true).length;
  let replace = {
    '%': '%',
    p: _p, uptime, muptime,
    me: conn.getName(conn.user.jid),
    experiencia: experiencia - min,
    maxexp: xp,
    totalexp: experiencia,
    xp4levelup: max - experiencia,
    level, diamantes, week, date, time, totalreg, rtotalreg, rango,
    readmore: readMore
  };
  text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name]);
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let mentionedJid = [who];
  let username = conn.getName(who);
  let name = conn.getName(m.sender);
  let user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.experiencia, global.multiplier)) {
    let { min, xp, max } = xpRange(user.level, global.multiplier);
    return m.reply(`❀ *TU NIVEL ACTUAL*
✰ *Usuario ⪼* ${name}
◈ *Nivel ⪼* ${user.level}
◈ *Rango ⪼* ${user.rango}
◈ *Experiencia ⪼* ${user.experiencia - min}/${xp}
> Te falta *${max - user.experiencia}* de experiencia para subir de nivel.`);
  }
  let before = user.level * 1;
  while (canLevelUp(user.level, user.experiencia, global.multiplier)) user.level++;
  if (before !== user.level) {
    let teks = `❀ Bien hecho *${conn.getName(m.sender)}*, subiste al nivel *${user.level}*`;
    let str = `❀ *SUBISTE DE NIVEL*
✧ *Usuario ⪼* ${name}
◈ *Nivel Anterior ⪼* ${before}
◈ *Nuevo Nivel ⪼* ${user.level}
◈ *Rango ⪼* ${user.rango}
◈ *Fecha ⪼* ${d.format('LLLL')}
> Cuando más interactues conmigo mayor será tu nivel.`.trim();
    try {
      const img = await levelup(teks, user.level);
      conn.sendMessage(m.chat, { image: global.icons, caption: str, mentions: conn.parseMention(str) }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
    } catch (e) {
      m.reply(str);
    }
  }
};

handler.help = ['levelup', 'level'];
handler.tags = ['rpg'];
handler.command = ['levelup', 'level'];
handler.registrado = true;
export default handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}