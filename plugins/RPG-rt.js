const handler = async (m, { conn, args, usedPrefix }) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
    const user = global.db.data.users[m.sender];
    const bet = parseInt(args[1]);
    if (user.dinero < bet) return m.reply(`✧ No tienes esa cantidad de *${bet}* para apostar, solo tienes *${user.dinero}* ${global.botcoins}`)
    if (user.dinero < 200) {
        await conn.reply(m.chat, `✧ Te quedaste sin ${global.botcoins} y el mínimo para apostar es *200*.`, m);
        return;
    }
    if (!args[0] || !['black', 'red'].includes(args[0])) {
        await conn.reply(m.chat, `✧ Ingrese un color para empezar a apostar, Ejemplo:\n> *${usedPrefix}rt red 200*\n◈ *Nota ⪼* La apuesta mínima es de 200 ${global.botcoins}`, m);
        return;
    }
    const result = Math.random() < 0.5 ? 'black' : 'red';
    if (args[0] === result) {
        const payout = bet * 2;
        user.dinero += payout;
        await conn.reply(m.chat, `❀ El resultado cayó en *${result}* y ganaste *${payout}* ${global.botcoins}`, m, fake, );
    } else {
        user.dinero -= bet;
        await conn.reply(m.chat, `✧ El resultado cayó en *${result}* y perdiste *-${bet}* ${global.botcoins}`, m);
    }
    global.db.data.users[m.sender] = user;
};
handler.help = ['rt <color> <apuesta>'];
handler.command = ['rt'];
handler.tags = ['rpg'];
handler.registrado = true;
export default handler;
