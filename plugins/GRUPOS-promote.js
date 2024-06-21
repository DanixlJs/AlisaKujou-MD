let handler = async (m, {conn, usedPrefix, text}) => {
if (!m.mentionedJid[0] && !m.quoted) {
return m.reply('✧ Etiqueta al usuario que quieras ascender.')
}
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    conn.groupParticipantsUpdate(m.chat, [user], "promote");
    m.react('✅');
};
handler.help = ['promote <@tag>'];
handler.tags = ['grupo'];
handler.command = ['promote'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
