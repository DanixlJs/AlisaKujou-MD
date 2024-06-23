const handler = async (m, { conn, args, text, usedPrefix, command, isROwner }) => {
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
        await conn.reply(m.chat, `✧ Etiqueta al usuario que quieras Banear.`, m);
        return;
    }
    if (user === isROwner) return m.reply('✧ No puedes banear a mi Creador.');
    if (db[user]) {
        db[user].baneado = true;
        db[user].banRazon = `${reason}`;
        const nametag = await conn.getName(user);
        const nn = conn.getName(m.sender);
        await conn.reply(m.chat, `❀ El usuario @${user.replace('@s.whatsapp.net', '').trim()} ha sido Baneado.\n> ✰ *Razón ⪼* ${reason}`, m, { mentions: [user]} );
  let msg = `✧ El usuario @${user.replace('@s.whatsapp.net', '').trim()} ha sido Baneado por @${m.sender.replace('@s.whatsapp.net', '').trim()}.\n> ✰ *Razón ⪼* ${reason}`
        await conn.reply('120363284046748076@g.us', msg, m, { mentions: conn.parseMention(user)} );
    } else {
        m.reply(m.chat, `✧ El usuario no está registrado.`);
    }
};

handler.help = ['ban <@tag> <razón>'];
handler.command = ['ban'];
handler.tags = ['mods'];
handler.mods = true;
handler.group = true;

export default handler;
