const handler = async (m, {conn}) => {
  if (!global.db.data.chats[m.chat].game) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
    let user = global.db.data.users[m.sender];
    const exp = Math.floor(Math.random() * 10000);
    let msg = `❀ Realizaste tu turno en la mina y lograste minar la cantidad de *${exp}* de experiencia.`;
    const time = user.minetime + 600000;
    if (new Date - user.minetime < 600000) return m.reply(`✧ Espera *${msToTime(time - new Date())}* para volver a minar.`)
    conn.reply(m.chat, msg, m, fake,);
    user.experiencia += exp;
    user.minetime = new Date() * 1
};
handler.registrado = true;
handler.help = ['minar', 'mine'];
handler.command = ['minar', 'mine'];
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
