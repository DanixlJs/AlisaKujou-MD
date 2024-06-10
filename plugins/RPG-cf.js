const handler = async (m, { conn, args, usedPrefix }) => {
    const user = global.db.data.users[m.sender];
    const bet = parseInt(args[1]);

    if (user.alisacoins < 200) {
        await conn.reply(m.chat, '✧ No tienes suficientes AlisaCoins para apostar. El mínimo es de 200 AlisaCoins.', m);
        return;
    }

    if (!args[0] || !['cara', 'cruz'].includes(args[0]) || isNaN(bet) || bet < 200) {
        await conn.reply(m.chat, `✧ Elige una opción para empezar a apostar, Ejemplo:\n> → *${usedPrefix}cf cruz 200*\n◈ *Nota ⪼* La apuesta mínima es de 200 AlisaCoins.`, m);
        return;
    }

    const result = Math.random() < 0.5 ? 'cara' : 'cruz';

    if (args[0] === result) {
        const payout = bet * 2;
        user.alisacoins += payout;
        await conn.reply(m.chat, `❀ La moneda cayó en *${result}* y ganaste *${payout}* AlisaCoins.`, m, fake, );
    } else {
        user.alisacoins -= bet;
        await conn.reply(m.chat, `✧ La moneda cayó en *${result}* y perdiste *-${bet}* AlisaCoins.`, m);
    }

    global.db.data.users[m.sender] = user;
};

handler.help = ['cf <cara|cruz> <apuesta>'];
handler.command = ['cf', 'coinflip'];
handler.tags = ['rpg'];
handler.registrado = true;

export default handler;