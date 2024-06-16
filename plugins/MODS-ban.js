const handler = async (m, { conn, args, text, usedPrefix, command, isOwner }) => {
    if (m.sender === conn.user.jid) return
    let user;
    let reason;
    let db = global.db.data.users;

    if (m.quoted) {
        user = m.quoted.sender;
        reason = args.join(' ');
    } else if (args.length >= 2) {
        user = args[0].replace('@', '') + '@s.whatsapp.net';
        reason = args.slice(1).join(' ');
    } else {
        await conn.reply(m.chat, `✧ Etiqueta o responde al mensaje del usuario que quieras Banear, Ejemplo:\n> */ban <@tag> <razón>*\n> */ban <razón>*`, m);
        return;
    }
    if (user === isOwner) return m.reply('✧ No puedes banear a mi Desarrollador.');

    if (db[user]) {
        db[user].baneado = true;
        db[user].banRazon = `${reason}`;

        const nametag = await conn.getName(user);
        const nn = conn.getName(m.sender);

        await conn.reply(m.chat, `❀ El usuario *${nametag}* ha sido Baneado.\n> ✰ *Razón ⪼* ${reason}`, m, { mentionedJid: [user] });
        conn.reply('120363284046748076@g.us', `✧ El usuario *${nametag}* ha sido Baneado por *${nn}*.\n> ✰ *Razón ⪼* ${reason}`, m, fake, );
    } else {
        await conn.reply(m.chat, `✧ El usuario no está registrado.`, m);
    }
};

handler.help = ['ban <@tag> <razón>'];
handler.command = ['ban'];
handler.tags = ['mods'];
handler.mods = true;
handler.group = true;

export default handler;