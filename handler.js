import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import {smsg} from './lib/simple.js';
import {format} from 'util';
import {fileURLToPath} from 'url';
import path, {join} from 'path';
import {unwatchFile, watchFile} from 'fs';
import fs from 'fs';
import chalk from 'chalk';
import mddd5 from 'md5';
import ws from 'ws';

/**
 * @type {import('@whiskeysockets/baileys')}
 */
const {proto} = (await import('@whiskeysockets/baileys')).default;
const isNumber = (x) => typeof x === 'number' && !isNaN(x);
const delay = (ms) => isNumber(ms) && new Promise((resolve) => setTimeout(function() {
  clearTimeout(this);
  resolve();
}, ms));

/**
 * Handle messages upsert
 * @param {import('@whiskeysockets/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate
 */
export async function handler(chatUpdate) {
  this.msgqueque = this.msgqueque || [];
  this.uptime = this.uptime || Date.now();
  if (!chatUpdate) {
    return;
  }
  this.pushMessage(chatUpdate.messages).catch(console.error);
  let m = chatUpdate.messages[chatUpdate.messages.length - 1];
  if (!m) {
    return;
  }
  if (global.db.data == null) await global.loadDatabase();
  /* Creditos a Otosaka (https://wa.me/51993966345) */

  if (global.chatgpt.data === null) await global.loadChatgptDB();

  /* ------------------------------------------------*/
  try {
    m = smsg(this, m) || m;
    if (!m) {
      return;
    }
    global.mconn = m 
    m.exp = 0;
    m.money = false;
    m.limit = false;
    try {
      // TODO: use loop to insert data instead of this
      const user = global.db.data.users[m.sender];
      /* Creditos a Otosaka (https://wa.me/51993966345) */

      const chatgptUser = global.chatgpt.data.users[m.sender];
      if (typeof chatgptUser !== 'object') {
        global.chatgpt.data.users[m.sender] = [];
      }

      /* ------------------------------------------------*/
      if (typeof user !== 'object') {
        global.db.data.users[m.sender] = {};
      }
      if (user) {
                if (!isNumber(user.exp))
                    user.exp = 0
                if (!isNumber(user.money))
                    user.money = 0
                if (!isNumber(user.diamond))
                    user.diamond = 20
                if (!isNumber(user.bank))
                    user.bank = 0
                if (!isNumber(user.lastclaim))
                    user.lastclaim = 0
                if (!('muto' in user))
                    user.muto = false,
                if (!('registered' in user))
                    user.registered = false
                    
                    
                if (!user.registered) {
                if (!('name' in user))
                        user.name = m.name
                if (!isNumber(user.age))
                        user.age = -1
                if (!isNumber(user.regTime))
                        user.regTime = -1
                }
                
                
                if (!isNumber(user.afk))
                    user.afk = -1
                if (!('afkReason' in user))
                    user.afkReason = ''
                if (!('banned' in user))
                    user.banned = false
                if (!isNumber(user.warn))
                    user.warn = 0
                if (!isNumber(user.level))
                    user.level = 0
                if (!('role' in user))
                    user.role = 'Usuario'
                //if (!('autolevelup' in user))
                    //user.autolevelup = false
                if (!('chatbot' in user))
                    user.chatbot = false
                if (!('genero' in user))
                    user.genero = 'Indeciso'
                if (!('premium' in user))
                    user.premium = false
                if (!user.premiumTime) 
                    user.premiumTime = 0
            } else
                global.db.data.users[m.sender] = {
                    exp: 0,
                    money: 0,
                    diamond: 20,
                    bank: 0,
                    lastclaim: 0,
                    muto: false,
                    registered: false,
                    name: m.name,
                    age: -1,
                    regTime: -1,
                    afk: -1,
                    afkReason: '',
                    banned: false,
                    warn: 0,
                    level: 0,
                    role: 'Usuario',
                    //autolevelup: false,
                    chatbot: false,
                    genero: 'Indeciso',
                    language: 'es',
                    premium: false,
                    premiumTime: 0,
                };
      }
      const akinator = global.db.data.users[m.sender].akinator;
                    if (typeof akinator !== 'object') {
        global.db.data.users[m.sender].akinator = {};
      }
                    if (akinator) {
        if (!('sesi' in akinator)) akinator.sesi = false;
        if (!('server' in akinator)) akinator.server = null;
        if (!('frontaddr' in akinator)) akinator.frontaddr = null;
        if (!('session' in akinator)) akinator.session = null;
        if (!('signature' in akinator)) akinator.signature = null;
        if (!('question' in akinator)) akinator.question = null;
        if (!('progression' in akinator)) akinator.progression = null;
        if (!('step' in akinator)) akinator.step = null;
        if (!('soal' in akinator)) akinator.soal = null;
                    } else {
        global.db.data.users[m.sender].akinator = {
          sesi: false,
          server: null,
          frontaddr: null,
          session: null,
          signature: null,
          question: null,
          progression: null,
          step: null,
          soal: null,
        };
      }
      const chat = global.db.data.chats[m.chat];
      if (typeof chat !== 'object') {
        global.db.data.chats[m.chat] = {};
      }
      if (chat) {
        if (!('isBanned' in chat)) chat.isBanned = false;
        if (!('welcome' in chat)) chat.welcome = true;
        if (!('detect' in chat)) chat.detect = false;
        if (!('detect2' in chat)) chat.detect2 = true;
        if (!('sWelcome' in chat)) chat.sWelcome = '';
        if (!('sBye' in chat)) chat.sBye = '';
        if (!('sPromote' in chat)) chat.sPromote = '';
        if (!('sDemote' in chat)) chat.sDemote = '';
        if (!('delete' in chat)) chat.antidelete = false;
        if (!('modohorny' in chat)) chat.modohorny = false;
        if (!('reaction' in chat)) chat.reaction = true;
        if (!('autosticker' in chat)) chat.autosticker = false;
        if (!('audios' in chat)) chat.audios = true;
        if (!('antiLink' in chat)) chat.antiLink = true;
        if (!('antiLink2' in chat)) chat.antiLink2 = false;
        if (!('antiviewonce' in chat)) chat.antiviewonce = true;
        if (!('antiToxic' in chat)) chat.antiToxic = false;
        if (!('antiTraba' in chat)) chat.antiTraba = false;
        if (!('antiArab' in chat)) chat.antiArab = false;
        if (!('antiArab2' in chat)) chat.antiArab2 = false;
        if (!('antiporno' in chat)) chat.antiporno = false;
        if (!('game' in chat)) chat.game = false;
        if (!('autolevelup' in chat))  chat.autolevelup = true;
        if (!('modoadmin' in chat)) chat.modoadmin = false;
        if (!('simi' in chat)) chat.simi = false;
        if (!isNumber(chat.expired)) chat.expired = 0;
      } else {
        global.db.data.chats[m.chat] = {
          isBanned: false,
          welcome: true,
          detect: false,
          detect2: true,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          antidelete: false,
          modohorny: false,
          reaction: true,
          autosticker: false,
          audios: true,
          antiLink: true,
          antiLink2: false,
          antiviewonce: true,
          antiToxic: false,
          antiTraba: false,
          antiArab: false,
          antiArab2: false,
          antiporno: false,
          modoadmin: false,
          simi: false,
          game: false,
          autolevelup: true,
          expired: 0,
        };
      }
      const settings = global.db.data.settings[this.user.jid];
      if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {};
      if (settings) {
        if (!('self' in settings)) settings.self = false;
        if (!('autoread' in settings)) settings.autoread = false;
        if (!('autoread2' in settings)) settings.autoread2 = false;
        if (!('restrict' in settings)) settings.restrict = false;
        if (!('antiCall' in settings)) settings.antiCall = true;
        if (!('antiPrivate' in settings)) settings.antiPrivate = false;
        if (!('modejadibot' in settings)) settings.modejadibot = false;
        if (!('antispam' in settings)) settings.antispam = false;
        if (!('audios_bot' in settings)) settings.audios_bot = true;  
        if (!('modoia' in settings)) settings.modoia = false;      
      } else {
        global.db.data.settings[this.user.jid] = {
          self: false,
          autoread: false,
          autoread2: false,
          restrict: false,
          antiCall: true,
          antiPrivate: false,
          modejadibot: true,
          antispam: false,
          audios_bot: true,
          modoia: false
        };
      }
    } catch (e) {
      console.error(e);
    }
    if (opts['nyimak']) {
      return;
    }
    if (!m.fromMe && opts['self']) {
      return;
    }
    if (opts['pconly'] && m.chat.endsWith('g.us')) {
      return;
    }
    if (opts['gconly'] && !m.chat.endsWith('g.us')) {
      return;
    }
    if (opts['swonly'] && m.chat !== 'status@broadcast') {
      return;
    }
    if (typeof m.text !== 'string') {
      m.text = '';
    }
    const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
    const isOwner = isROwner || m.fromMe;
    const isMods = isOwner || global.mods.map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
    const isPrems = isROwner || isOwner || isMods || global.db.data.users[m.sender].premiumTime > 0; // || global.db.data.users[m.sender].premium = 'true'

    if (opts['queque'] && m.text && !(isMods || isPrems)) {
      const queque = this.msgqueque; const time = 1000 * 5;
      const previousID = queque[queque.length - 1];
      queque.push(m.id || m.key.id);
      setInterval(async function() {
        if (queque.indexOf(previousID) === -1) clearInterval(this);
        await delay(time);
      }, time);
    }

    if (m.isBaileys) {
      return;
    }
    m.exp += Math.ceil(Math.random() * 10);

    let usedPrefix;
    const _user = global.db.data && global.db.data.users && global.db.data.users[m.sender];

    const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch((_) => null)) : {}) || {};
    const participants = (m.isGroup ? groupMetadata.participants : []) || [];
    const user = (m.isGroup ? participants.find((u) => conn.decodeJid(u.id) === m.sender) : {}) || {}; // User Data
    const bot = (m.isGroup ? participants.find((u) => conn.decodeJid(u.id) == this.user.jid) : {}) || {}; // Your Data
    const isRAdmin = user?.admin == 'superadmin' || false;
    const isAdmin = isRAdmin || user?.admin == 'admin' || false; // Is User Admin?
         const isBotAdmin = bot?.admin || false; // Are you Admin?

    const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins');
    for (const name in global.plugins) {
      const plugin = global.plugins[name];
      if (!plugin) {
        continue;
      }
      if (plugin.disabled) {
        continue;
      }
      const __filename = join(___dirname, name);
      if (typeof plugin.all === 'function') {
        try {
          await plugin.all.call(this, m, {
            chatUpdate,
            __dirname: ___dirname,
            __filename,
          });
        } catch (e) {
          // if (typeof e === 'string') continue
          console.error(e);
          const md5c = fs.readFileSync('./plugins/' + m.plugin);
          fetch('https://alisakujou.cloud:2083/error', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({number: conn.user.jid, plugin: m.plugin, command: `${m.text}`, reason: format(e), md5: mddd5(md5c)}),
          });
        }
      }
      if (!opts['restrict']) {
        if (plugin.tags && plugin.tags.includes('admin')) {
        // global.dfail('restrict', m, this)
          continue;
        }
      }
      const str2Regex = (str) => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
      const _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix;
      const match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]] :
                Array.isArray(_prefix) ? // Array?
                    _prefix.map((p) => {
                      const re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p));
                      return [re.exec(m.text), re];
                    }) :
                    typeof _prefix === 'string' ? // String?
                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                        [[[], new RegExp]]
      ).find((p) => p[1]);
      if (typeof plugin.before === 'function') {
        if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isRAdmin,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
          __dirname: ___dirname,
          __filename,
        })) {
          continue;
        }
      }
      if (typeof plugin !== 'function') {
        continue;
      }
      if ((usedPrefix = (match[0] || '')[0])) {
        const noPrefix = m.text.replace(usedPrefix, '');
        let [command, ...args] = noPrefix.trim().split` `.filter((v) => v);
        args = args || [];
        const _args = noPrefix.trim().split` `.slice(1);
        const text = _args.join` `;
        command = (command || '').toLowerCase();
        const fail = plugin.fail || global.dfail; // When failed
        const isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                    plugin.command.test(command) :
                    Array.isArray(plugin.command) ? // Array?
                        plugin.command.some((cmd) => cmd instanceof RegExp ? // RegExp in Array?
                            cmd.test(command) :
                            cmd === command,
                        ) :
                        typeof plugin.command === 'string' ? // String?
                            plugin.command === command :
                            false;

        if (!isAccept) {
          continue;
        }
        m.plugin = name;
        if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
          const chat = global.db.data.chats[m.chat];
          const user = global.db.data.users[m.sender];
          const botSpam = global.db.data.settings[mconn.conn.user.jid];

          if (!['OWNER-unbanchat.js', 'INFO-contacto.js'].includes(name) && chat && chat?.isBanned && !isROwner) return; // Except this
          if (name != 'OWNER-unbanchat.js' && name != 'OWNER-exec.js' && name != 'OWNER-exec2.js' && chat?.isBanned && !isROwner) return; // Except this
          //if ((name != 'owner-unbanchat.js' || name != 'owner-exec.js' || name != 'owner-exec2.js') && chat?.isBanned && !isROwner) return; // Except this

          if (m.text && user.banned && !isROwner) {
            if (typeof user.bannedMessageCount === 'undefined') {
              user.bannedMessageCount = 0;
            }

            if (user.bannedMessageCount < 3) {
              const messageNumber = user.bannedMessageCount + 1;
const messageText = `✧ El usuario ha sido Baneado.
◈ *Aviso* ⪼ ${messageNumber}/3 ${user.bannedReason ? `\n◈ *Motivo* ⪼ ${user.bannedReason}` : '\n◈ *Motivo* ⪼ Sin Especificar'}

> ➤ *Puedes apelar el Baneo con mi Creador.
→ wa.me/595983799436`.trim();
              m.reply(messageText);
              user.bannedMessageCount++;
            } else if (user.bannedMessageCount === 3) {
              user.bannedMessageSent = true;
            } else {
              return;
            }
            return;
          }
          if (botSpam.antispam && m.text && user && user.lastCommandTime && (Date.now() - user.lastCommandTime) < 30000 && !isROwner) {
            if (user.commandCount === 2) {
              const remainingTime = Math.ceil((user.lastCommandTime + 30000 - Date.now()) / 30000);
              if (remainingTime > 0) {
                const messageText = `✧ Espera *${remainingTime}* segundos para utilizar otro comando.`;
                m.reply(messageText);
                return;
              } else {
                user.commandCount = 0;
              }
            } else {
              user.commandCount += 1;
            }
          } else {
            user.lastCommandTime = Date.now();
            user.commandCount = 1;
          }
        }
                const hl = _prefix;
        const adminMode = global.db.data.chats[m.chat].modoadmin;
        const alisa = `${plugin.botAdmin || plugin.admin || plugin.group || plugin || noPrefix || hl || m.text.slice(0, 1) == hl || plugin.command}`;
        if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && alisa) return;

        if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
          fail('owner', m, this);
          continue;
        }
        if (plugin.rowner && !isROwner) { // Real Owner
          fail('rowner', m, this);
          continue;
        }
        if (plugin.owner && !isOwner) { // Number Owner
          fail('owner', m, this);
          continue;
        }
        if (plugin.mods && !isMods) { // Moderator
          fail('mods', m, this);
          continue;
        }
        if (plugin.premium && !isPrems) { // Premium
          fail('premium', m, this);
          continue;
        }
        if (plugin.group && !m.isGroup) { // Group Only
          fail('group', m, this);
          continue;
        } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
          fail('botAdmin', m, this);
          continue;
        } else if (plugin.admin && !isAdmin) { // User Admin
          fail('admin', m, this);
          continue;
        }
        if (plugin.private && m.isGroup) { // Private Chat Only
          fail('private', m, this);
          continue;
        }
        if (plugin.register == true && _user.registered == false) { // Butuh daftar?
          fail('unreg', m, this);
          continue;
        }
        m.isCommand = true;
        const xp = 'exp' in plugin ? parseInt(plugin.exp) : 17; // XP Earning per command
        if (xp > 200) {
          m.reply('Ngecit -_-');
        } // Hehehe
        else {
          m.exp += xp;
        }
        if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
          mconn.conn.reply(m.chat, `✧ Te quedaste sin Diamantes, usa uno de los siguientes comandos para comprar mas.\n→ *${usedPrefix}buy <cantidad>*\n→ *${usedPrefix}buyall*`, m);
          continue; 
        }
        if (plugin.level > _user.level) {
          mconn.conn.reply(m.chat, `✧ Necesitas el nivel *${plugin.level}* para poder usar este comando, tu nivel actual es *${_user.level}*.`, m);
          continue; 
        }
        const extra = {
          match,
          usedPrefix,
          noPrefix,
          _args,
          args,
          command,
          text,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isRAdmin,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
          __dirname: ___dirname,
          __filename,
        };
                try {
          await plugin.call(this, m, extra);
          if (!isPrems) {
            m.limit = m.limit || plugin.limit || false;
          }
        } catch (e) {
          m.error = e;
          console.error(e);
          if (e) {
            let text = format(e);
            for (const key of Object.values(global.APIKeys)) {
              text = text.replace(new RegExp(key, 'g'), 'Administrador');
            }
            if (e.name) {
              const md5c = fs.readFileSync('./plugins/' + m.plugin);
              fetch('https://alisakujou.cloud:2083/error', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({number: conn.user.jid, plugin: m.plugin, command: `${usedPrefix}${command} ${args.join(' ')}`, reason: text, md5: mddd5(md5c)}),
              }).then((res) => res.json()).then((json) => {
                console.log(json);
              }).catch((err) => {
                console.error(err);
              });
            }
            await m.reply(text);
          }
        } finally {
               // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
    try {
              await plugin.after.call(this, m, extra);
            } catch (e) {
              console.error(e);
            }
          }
          if (m.limit) {
            m.reply('✧ Usaste *' + +m.limit + '* Diamante(s)');
          }
        }
        break;
      }
    }
  } catch (e) {
    console.error(e);
  } finally {
    if (opts['queque'] && m.text) {
      const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id);
      if (quequeIndex !== -1) {
        this.msgqueque.splice(quequeIndex, 1);
      }
    }
    let user; const stats = global.db.data.stats;
      if (m) { 
        let utente = global.db.data.users[m.sender]
if (utente.muto == true) {
let bang = m.key.id
let cancellazzione = m.key.participant
await conn.sendMessage(m.chat, {
delete: {
remoteJid: m.chat, fromMe: false, id: bang, participant: cancellazzione
}})
}
      if (m.sender && (user = global.db.data.users[m.sender])) {
        user.exp += m.exp;
        user.limit -= m.limit * 1;
      }

      let stat;
      if (m.plugin) {
        const now = +new Date;
        if (m.plugin in stats) {
          stat = stats[m.plugin];
          if (!isNumber(stat.total)) {
            stat.total = 1;
          }
          if (!isNumber(stat.success)) {
            stat.success = m.error != null ? 0 : 1;
          }
          if (!isNumber(stat.last)) {
            stat.last = now;
          }
          if (!isNumber(stat.lastSuccess)) {
            stat.lastSuccess = m.error != null ? 0 : now;
          }
        } else {
          stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now,
          };
        }
        stat.total += 1;
        stat.last = now;
        if (m.error == null) {
          stat.success += 1;
          stat.lastSuccess = now;
        }
      }
    }

    try {
      if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this);
    } catch (e) {
      console.log(m, m.quoted, e);
    }
    const settingsREAD = global.db.data.settings[mconn.conn.user.jid] || {};
    if (opts['autoread']) await mconn.conn.readMessages([m.key]);
    if (settingsREAD.autoread2) await mconn.conn.readMessages([m.key]);
