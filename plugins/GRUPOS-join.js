const { default: makeWASocket, DisconnectReason, useMultiFileAuthState } = await import('@whiskeysockets/baileys');

const handler = async (m, { conn, args, text, usedPrefix, command, isROwner }) => {
    if (args.length === 0) {
        await conn.reply(m.chat, `✧ Ingresa el Link de tu grupo.`, m);
        return;
    }

    const link = args[0];
    const regex = /https:\/\/chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/;
    const match = link.match(regex);

    if (!match) {
        await conn.reply(m.chat, `✧ El Link proporcionado no es un enlace válido de WhatsApp.`, m);
        return;
    }
    const inviteCode = match[1];

    try {
        const groupMetadata = await conn.groupGetInviteInfo(inviteCode);

        const groupName = groupMetadata.subject;
        const participantCount = groupMetadata.participants.length;

        if (isROwner) {
            await conn.groupAcceptInvite(inviteCode);
            await conn.reply(m.chat, `❀ ${global.botname} se ha unido al grupo correctamente.`, m);
        } else {
            const GroupId = '120363284046748076@g.us';
            const displayName = await conn.getName(m.sender);

let msg = `❀ *INVITACIÓN A GRUPO*\n✰ *Usuario ⪼* @${m.sender.split('@')[0]}\n◈ *Grupo ⪼* ${groupName}\n◈ *Participantes ⪼* ${participantCount}\n ◈ *Link:*\n> [${link}]`

let mentionedJid = conn.parseMention(msg)

            await conn.reply(GroupId, msg, m, fake, { mentions: mentionedJid });

            await conn.reply(m.chat, `❀ Tu solicitud ha sido enviada a los Moderadores del Bot.`, m, fake, );
        }
    } catch (error) {
        await m.reply(`✧ Ocurrió un error inesperado.`);
        console.error(error);
    }
};

handler.help = ['join <link>'];
handler.command = ['join'];
handler.tags = ['grupo'];
handler.registrado = true;

export default handler;
