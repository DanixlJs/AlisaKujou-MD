const handler = async (m, {conn}) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
    let user = global.db.data.users[m.sender];
    const dinero = Math.floor(Math.random() * 5000)
    const dinero2 = Math.floor(Math.random() * 20000);
    let msg = `❀ En hora buena, minaste la cantidad de *${user.premium ? dinero2 : dinero}* ${global.botcoins}`;
    const time = user.minetime3 + 600000;
    if (new Date - user.minetime3 < 600000) return m.reply(`✧ Espera *${msToTime(time - new Date())}* para volver a minar ${global.botcoins}`)
    conn.reply(m.chat, msg, m, fake,);
    user.dinero += user.premium ? dinero2 : dinero;
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