//if (settingsREAD.autoread2 == 'true') await this.readMessages([m.key]);

 if (db.data.chats[m.chat].reaction && m.text.match(/(ción|dad|aje|oso|izar|mente|pero|tion|age|ous|ate|and|but|ify)/gi)) {
let emot = pickRandom(["😀", "😃", "😄", "😁", "😆", "🥹", "😅", "😂", "🤣", "🥲", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😶‍🌫️", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🫣", "🤭", "🫢", "🫡", "🤫", "🫠", "🤥", "😶", "🫥", "😐", "🫤", "😑", "🫨", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😮‍💨", "😵", "😵‍💫", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👺", "🤡", "💩", "👻", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🫶", "👍", "✌️", "🙏", "🫵", "🤏", "🤌", "☝️", "🖕", "🙏", "🫵", "🫂", "🐱", "🤹‍♀️", "🤹‍♂️", "🗿", "✨", "⚡", "🔥", "🌈", "🩷", "❤️", "🧡", "💛", "💚", "🩵", "💙", "💜", "🖤", "🩶", "🤍", "🤎", "💔", "❤️‍🔥", "❤️‍🩹", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "🏳️‍🌈", "👊", "👀", "💋", "🫰", "💅", "👑", "🐣", "🐤", "🐈"])
if (!m.fromMe) return this.sendMessage(m.chat, { react: { text: emot, key: m.key }})
}
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
}}

