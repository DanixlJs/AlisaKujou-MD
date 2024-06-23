const handler = async (m, { conn, args, text, usedPrefix, command }) => {
    let user;
    let db = global.db.data.users;
    if (m.quoted) {
        user = m.quoted.sender;
    } else if (args.length >= 1) {
        user = args[0].replace('@', '') + '@s.whatsapp.net';
    } else {
        await conn.reply(m.chat, `✧ Etiqueta o responde al mensaje del usuario que quieras Desbanear, Ejemplo:\n> *${usedPrefix}unban <@tag>*`, m);
        return;
    }
    if (db[user]) {
        db[user].baneado = false;
        db[user].banRazon = '';
        const nametag = await conn.getName(user);
        const nn = conn.getName(m.sender);
        await conn.reply(m.chat, `❀ El usuario @${user.replace('@s.whatsapp.net', '').trim()} ha sido desbaneado.`, m, { mentions: [user] });
  let msg = `✧ El usuario @{user.replace('@s.whatsapp.net', '').trim()} ha sido desbaneado por @${m.sender.replace('@s.whatsapp.net', '').trim()}`;
        conn.reply('120363284046748076@g.us', msg, m, { mentions: [conn.parseMentions(msg)]} );
    } else {
        await conn.reply(m.chat, `✧ El usuario no está registrado.`, m);
    }
};
handler.help = ['unban <@tag>'];
handler.command = ['unban'];
handler.tags = ['mods'];
handler.mods = true;
handler.group = true;
export default handler;
