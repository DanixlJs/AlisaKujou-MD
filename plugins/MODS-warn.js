const handler = async (m, { conn, args, text, usedPrefix, command }) => {
    let user;
    let reason;
    let db = global.db.data.users
    if (m.quoted) {
        user = m.quoted.sender;
        reason = args.join(' ');
    } else if (args.length >= 2) {
        user = args[0].replace('@', '') + '@s.whatsapp.net';
        reason = args.slice(1).join(' ');
    } else {
        await conn.reply(m.chat, `✧ Etiqueta o responde al mensaje del usuario que quieras Advertir, Ejemplo:\n> *${usedPrefix}warn <@tag> <razón>*\n> *${usedPrefix}warn <razón>*`, m);
        return;
    }
    if (db[user]) {
        if (!db[user].warn) {
            db[user].warn = 0;
        }
        if (!db[user].warnRazon) {
            db[user].warnRazon = '';
        }
        db[user].warn += 1;
        db[user].warnRazon = `${reason}`;
        const nametag = await conn.getName(user);
        await conn.reply(m.chat, `❀ El usuario @${user.replace('@s.whatsapp.net', '').trim()} ha sido advertido.\n> ✰ *Advertencias ⪼* ${db[user].warn}\n> ◈ *Razón ⪼* ${reason}`, m, { mentions: [user]} );
  let msg = `✧ El usuario @${user.replace('@s.whatsapp.net', '').trim()} recibió una advertencia de @${m.sender.replace('@s.whatsapp.net', '').trim()}, Razón ⪼ ${reason}`
       conn.reply('120363284046748076@g.us', msg, m, { mentions: conn.parseMention(msg)} );
    } else {
        await conn.reply(m.chat, `El usuario no está registrado.`, m);
    }
};
handler.help = ['warn <@tag> <razón>'];
handler.command = ['warn'];
handler.tags = ['mods'];
handler.mods = true;
handler.group = true;
export default handler;
