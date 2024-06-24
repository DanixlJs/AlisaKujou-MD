import { 
    useMultiFileAuthState,
    fetchLatestBaileysVersion,
    DisconnectReason,
    MessageRetryMap,
    makeCacheableSignalKeyStore,
    jidNormalizedUser,
    PHONENUMBER_MCC 
} from '@whiskeysockets/baileys';
import moment from 'moment-timezone';
import NodeCache from 'node-cache';
import readline from 'readline';
import qrcode from 'qrcode';
import crypto from 'crypto';
import fs from 'fs';
import pino from 'pino';
import * as ws from 'ws';
const { CONNECTING } = ws;
import { Boom } from '@hapi/boom';
import { makeWASocket } from '../lib/simple.js';

if (!global.alisa_subbots) global.alisa_subbots = [];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const new_subbot = async (m, args, usedPrefix, command, conn, isQRCode) => {
    const folder_subbot = crypto.randomBytes(10).toString('hex').slice(0, 8);
    const authPath = `./JadiBotSessions/${folder_subbot}`;
    if (!fs.existsSync(authPath)) fs.mkdirSync(authPath, { recursive: true });
    if (args[0]) {
        fs.writeFileSync(`${authPath}/creds.json`, JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t'));
    }
    const { state, saveState, saveCreds } = await useMultiFileAuthState(authPath);
    const { version } = await fetchLatestBaileysVersion();
    const connectionOptions = {
        logger: pino({ level: 'silent' }),
        printQRInTerminal: false,
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
        },
        version,
        msgRetryCounterCache: new NodeCache(),
        getMessage: async (key) => {
            const jid = jidNormalizedUser(key.remoteJid);
            const msg = await store.loadMessage(jid, key.id);
            return msg?.message || '';
        }
    };

    const conn_subbots = makeWASocket(connectionOptions);
    let qrTimeout;
    conn_subbots.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update;
        if (qr && isQRCode) {
            await qrcode.toFileStream(m.reply, qr);
        }
        if (connection === 'open') {
            global.alisa_subbots.push({ folder_subbot, conn: conn_subbots });
            clearTimeout(qrTimeout);
            await conn.reply(m.chat, `❀ SUB BOTS - EXITO\n✰ SubBot conectado con éxito.\n\n> ➤ Para desconectar use *${usedPrefix}loggout ${folder_subbot}*`, m);
        }
        if (lastDisconnect?.error) {
            const shouldReconnect = lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut;
            if (shouldReconnect) {
                conn_subbots.ev.removeAllListeners();
                new_subbot(m, args, usedPrefix, command, conn, isQRCode); 
            } else {
                conn.reply(m.chat, '◈ La conexión ha sido cerrada.', m);
                fs.rmdirSync(authPath, { recursive: true });
            }
        }
    });

    qrTimeout = setTimeout(() => {
        if (!conn_subbots.user) {
            conn.reply(m.chat, '◈ Tiempo de espera agotado, Intente de nuevo.', m);
            fs.rmdirSync(authPath, { recursive: true });
            conn_subbots.ev.removeAllListeners();
        }
    }, 60000);
};

const list_subbots = async (m, { conn }) => {
    if (global.alisa_subbots.length === 0) {
        await conn.reply(m.chat, '◈ No hay SubBots activos en este momento.', m);
        return;
    }
    let msg = '❀ *SUB BOTS - LISTA*\n\n✰ Lista de los SubBots activos en este momento.\n\n';
    for (const { folder_subbot, conn: conn_subbots } of global.alisa_subbots) {
        const user = conn_subbots.user;
        msg += `╭───────────────────╼\n│✰ *ID ⪼* ${folder_subbot}\n│◈ *Nombre ⪼* ${user.name}\n│◈ *Número ⪼* ${user.id.split(':')[0]}╰───────────────────╼\n\n`;
    }
    await conn.reply(m.chat, msg, m, { mentions: conn.parseMention(msg) });
};

const handler = async (m, { conn, args, usedPrefix, command, isROwner }) => {
    if (!global.db.data.settings[conn.user.jid].modejadibot && !isROwner) return m.reply('◈ Esta opción ha sido deshabilitada por mi Creador.');
    if (command === 'qr') {
        new_subbot(m, args, usedPrefix, command, conn, true);
    } else if (command === 'code') {
        const phoneNumber = m.sender.split('@')[0];
        if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            return conn.reply(m.chat, `◈ No se pudo verificar tú número de telefono.`, m);
        }
        new_subbot(m, [phoneNumber], usedPrefix, command, conn, false);
    } else if (command === 'loggout') {
        const folder_subbot = args[0];
        const sub_bot = global.alisa_subbots.find(bot => bot.folder_subbot === folder_subbot);
        if (sub_bot) {
            sub_bot.conn.ws.close();
            fs.rmdirSync(`./JadiBotSessions/${folder_subbot}`, { recursive: true });
            global.alisa_subbots = global.alisa_subbots.filter(bot => bot.folder_subbot !== folder_subbot);
            conn.reply(m.chat, `◈ SubBot desconectado y la sessión ha sido eliminada.`, m);
        } else {
            conn.reply(m.chat, `◈ No se encontró un SubBot con el ID proporcionado.`, m);
        }
    } else if (command === 'bots') {
        list_subbots(m, { conn });
    }
};

handler.help = ['qr', 'code', 'loggout', 'bots'];
handler.tags = ['jadibot'];
handler.command = ['qr', 'code', 'loggout', 'bots'];
handler.registrado = true;

export default handler;