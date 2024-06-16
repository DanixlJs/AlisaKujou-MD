import { promises } from 'fs'
import fs from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

  let tags = {
  'info': '𝐈𝐍𝐅𝐎',
  'jadibot': '𝐉𝐀𝐃𝐈𝐁𝐎𝐓',
  'search': '𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀𝐒',
  'downloader': '𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒',
  'internet': '𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓',
  'grupo': '𝐆𝐑𝐔𝐏𝐎',
  'audio': '𝐀𝐔𝐃𝐈𝐎',
  'rpg': '𝐑𝐏𝐆',
  'premium': '𝐏𝐑𝐄𝐌𝐈𝐔𝐌',
  'tools': '𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒',
  'sticker': '𝐒𝐓𝐈𝐂𝐊𝐄𝐑',
  'ai': '𝐈. 𝐀𝐑𝐓𝐈𝐅𝐈𝐂𝐈𝐀𝐋',
  'anime': '𝐀𝐍𝐈𝐌𝐄',
  'nsfw': '𝐍𝐒𝐅𝐖',
  'mods': '𝐌𝐎𝐃𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒',
  'owner': '𝐂𝐑𝐄𝐀𝐃𝐎𝐑',
  'advanced': '𝐀𝐕𝐀𝐍𝐙𝐀𝐃𝐎'
  }

const defaultMenu = { before: `
┏━━━━━━━━━━━━━━━━━━━╼
┃╭──────────────────╸
┃│ᰔ %greeting %taguser
┃│❖ 𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚𝐥 𝐌𝐞𝐧𝐮 ❖
┃╰──────────────────╸
┃╭──────────────────╸
┃│   ᦗ 𝐈𝐍𝐅𝐎 𝐀𝐋𝐈𝐒𝐀 ᦗ
┃│
┃│「👑」 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲: DanixlJs
┃│「📌」 𝐓𝐢𝐩𝐨: %sbot
┃│「✏️」 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: ${global.vs}
┃│「📁」 𝐄𝐧𝐭𝐨𝐫𝐧𝐨: Nodejs
┃│「📚」 𝐁𝐚𝐢𝐥𝐞𝐲𝐬: MultiDivice ^6.7.5
┃│「🕐」 𝐀𝐜𝐭𝐢𝐯𝐨: %muptime
┃│「📝」 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐬: %rtotalreg
┃│「📈」 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐞𝐣𝐞𝐜𝐮𝐭𝐚𝐝𝐨𝐬: ${global.db.data.settings[this.user.jid].botcommandCount}
┃│「🖇️」 𝐒𝐮𝐛𝐁𝐨𝐭 𝐀𝐜𝐭𝐢𝐯𝐨𝐬: ${global.totalUsers}
┃╰─────────────────╼
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎`.trimStart(),
  header: '┃╭──────────────────╸\n┃│ ᰔᩚ「 %category 」ᰔᩚ',
  body: '┃│✦ *%cmd*\n',
  footer: '┃╰──────────────────╸',
  after: '┗━━━━━━━━━━━━━━━━━━━╼',
}


let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
if (m.sender === conn.user.jid) return;
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { experiencia, diamantes, level } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registrado == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamantes: plugin.diamantes,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : ``) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamantes/g, menu.diamantes ? '' : '')
                .replace(/%isPremium/g, menu.premium ? '' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
      wasp: '@0',
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      version: _package.version,
      sbot: (conn.user.jid == global.conn.user.jid ? 'Main-Bot' : 'Sub-Bot'), 
      npmdesc: _package.description,
      npmmain: _package.main,
      author: _package.author.name,
      license: _package.license,
      experiencia: experiencia - min,
      maxexp: xp,
      totalexp: experiencia,
      xp4levelup: max - experiencia,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      greeting, level, diamantes, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

  let category = "video"
  const dbPath = './media/database/db.json'
  const dbData = JSON.parse(fs.readFileSync(dbPath))
  const randomIndex = Math.floor(Math.random() * dbData.links[category].length)
  const randomVideo = dbData.links[category][randomIndex]
  global.vid = randomVideo
  const response = await fetch(vid)
  const gif = await response.buffer()
  
  await conn.reply(m.chat, '> ╭─────────────────╸\n> │❀ 𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐌𝐞𝐧𝐮\n> │ ◈ Espere un momento.\n> ╰─────────────────╸', m, fake,)
  m.react('🤍')

  await conn.sendMessage(m.chat, { video: gif, caption: text.trim(), gifPlayback: true, mentions: [m.sender] }, "MessageVideo", { mimetype: "gif", quoted: m })
  } catch (e) {
    conn.reply(m.chat, '❀ Ocurrió un error inesperado.', m)
    throw e
  }
}

handler.help = ['menu']
handler.tags = ['info']
handler.command = ['menú', 'menu', 'help'] 
handler.registrado = false

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Buenas Noches 🌙'; break;
  case 1: hour = 'Buenas Noches 💤'; break;
  case 2: hour = 'Buenas Noches 🦉'; break;
  case 3: hour = 'Buenos Días ✨'; break;
  case 4: hour = 'Buenos Días 💫'; break;
  case 5: hour = 'Buenos Días 🌅'; break;
  case 6: hour = 'Buenos Días 🌄'; break;
  case 7: hour = 'Buenos Días 🌅'; break;
  case 8: hour = 'Buenos Días 💫'; break;
  case 9: hour = 'Buenos Días ✨'; break;
  case 10: hour = 'Buenos Días 🌞'; break;
  case 11: hour = 'Buenos Días 🌨'; break;
  case 12: hour = 'Buenos Días ❄'; break;
  case 13: hour = 'Buenos Días 🌤'; break;
  case 14: hour = 'Buenas Tardes 🌇'; break;
  case 15: hour = 'Buenas Tardes 🥀'; break;
  case 16: hour = 'Buenas Tardes 🌹'; break;
  case 17: hour = 'Buenas Tardes 🌆'; break;
  case 18: hour = 'Buenas Noches 🌙'; break;
  case 19: hour = 'Buenas Noches 🌃'; break;
  case 20: hour = 'Buenas Noches 🌌'; break;
  case 21: hour = 'Buenas Noches 🌃'; break;
  case 22: hour = 'Buenas Noches 🌙'; break;
  case 23: hour = 'Buenas Noches 🌃'; break;
}
  var greeting = hour;
