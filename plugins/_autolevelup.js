import { canLevelUp, xpRange } from '../lib/levelling.js';
import { levelup } from '../lib/canvas.js';
import moment from 'moment-timezone';
export function before(m, { conn }) {
    let user = global.db.data.users[m.sender];
    let chat = global.db.data.chats[m.chat];
    if (!chat.autolevelup) return !0;
    let before = user.level * 1;
    while (canLevelUp(user.level, user.experiencia, global.multiplier)) user.level++;
    if (before !== user.level) {
        let date = moment().tz('America/Asuncion').format('YYYY-MM-DD HH:mm:ss');
        conn.reply(m.chat, `❀ *SUBISTE DE NIVEL*\n✰ *Nuevo Nivel ⪼* ${user.level}\n◈ *Nivel Anterior ⪼* ${before}\n◈ *Rango ⪼* ${user.rango}\n◈ *Fecha ⪼* ${date}`.trim(), m, fake, );
    }
}