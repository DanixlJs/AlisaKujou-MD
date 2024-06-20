const handler = async (m, { conn, args, usedPrefix }) => {
  if (!global.db.data.chats[m.chat].game) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
    const user = global.db.data.users[m.sender];
    const bet = parseInt(args[1]);
    if (user.alisacoins < bet) return m.reply(`✧ No tienes esa cantidad de *${bet}* para apostar, solo tienes *${user.alisacoins}* ${global.botcoins}`);
    if (user.alisacoins < 200) {
        await conn.reply(m.chat, `✧ Te quedaste sin ${global.botcoins} y el mínimo para apostar es *200*.`, m);
        return;
    }
    if (!args[0] || !['cara', 'cruz'].includes(args[0]) || isNaN(bet) || bet < 200) {
        await conn.reply(m.chat, `✧ Elige una opción para empezar a apostar, Ejemplo:\n> *${usedPrefix}cf cruz 200*\n◈ *Nota ⪼* La apuesta mínima es de 200 ${global.botcoins}`, m);
        return;
    }
    const result = Math.random() < 0.5 ? 'cara' : 'cruz';
    if (args[0] === result) {
        const payout = bet * 2;
        user.alisacoins += payout;
        await conn.reply(m.chat, `❀ La moneda cayó en *${result}* y ganaste *${payout}* ${global.botcoins}`, m, fake, );
    } else {
        user.alisacoins -= bet;
        await conn.reply(m.chat, `✧ La moneda cayó en *${result}* y perdiste *-${bet}* ${global.botcoins}`, m);
    }
    global.db.data.users[m.sender] = user;
};
handler.help = ['cf <cara|cruz> <apuesta>'];
handler.command = ['cf', 'coinflip'];
handler.tags = ['rpg'];
handler.registrado = true;
export default handler;
