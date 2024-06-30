let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;

export async function before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return true;
    if (!m.isGroup) return false;

    let chat = global.db.data.chats[m.chat];
    let delet = m.key.participant;
    let bang = m.key.id;
    let bot = global.db.data.settings[this.user.jid] || {};
    const isGroupLink = linkRegex.exec(m.text);
    const grupo = `https://chat.whatsapp.com`;

    if (isAdmin && chat.antiLink && m.text.includes(grupo)) return;
    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
            if (m.text.includes(linkThisGroup)) return;
        }

        if (!isBotAdmin) return;

        await conn.reply(m.chat, `✧ ${m.sender.replace('@s.whatsapp.net', '').trim()} será eliminado del grupo por enviar un Link de WhatsApp.`, m);

        if (isBotAdmin) {
            await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        }
    }

    return;
}