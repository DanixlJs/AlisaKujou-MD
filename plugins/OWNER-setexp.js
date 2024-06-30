const handler = async (m, { conn, text, usedPrefix, command, args }) => {
    if (args.length < 2) {
        return m.reply(`✧ Etiqueta a un usuario.`);
    }
    let user = m.mentionedJid && m.mentionedJid[0];
    if (!user) {
        return m.reply(`✧ Etiqueta a un usuario.`);
    }
    let amount = parseInt(args[1]);
    if (isNaN(amount)) {
        return m.reply(`✧ Ingresa una cantidad.`);
    }
    global.db.data.users[user].experiencia = (global.db.data.users[user].experiencia || 0) + amount;
    conn.reply(m.chat, `❀ Se han añadido *${amount}* de experiencia al usuario ${user.replace('@s.whatsapp.net', '').trim()}`, m, { mentions: [user]} );
};
handler.command = ["addexp", "setexp"];
handler.help = ["addexp <@tag> <cantidad>"];
handler.tags = ["owner"];
handler.owner = true;
handler.registrado = true;
export default handler;