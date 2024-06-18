const handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (command === 'setrole') {
    if (args.length >= 2) {
        const user = args[0].replace('@', '') + '@s.whatsapp.net';
        const role = args.slice(1).join(' ');
        if (global.db.data.users[user]) {
            global.db.data.users[user].userol = role;
            await conn.reply(m.chat, `✧ El usuario @${user.replace('@s.whatsapp.net', '')} ha recibido el rol de ${role}.`, m, { mentions: [user]});
        } else {
            await conn.reply(m.chat, `✧ El usuario no está registrado.`, m);
        }
    } else {
        await conn.reply(m.chat, `✧ Asegúrate de usarlo de la siguiente manera, Ejemplo:\n> *${usedPrefix}setrole <@tag> <rol>*`, m);
    }
}
if (command === 'delrole') {
    if (text) {
        const user = text.replace('@', '') + '@s.whatsapp.net';
        if (global.db.data.users[user]) {
            global.db.data.users[user].userol = 'Usuario';
            await conn.reply(m.chat, `✧ El usuario @${user.replace('@s.whatsapp.net', '')} ha perdido su rol.`, m, { mentions: [user]});
        }} else {
        await conn.reply(m.chat, `✧ Etiqueta a la persona que quieras quitar su rol.`, m);
    }
}
};
handler.help = ['setrole <@tag> <rol>', 'delrole'];
handler.command = ['setrole', 'delrole'];
handler.tags = ['owner'];
handler.rowner = true;
handler.group = true;
export default handler;
