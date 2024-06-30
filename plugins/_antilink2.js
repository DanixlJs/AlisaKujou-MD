let linkRegex = /\b((https?:\/\/|www\.)?[\w-]+\.[\w-]+(?:\.[\w-]+)*(\/[\w\.\-\/]*)?)\b/i;

export async function before(m, { isAdmin, isBotAdmin, text }) {
    if (m.isBaileys && m.fromMe) return true;
    if (!m.isGroup) return false;

    const chat = global.db.data.chats[m.chat];
    const delet = m.key.participant;
    const bang = m.key.id;
    const bot = global.db.data.settings[this.user.jid] || {};
    const user = `@${m.sender.split`@`[0]}`;
    const isGroupLink = linkRegex.exec(m.text);

    if (chat.antiLink2 && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
            if (m.text.includes(linkThisGroup)) return;
        }
        
        if (isAdmin) return;
        if (!isBotAdmin) return;

        await this.sendMessage(m.chat, { text: `✧ Se detectó un Link qué contiene *https*, procedo a eliminarlo.`, mentions: [m.sender] }, { quoted: m });
        
        if (isBotAdmin) {
            await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
        }
    }
    return;
}