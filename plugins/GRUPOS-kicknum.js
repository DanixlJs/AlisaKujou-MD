const handler = async (m, { conn, args, participants, usedPrefix, command }) => {
if (m.sender === conn.user.jid) return;
    const prefix = args[0];
    if (!prefix) throw `✧ Ingresa un prefijo de país, Ejemplo:\n> → *${usedPrefix + command} 92*`;

    const membersWithPrefix = participants
        .filter(p => p.id.startsWith(prefix))
        .map(p => p.id);

    if (command === 'listnum') {
        if (membersWithPrefix.length === 0) {
            return conn.reply(m.chat, `✧ No se encontraron miembros con el prefijo *+${prefix}*.`, m);
        }

        const memberList = membersWithPrefix.map(id => `> → ${id}`).join('\n');
        return conn.reply(m.chat, `❀ *RESULTADOS*\n✰ *Prefijo ⪼* +${prefix}:\n${memberList}`, m, fake, );
    }

    if (command === 'kicknum') {
        if (membersWithPrefix.length === 0) {
            return conn.reply(m.chat, `✧ No se encontraron miembros con el prefijo *+${prefix}* para expulsar.`, m);
        }

        const kickMember = async (index) => {
            if (index >= membersWithPrefix.length) return;

            await conn.groupParticipantsUpdate(m.chat, [membersWithPrefix[index]], 'remove');
            setTimeout(() => kickMember(index + 1), 2000); 
        };

        await conn.reply(m.chat, `❀ Comenzando eliminación.`, m);
        kickMember(0);
    }
};

handler.help = ['listnum <prefijo>', 'kicknum <prefijo>'];
handler.tags = ['grupo'];
handler.command = ['listnum', 'kicknum'];
handler.admin = true;
handler.botAdmin = true;

export default handler;