const handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (m.sender === conn.user.jid) return;
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
        await conn.reply(m.chat, `✧ Etiqueta o responde al mensaje del usuario que quieras Advertir, Ejemplo:\n> → *${usedPrefix}warn <@tag> <razón>*\n> *${usedPrefix}warn <razón>*`, m);
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

        await conn.reply(m.chat, `❀ El usuario *${nametag}* ha sido advertido.\n> ✰ *Advertencias ⪼* ${db[user].warn}\n> ◈ *Razón ⪼* ${reason}`, m, fake, { mentionedJid: [user] });
       let nn = conn.getName(m.sender);

       conn.reply('120363284046748076@g.us', `✧ El usuario *${nametag}* recibió una advertencia de *${nn}*.`, m, fake, { mentionedJid: [user] });
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