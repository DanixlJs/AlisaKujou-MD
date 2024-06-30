import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
const spinSlots = () => {
const symbols = ['🍒', '🍋', '🍉', '🍇', '⭐'];
const result = [];
for (let i = 0; i < 3; i++) {
result.push(symbols[Math.floor(Math.random() * symbols.length)]);
}
return result;
};
const evaluateResult = (result, bet) => {
if (result[0] === result[1] && result[1] === result[2]) {
return { message: '❀ ¡ GANASTE !', winnings: bet * 3 };
} else if (result[0] === result[1] || result[1] === result[2] || result[0] === result[2]) {
        return { message: '✧ ¡ CASI !', winnings: bet * 0.5 };
    } else {
        return { message: '✦ ¡ PERDISTE !', winnings: 0 };
    }
};
const handler = async (m, { conn, args }) => {
    const bet = parseInt(args[0]);
    if (isNaN(bet) || bet < 10) {
        await conn.reply(m.chat, '✧ Ingresa la cantidad de Diamantes que quieras apostar.', m);
        return;
    }
    const userDiamonds = global.db.data.users[m.sender].diamantes;
    if (userDiamonds < bet) {
        await conn.reply(m.chat, `✧ No tienes *${bet}* Diamante(s) para apostar, Solo tienes *${userDiamonds}* Diamante(s).`, m);
        return;
    }
    global.db.data.users[m.sender].diamantes -= bet;
    const symbols = ['🍒', '🍋', '🍉', '🍇', '⭐'];
    const initialMessage = await conn.sendMessage(m.chat, { text: '🎰  𝗦𝗟𝗢𝗧𝗦  🎰 \n──────────\n ◻️ │ ◻️  │ ◻️\n──────────\n✧ ¡ Girando !' });
    for (let i = 0; i < 5; i++) {
        const randomResult = [
            symbols[Math.floor(Math.random() * symbols.length)], 
            symbols[Math.floor(Math.random() * symbols.length)], 
            symbols[Math.floor(Math.random() * symbols.length)]
        ];
        await conn.sendMessage(m.chat, { text: `🎰  𝗦𝗟𝗢𝗧𝗦  🎰\n──────────\n ${randomResult.join(' │ ')}\n──────────\n✧ ¡ Girando !`, edit: initialMessage.key });
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    const result = spinSlots();
    const evaluation = evaluateResult(result, bet);
    global.db.data.users[m.sender].diamantes += evaluation.winnings;
    await conn.sendMessage(m.chat, { text: `🎰  𝗦𝗟𝗢𝗧𝗦  🎰\n──────────\n ${result.join(' │ ')}\n──────────\n${evaluation.message}\n✰ 𝐑𝐞𝐰𝐚𝐫𝐝: ${evaluation.winnings} Diamante(s)`, edit: initialMessage.key });
};
handler.command = ['slots', 'slot'];
handler.help = ['slots <cantidad>'];
handler.tags = ['rpg'];
handler.registrado = true;
export default handler;