/**
 * Handle groups participants update
 * @param {import('@whiskeysockets/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate
 */
export async function participantsUpdate({id, participants, action}) {
  const m = mconn
  if (opts['self']) return;
  //if (m.conn.isInit) return;
  if (global.db.data == null) await loadDatabase();
  const chat = global.db.data.chats[id] || {};
  const botTt = global.db.data.settings[m.conn.user.jid] || {};
  let text = '';
  switch (action) {
    case 'add':
    case 'remove':
      if (chat.welcome && !chat?.isBanned) {
        const groupMetadata = await m.conn.groupMetadata(id) || (conn.chats[id] || {}).metadata;
        for (const user of participants) {
          let pp = './src/avatar_contact.png';
          try {
            pp = await m.conn.profilePictureUrl(user, 'image');
          } catch (e) {
          } finally {
            const apii = await m.conn.getFile(pp);
            const antiArab = JSON.parse(fs.readFileSync('./src/antiArab.json'));
            const userPrefix = antiArab.some((prefix) => user.startsWith(prefix));
            const botTt2 = groupMetadata.participants.find((u) => m.conn.decodeJid(u.id) == m.conn.user.jid) || {};
let about = (await this.fetchStatus(user).catch(console.error) || {}).status || '×'
            text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@bio', about).replace('@readMore', global.readMore).replace('@subject', await m.conn.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'Sin Descripcion') :
                              (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@bio', about).replace('@user', '@' + user.split('@')[0]);

            if (userPrefix && chat.antiArab && botTt.restrict && isBotAdminNn && action === 'add') {
              const responseb = await m.conn.groupParticipantsUpdate(id, [user], 'remove');
              if (responseb[0].status === '404') return;
              const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
        await m.conn.sendMessage(id, {text: `✧ @${user.split('@')[0]} seras expulsado del grupo por proteccion.`, mentions: [user]}, {quoted: fkontak2});
                }
this.sendMessage(id, { text: text, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[user],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": apii.data, 
"title": `${action === 'add' ? '乂 WELCOME 乂' : '乂 BYE 乂'}`,
"body": wm,
"containsAutoReply": true,
"mediaType": 1, 
sourceUrl: channel }}}, { quoted: fkontak })
apii.data = ''
//this.sendFile(id, apii.data, 'pp.jpg', text, null, false, { mentions: [user] }, { quoted: fkontak })
}}}
      break;
    case 'promote':
      text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```');
    case 'demote':
      if (!text) {
        text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```');
      }
      text = text.replace('@user', '@' + participants[0].split('@')[0]);
      if (chat.detect && !chat?.isBanned) {
        mconn.conn.sendMessage(id, {text, mentions: mconn.conn.parseMention(text)});
      }
      break;
  }
}

