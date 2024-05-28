import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

  let tags = {
  'info': '- *MENU-INFO*',
  'dadibot': '- *MENU-SERBOT*',
  'search': 'MENU-BUSQUEDAS',
  'downloader': '- *MENU-DESCARGAS*',
  'internet': '- *MENU-INTERNET*',
  'audio': '- *MENU-AUDIOS*',
  'rpg': '- *MENU-RPG*',
  'fun': '- *MENU-DIVERSIÓN*',
  'premium': '- *MENU-PREMIUM*',
  'tools': '- *MENU-HERRAMIENTAS*',
  'sticker': '- *MENU-STICKER*',
  'transformador': '- *MENU-TRANSFORMADOR*',
  'ai': '- *MENU-AI*',
  'anime': '- *MENU-ANIME*',
  'nsfw': '- *MENU-NSFW*'
  
  }

const defaultMenu = { before: `- *REM CHAM-MD*
- *Hola %taguser*, %greeting
- Bienvenido al Menu.

- *INFO-USER*
- *Nombre:* %name
- *Exp:* %totalexp
- *Diamantes:* %limit
- *Level:* %level

- *INFO-BOT*
- *Developer:* %author
- *Tipo:* %sbot
- *Entorno:* Nodejs
- *Baileys:* MultiDivice ^6.7.2
- *Activo:* %muptime
- *Registrados:* %totalexp

- *CREDITOS*
- *Nombre:* Diego-YL-117
- *GitHub:* github.com/Diego-YL-117

- *LISTA DE COMANDOS*
`.trimStart(),
  header: '- 〔  %category  〕',
  body: '- *%cmd*\n',
  footer: '',
  after: '',
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level } = global.db.data.users[m.sender]
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
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
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
                .replace(/%islimit/g, menu.limit ? '' : '')
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
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      greeting, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

const pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

await m.reply('> Cargando menu...')

m.react('🌸') 

conn.sendMessage(m.chat, { video: global.vid, caption: text.trim(), mentions: [m.sender] }, { quoted: estilo })

  } catch (e) {
    conn.reply(m.chat, 'Ocurrió un error...', m)
    throw e
  }
}

handler.help = ['menu']
handler.tags = ['info']
handler.command = ['menú', 'menu'] 
handler.register = true 
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
  case 14: hour = 'Buenos Tardes 🌇'; break;
  case 15: hour = 'Buenos Tardes 🥀'; break;
  case 16: hour = 'Buenos Tardes 🌹'; break;
  case 17: hour = 'Buenos Tardes 🌆'; break;
  case 18: hour = 'Buenas Noches 🌙'; break;
  case 19: hour = 'Buenas Noches 🌃'; break;
  case 20: hour = 'Buenas Noches 🌌'; break;
  case 21: hour = 'Buenas Noches 🌃'; break;
  case 22: hour = 'Buenas Noches 🌙'; break;
  case 23: hour = 'Buenas Noches 🌃'; break;
}
  var greeting = hour;