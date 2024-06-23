function msToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    let days = Math.floor(duration / (1000 * 60 * 60 * 24));
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    return `${days} Día(s) ${hours} Hora(s) ${minutes} Minuto(s) ${seconds} Segundo(s)`;
}
const handler = async (m, { conn }) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
    let user = global.db.data.users[m.sender];
    const now = Date.now();
    const times = {
        Mineria: user.minetime,
        Mineria2: user.minetime2,
        Mineria3: user.minetime3,
        Trabajar: user.worktime,
        Daily: user.dailytime,
        Cofre: user.cofretime,
        Robar: user.robtime,
        Slut: user.sluttime,
        Aventura: user.adventure,
        Crimen: user.crimetime
    };
        let nametag = conn.getName(m.sender);
    let response = `❀ *ECONOMY INFO*\n✰ *Usuario ⪼* ${nametag}\n\n`;
    for (let [key, value] of Object.entries(times)) {
        let remainingTime = value - now;
        if (remainingTime > 0) {
            response += `◈ ${key.charAt(0).toUpperCase() + key.slice(1)}: ${msToTime(remainingTime)}\n`;
        } else {
            response += `◈ ${key.charAt(0).toUpperCase() + key.slice(1)}: Ahora\n`;
        }
    }
    await conn.reply(m.chat, response, m, fake, );
};
handler.help = ['einfo'];
handler.command = ['einfo'];
handler.tags = ['rpg'];
handler.registrado = true;
handler.disabled = true;
export default handler;