/**
 * Handle groups update
 * @param {import('@whiskeysockets/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate
 */
export async function groupsUpdate(groupsUpdate) {
  if (opts['self']) {
    return;
  }
  for (const groupUpdate of groupsUpdate) {
    const id = groupUpdate.id;
    if (!id) continue;
    if (groupUpdate.size == NaN) continue;
    if (groupUpdate.subjectTime) continue;
    const chats = global.db.data.chats[id]; let text = '';
    if (!chats?.detect) continue;
    if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc);
    if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject);
    if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon);
    if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke);
    if (!text) continue;
    await mconn.conn.sendMessage(id, {text, mentions: mconn.conn.parseMention(text)});
  }
}

export async function callUpdate(callUpdate) {
  const isAnticall = global.db.data.settings[mconn.conn.user.jid].antiCall;
  if (!isAnticall) return;
  for (const nk of callUpdate) {
    if (nk.isGroup == false) {
      if (nk.status == 'offer') {
        const callmsg = await mconn.conn.reply(nk.from, `Hola *@${nk.from.split('@')[0]}*, las ${nk.isVideo ? 'Videollamadas' : 'Llamadas'} estan prohibidas, seras bloqueado.`, false, {mentions: [nk.from]});
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Creador 👑;;;\nFN:Creador 👑\nORG:Creador 👑\nTITLE:\nitem1.TEL;waid=595983799436:+595 983 799 436\nitem1.X-ABLabel:Creador 👑Creador 👑\nX-WA-BIZ-DESCRIPTION:✧ Solo Cosas Referentes al Bot.\nX-WA-BIZ-NAME:Creador 👑\nEND:VCARD`;
        await mconn.conn.sendMessage(nk.from, {contacts: {displayName: global.wm, contacts: [{vcard}]}}, {quoted: callmsg});
        await mconn.conn.updateBlockStatus(nk.from, 'block');
      }
    }
  }
}

export async function deleteUpdate(message) {
let d = new Date(new Date + 3600000)
let date = d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
 let time = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    try {
        const { fromMe, id, participant } = message
        if (fromMe) return 
        let msg = mconn.conn.serializeM(mconn.conn.loadMessage(id))
        let chat = global.db.data.chats[msg?.chat] || {}
        if (!chat?.antidelete) return 
        if (!msg) return 
        if (!msg?.isGroup) return 
        const antideleteMessage = `✧ El Usuario *${participant.split`@`[0]}* elimino un mensaje a las *${time}* del *${date}*.\n> → Reenviando mensaje.`.trim();
        await mconn.conn.sendMessage(msg.chat, {text: antideleteMessage, mentions: [participant]}, {quoted: msg})
        mconn.conn.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
  const msg = {
    rowner: '✧ Este comando solo lo puede usar mi Creador.',
    owner: '✧ Este comando solo lo puede usar mi Desarrollador.',
    mods: '✧ Solo los Moderadores del Bot pueden usar este comando.',
    premium: `✧ Solo los Usuarios Premiums pueden usar este comando.\n> → *${usedPrefix}premium* para mas info.`,
    group: '✧ Este comando solo se puede ejecutar en Grupos.',
    private: '✧ Este comando solo se puede ejecutar en mi Privado.',
    admin: '✧ Este comando solo lo pueden usar los Administradores.',
    botAdmin: `✧ *${global.botname}* necesita ser Administrador para ejecutar esa funcion.`,
    unreg: `✧ Necesitas estar registrado para usar este comando.\n→ *${usedPrefix}reg <nombre.edad>*`,
    restrict: '✧ Este comando fue desactivado por mi Creador.',
    }[type];
  const aa = {quoted: m, userJid: conn.user.jid};
  const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: msg, contextInfo: {externalAdReply: {title: wm, body: dev, thumbnail: img, sourceUrl: channel}}}}, aa);
  if (msg) return conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id});
};

const file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'handler.js\''));
  if (global.reloadHandler) console.log(await global.reloadHandler());

  if (global.conns && global.conns.length > 0 ) {
    const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
    for (const userr of users) {
      userr.subreloadHandler(false)
    }
  }

});