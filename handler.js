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

const {proto} = (await import('@whiskeysockets/baileys')).default;
const isNumber = (x) => typeof x === 'number' && !isNaN(x);
const delay = (ms) => isNumber(ms) && new Promise((resolve) => setTimeout(function() {
  clearTimeout(this);
  resolve();
}, ms));

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

  if (global.chatgpt.data === null) await global.loadChatgptDB();

  try {
    m = smsg(this, m) || m;
    if (!m) {
      return;
    }
    global.mconn = m 
    m.experiencia = 0;
    m.alisacoins = false;
    m.diamantes = false;
    try {
      const user = global.db.data.users[m.sender];

      const chatgptUser = global.chatgpt.data.users[m.sender];
      if (typeof chatgptUser !== 'object') {
        global.chatgpt.data.users[m.sender] = [];
      }
      if (typeof user !== 'object') {
        global.db.data.users[m.sender] = {};
      } 
    if (user) {
	if (!('premium' in user)) user.premium = false;
	if (!isNumber(user.diamantes)) user.diamantes = 20;
	if (!isNumber(user.alisacoins)) user.alisacoins = 500;
	if (!isNumber(user.experiencia)) user.experiencia = 0;
	if (!isNumber(user.bank)) user.bank = 0;
	if (!isNumber(user.bank2)) user.bank2 = 0;
	if (!('registrado' in user)) user.registrado = false;
	if (!user.registrado) {
		if (!('name' in user)) user.name = '';
		if (!isNumber(user.edad)) user.edad = -1;
		if ((!'genero' in user)) user.genero = 'Indefinido';
		if (!isNumber(user.regtime)) user.regtime = -1;
		if (!('desc' in user)) user.desc = '';
	}
	    if (!isNumber(user.muto)) user.muto = false;
		if (!isNumber(user.premiumTime)) user.premiumTime = -1;
		if (!isNumber(user.afk)) user.afk = -1;
		if (!('afkRazon' in user)) user.afkRazon = '';
		if (!('rango' in user)) user.rango = 'Guerrero V';
        if (!isNumber(user.level)) user.level = 0;
		if (!isNumber(user.claimtime)) user.claimtime = -1;
		if (!isNumber(user.cofretime)) user.cofretime = -1;
		if (!isNumber(user.crimetime)) user.crimetime = -1;
		if (!isNumber(user.robtime)) user.robtime = -1;
		if (!isNumber(user.minetime)) user.minetime = -1;
	        if (!isNumber(user.minetime2)) user.minetime2 = -1;
	        if (!isNumber(user.minetime3)) user.minetime3 = -1;
		if (!isNumber(user.reportime)) user.reportime = -1;
		if (!isNumber(user.suggestime)) user.suggestime = -1;
		if (!isNumber(user.adventure)) user.adventure = -1;
		if (!isNumber(user.sluttime)) user.sluttime = -1;
		if (!isNumber(user.worktime)) user.worktime = -1;
		if (!('baneado' in user)) user.baneado = false;
		if (!('banRazon' in user)) user.banRazon = '';
		if (!isNumber(user.warn)) user.warn = 0;
		if (!('warnRazon' in user)) user.warnRazon = '';
	} else {
      global.db.data.users[m.sender] = {
		premium: false,
		diamantes: 20,
		alisacoins: 500,
		experiencia: 0,
	        bank: 0,
	        bank2: 0,
		registrado: false,
		name: m.name,
		edad: -1,
		genero: '',
		regtime: -1,
	        desc: '',
		muto: false,
		premiumTime: -1,
		afk: -1,
		afkRazon: '',
		rango: 'Guerrero V',
        level: 0,
		claimtime: -1,
		cofretime: -1,
		crimetime: -1,
		robtime: -1,
		minetime: -1,
	        minetime2: -1,
	        minetime3: -1,
  reportime: -1,
  suggestime: -1,
  adventure: -1,
		sluttime: -1,
		worktime: -1,
		baneado: false,
		banRazon: '',
		warn: 0,
		warnRazon: '',
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
        if (!('autosticker' in chat)) chat.autosticker = false;
        if (!('audios' in chat)) chat.audios = false;
        if (!('antiLink' in chat)) chat.antiLink = true;
        if (!('antiLink2' in chat)) chat.antiLink2 = false;
        if (!('antiviewonce' in chat)) chat.antiviewonce = false;
        if (!('antiToxic' in chat)) chat.antiToxic = false;
        if (!('antiTraba' in chat)) chat.antiTraba = true;
        if (!('antiArab' in chat)) chat.antiArab = false;
        if (!('antiporno' in chat)) chat.antiporno = false;
        if (!('game' in chat)) chat.game = false;
        if (!('autolevelup' in chat))  chat.autolevelup = true;
        if (!('modoadmin' in chat)) chat.modoadmin = false;
        if (!('simi' in chat)) chat.simi = false;
        if (!isNumber(chat.experienciaired)) chat.experienciaired = 0;
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
          autosticker: false,
          audios: false,
          antiLink: true,
          antiLink2: false,
          antiviewonce: false,
          antiToxic: false,
          antiTraba: true,
          antiArab: false,
          antiporno: false,
          modoadmin: false,
          simi: false,
          game: false,
          autolevelup: true,
          experienciaired: 0,
        };
      }
      const settings = global.db.data.settings[this.user.jid];
       if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {};
      if (settings) {
        if (!('botname' in settings)) settings.botname = 'AlisaBot-MD';
        if (!('botcoins' in settings)) settings.botcoins = 'AlisaCoins';
        if (!('botwm' in settings)) settings.botwm = 'Test wm';
        if (!('self' in settings)) settings.self = false;
        if (!('autoread' in settings)) settings.autoread = false;
        if (!('antiCall' in settings)) settings.antiCall = true;
        if (!('antiPrivate' in settings)) settings.antiPrivate = false;
        if (!('modejadibot' in settings)) settings.modejadibot = false;
        if (!('antispam' in settings)) settings.antispam = true;
        if (!('modoia' in settings)) settings.modoia = false;      
        if (!('botcommandCount' in settings)) settings.botcommandCount = 0;
      } else {
        global.db.data.settings[this.user.jid] = {
          botname: 'AlisaBot-MD',
          botcoins: 'AlisaCoins',
          botwm: 'Test wm',
          self: false,
          autoread: false,
          antiCall: true,
          antiPrivate: false,
          modejadibot: true,
          antispam: true,
          modoia: false,
          botcommandCount: 0,
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
    const isPrems = isROwner || isOwner || isMods || global.db.data.users[m.sender].premiumTime > 0; 

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
    m.experiencia += Math.ceil(Math.random() * 10);

    let usedPrefix;
    const _user = global.db.data && global.db.data.users && global.db.data.users[m.sender];

    const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch((_) => null)) : {}) || {};
    const participants = (m.isGroup ? groupMetadata.participants : []) || [];
    const user = (m.isGroup ? participants.find((u) => conn.decodeJid(u.id) === m.sender) : {}) || {}; 
    const bot = (m.isGroup ? participants.find((u) => conn.decodeJid(u.id) == this.user.jid) : {}) || {}; 
    const isRAdmin = user?.admin == 'superadmin' || false;
    const isAdmin = isRAdmin || user?.admin == 'admin' || false; 
        const isBotAdmin = bot?.admin || false; 

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

  if (m.sender === this.user.jid) {
    continue;
  }

  if (typeof plugin.all === 'function') {
    try {
      await plugin.all.call(this, m, {
        chatUpdate,
        __dirname: ___dirname,
        __filename,
      });
    } catch (e) {
      console.log("✧ Error en:", e);
    }
  }

  const str2Regex = (str) => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  const _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix;
  const match = (_prefix instanceof RegExp ? 
            [[_prefix.exec(m.text), _prefix]] :
            Array.isArray(_prefix) ? 
                _prefix.map((p) => {
                  const re = p instanceof RegExp ? 
                        p :
                        new RegExp(str2Regex(p));
                  return [re.exec(m.text), re];
                }) :
                typeof _prefix === 'string' ? 
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
    const fail = plugin.fail || global.dfail; 
    const isAccept = plugin.command instanceof RegExp ? 
                plugin.command.test(command) :
                Array.isArray(plugin.command) ? 
                    plugin.command.some((cmd) => cmd instanceof RegExp ? 
                        cmd.test(command) :
                        cmd === command,
                    ) :
                    typeof plugin.command === 'string' ? 
                        plugin.command === command :
                        false;

    if (!isAccept) {
    m.reply(`✧ El comando ingresado no es válido. Usa */menu* para ver mis comandos.`);
    continue;
}

global.db.data.settings[mconn.conn.user.jid].botcommandCount += 1;

    m.plugin = name;

    if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
      const chat = global.db.data.chats[m.chat];
      const user = global.db.data.users[m.sender];
      const botSpam = global.db.data.settings[mconn.conn.user.jid];

      if (!['MODS-unbanchat.js', 'INFO-contacto.js'].includes(name) && chat && chat?.isBanned && !isROwner && !isMods) return; 
      if (name != 'MODS-unbanchat.js' && name != 'OWNER-exec.js' && name != 'OWNER-exec2.js' && chat?.isBanned && !isROwner && !isMods) return; 

      if (m.text && user.baneado && !isROwner) {
        if (typeof user.bannedMessageCount === 'undefined') {
          user.bannedMessageCount = 0;
        }

        if (user.bannedMessageCount < 3) {
          const messageNumber = user.bannedMessageCount + 1;
          const messageText = `╭───────────────────╼\n│ ✧ 𝐄𝐒𝐓𝐀𝐒 𝐁𝐀𝐍𝐄𝐀𝐃𝐎 ✧\n│◈ 𝐀𝐯𝐢𝐬𝐨: ${messageNumber}/3 ${user.banRazon ? `\n│◈ 𝐌𝐨𝐭𝐢𝐯𝐨: ${user.banRazon}` : '\n│◈ 𝐌𝐨𝐭𝐢𝐯𝐨: Sin Especificar'}\n│\n│➤ *Puedes apelar el Baneo con mi Creador.\n│➥ wa.me/595983799436*\n╰───────────────────╼`.trim();
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
            const messageText = `✧ Espera *${remainingTime}* para usar otro comando.`;
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
    const alisakujou = `${plugin.botAdmin || plugin.admin || plugin.group || plugin || noPrefix || hl || m.text.slice(0, 1) == hl || plugin.command}`;
    if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && alisakujou) return;

    if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { 
      fail('owner', m, this);
      continue;
    }

    if (plugin.rowner && !isROwner) { 
      fail('rowner', m, this);
      continue;
    }

    if (plugin.owner && !isOwner) { 
      fail('owner', m, this);
      continue;
    }

    if (plugin.mods && !isMods) { 
      fail('mods', m, this);
      continue;
    }

    if (plugin.premium && !isPrems) { 
      fail('premium', m, this);
      continue;
    }

    if (plugin.group && !m.isGroup) { 
      fail('group', m, this);
      continue;
    } else if (plugin.botAdmin && !isBotAdmin) { 
      fail('botAdmin', m, this);
      continue;
    } else if (plugin.admin && !isAdmin) { 
      fail('admin', m, this);
      continue;
    }

    if (plugin.private && m.isGroup) { 
      fail('private', m, this);
      continue;
    }

    if (plugin.registrado == true && _user.registrado == false) { 
      fail('unreg', m, this);
      continue;
    }

    m.isCommand = true;
    const xp = 'experiencia' in plugin ? parseInt(plugin.experiencia) : 9; 
    if (xp > 200) {
      m.reply('Ngecit -_-');
    } else {
      m.experiencia += xp;
    }

    if (!isPrems && plugin.diamantes && global.db.data.users[m.sender].diamantes < plugin.diamantes * 1) {
      mconn.conn.reply(m.chat, `✧ Te quedaste sin Diamantes, usa uno de los siguientes comandos para comprar mas.\n> *${usedPrefix}buy <cantidad>*\n> *${usedPrefix}buyall*`, m);
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
            m.diamantes = m.diamantes || plugin.diamantes || false;
          }
        } catch (e) {
          console.log("✧ Error en:", e);
        } finally {
          if (typeof plugin.after === 'function') {
            try {
              await plugin.after.call(this, m, extra);
            } catch (e) {
              console.error(e);
            }
          }
          if (m.diamantes) {
            m.reply('✧ Usaste *' + +m.diamantes + '* Diamante(s)');
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
        user.experiencia += m.experiencia;
        user.diamantes -= m.diamantes * 1;
      }

      let stat;
      if (m.plugin) {
        const now = + new Date;
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


function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
}}

export async function participantsUpdate({id, participants, action}) {
  const m = mconn
  if (opts['self']) return;
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
          let pp = global.icons;
          try {
            pp = await m.conn.profilePictureUrl(user, 'image');
          } catch (e) {
          } finally {
            const apii = await m.conn.getFile(pp);
            const antiArab = JSON.parse(fs.readFileSync('./src/antiArab.json'));
            const userPrefix = antiArab.some((prefix) => user.startsWith(prefix));
            const botTt2 = groupMetadata.participants.find((u) => m.conn.decodeJid(u.id) == m.conn.user.jid) || {};
let about = (await this.fetchStatus(user).catch(console.error) || {}).status || '×'
            text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || '❀  Bienvenido 「 @user 」,').replace('@bio', about).replace('@subject', await m.conn.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'Sin descripción') :
                              (chat.sBye || this.bye || conn.bye || '✧ Hasta luego 「 @user 」,')).replace('@bio', about).replace('@user', '@' + user.split('@')[0]);

            if (userPrefix && chat.antiArab && isBotAdminNn && action === 'add') {
              const responseb = await m.conn.groupParticipantsUpdate(id, [user], 'remove');
              if (responseb[0].status === '404') return;
              const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
        await m.conn.sendMessage(id, {text: `✧ 「 ${user.split('@')[0]} 」  en este grupo no permitimos números raros, serás expulsado.`, mentions: [user]}, {quoted: fkontak2});
                }
this.sendMessage(id, { text: text, 
contextInfo:{
forwardingScore: 1,
isForwarded: true, 
mentionedJid:[user],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": apii.data, 
"title": `${action === 'add' ? `${global.wm} : ᰔᩚBIENVENIDAᰔᩚ` : `${global.wm} : ᰔᩚHASTA LUEGOᰔᩚ`}`,
"body": global.dev,
"containsAutoReply": true,
"mediaType": 1, 
"sourceUrl": global.channel }}})
apii.data = ''
}}}
      break;
    case 'promote':
      text = (chat.sPromote || this.spromote || conn.spromote || '❀ 「 @user 」 ahora es Admin.');
    case 'demote':
      if (!text) {
        text = (chat.sDemote || this.sdemote || conn.sdemote || '✧ 「 @user 」 ya no es Admin.');
      }
      text = text.replace('@user', '@' + participants[0].split('@')[0]);
      if (chat.detect && !chat?.isBanned) {
        mconn.conn.sendMessage(id, {text, mentions: mconn.conn.parseMention(text)});
      }
      break;
  }
}

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

    if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '✧ Se cambió la descripción, la nueva descripción es:\n\n@desc').replace('@desc', groupUpdate.desc);

    if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '✧ Se cambió el nombre del grupo, el nuevo nombre es:\n\n> @subject').replace('@subject', groupUpdate.subject);

    if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '✧ Se cambió el Icono del grupo.').replace('@icon', groupUpdate.icon);

    if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '✧ Se actualizó el enlace del grupo, el nuevo enlace es:\n\n> [ @revoke ]').replace('@revoke', groupUpdate.revoke);

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
        const callmsg = await mconn.conn.reply(nk.from, `✧ Hola 「 @${nk.from.split('@')[0]} 」 las ${nk.isVideo ? 'videollamadas' : 'llamadas'} no están permitidas, serás bloqueado.`, false, {mentions: [nk.from]});
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Creador 👑;;;\nFN:Creador 👑\nORG:Creador 👑\nTITLE:\nitem1.TEL;waid=595983799436:+595 983 799 436\nitem1.X-ABLabel:Creador 👑Creador 👑\nX-WA-BIZ-DESCRIPTION:✧ Solo cosas referentes al Bot.\nX-WA-BIZ-NAME:Creador 👑\nEND:VCARD`;
        await mconn.conn.sendMessage(nk.from, {contacts: {displayName: wm, contacts: [{vcard}]}}, {quoted: callmsg});
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

                const antideleteMessage = `╭───────────────────╼\n│ ᰔᩚ𝐀𝐍𝐓𝐈 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑ᰔᩚ\n│「 ${participant.split`@`[0]} 」\n│◈ 𝐇𝐨𝐫𝐚: *${time}*\n│◈ 𝐅𝐞𝐜𝐡𝐚: *${date}*\n╰───────────────────╼\n> ❀ Reenviando mensaje.`.trim();

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
    premium: '✧ Solo los Usuarios Premiums pueden usar este comando.\n> */premium* para mas info.',
    group: '✧ Este comando solo se puede ejecutar en Grupos.',
    private: '✧ Este comando solo se puede ejecutar en mi Privado.',
    admin: '✧ Este comando solo lo pueden usar los Administradores.',
    botAdmin: '✧ Alisa necesita ser Administrador para ejecutar esa funcion.',
    unreg: '✧ Necesitas estar registrado para usar este comando.\n */reg <nombre.edad>*'
    }[type];
  const aa = {quoted: m, userJid: conn.user.jid};
  const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: msg, contextInfo: {externalAdReply: {title: wm, body: dev, thumbnail: icons, sourceUrl: channel}}}}, aa);
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
