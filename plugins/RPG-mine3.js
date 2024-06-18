const handler = async (m, {conn}) => {
if (m.sender === conn.user.jid) return;
    let user = global.db.data.users[m.sender];
    const alisacoins = Math.floor(Math.random() * 10000);
    let msg = `❀ En hora buena, minaste la cantidad de *${alisacoins}* AlisaCoins.`;
    const time = user.minetime3 + 600000;
    if (new Date - user.minetime3 < 600000) return m.reply(`✧ Espera *${msToTime(time - new Date())}* para volver a minar ${global.botcoins}`)
    conn.reply(m.chat, msg, m, fake,);
    user.alisacoins += alisacoins;
    user.minetime3 = new Date() * 1
};
handler.registrado = true;
handler.help = ['minar3', 'mine3'];
handler.command = ['minar3', 'mine3'];
handler.group = true;
handler.tags = ['rpg'];
export default handler;
function msToTime(duration) {
    const milliseconds = parseInt((duration % 1000) / 100);
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    return minutes + ' Minuto(s) ' + seconds + ' Segundo(s)';
    
}
