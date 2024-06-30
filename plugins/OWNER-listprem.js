const handler = async (m, { conn, text, usedPrefix, command }) => {
    let users = global.db.data.users;
    let premiumUsers = Object.keys(users).filter(user => users[user].premium);
    if (premiumUsers.length === 0) {
        return m.reply('✧ No hay usuarios premium.');
    }
    let message = `❀ *USUARIOS PREMIUMS*\n✰ *Total ⪼* ${premiumUsers.lenght}\n`;
    for (let user of premiumUsers) {
        message += `> → @${user.split('@')[0]}\n`;
    }
    await conn.reply(m.chat, message, m, { mentions: conn.parseMention(message)});
};
handler.command = ["listprem"];
handler.help = ["listprem"];
handler.rowner = true;
handler.registrado = true;
export default handler;