const handler = async (m, {conn}) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
    let user = global.db.data.users[m.sender];
    const d = Math.floor(Math.random() * 50)
    const d2 = Math.floor(Math.random() * 100);
    let msg = `❀ Realizaste tu turno en la mina y lograste minar la cantidad de *${user.premium ? d2 : d}* Diamante(s)`;
    const time = user.minetime2 + 600000;
    if (new Date - user.minetime2 < 600000) return m.reply(`✧ Espera *${msToTime(time - new Date())}* para volver a minar Diamantes.`)
    conn.reply(m.chat, msg, m,);
    user.diamantes += user.premium ? d2 : d;
    user.minetime2 = new Date() * 1
};
handler.registrado = true;
handler.help = ['minar2', 'mine2'];
handler.command = ['minar2', 'mine2'];
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
