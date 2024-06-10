var handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, '✧ Etiqueta al usuario que quieras expulsar.', m);
    }

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';

    if (user === conn.user.jid) {
        return conn.reply(m.chat, '✧ No me puedo auto eliminar del grupo.', m);
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, '✧ No puedes eliminar al creador del grupo.', m,);
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, '✧ No puedes eliminar a mi Creador.', m, fake, );
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};

handler.help = ['kick <@tag>'];
handler.tags = ['grupo'];
handler.command = ['kick'],
handler.registrado = true;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;