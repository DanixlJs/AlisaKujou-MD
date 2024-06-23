import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

// Función para girar los SLOTS
const spinSlots = () => {
    const symbols = ['🍒', '🍋', '🍉', '🍇', '⭐'];
    const result = [];
    for (let i = 0; i < 3; i++) {
        result.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    return result;
};

// Función para evaluar los resultados
const evaluateResult = (result, bet) => {
    if (result[0] === result[1] && result[1] === result[2]) {
        return { message: '🎉 ¡Jackpot! Ganaste!', winnings: bet * 10 };
    } else if (result[0] === result[1] || result[1] === result[2] || result[0] === result[2]) {
        return { message: '✨ ¡Casi! Ganaste un pequeño premio.', winnings: bet * 1.5 }; // Ganancias menores para hacerlo más difícil
    } else {
        return { message: '😞 Mejor suerte la próxima vez.', winnings: 0 };
    }
};

// Handler para el comando /slots
const handler = async (m, { conn, args }) => {
    const bet = parseInt(args[0]);

    if (isNaN(bet) || bet < 10) {
        await conn.reply(m.chat, '✧ Por favor, ingresa una cantidad válida para apostar. La apuesta mínima es 10 diamantes.', m);
        return;
    }

    const userDiamonds = global.db.data.users[m.sender].diamantes;

    if (userDiamonds < bet) {
        await conn.reply(m.chat, '✧ No tienes suficientes diamantes para realizar esta apuesta.', m);
        return;
    }

    // Descontar la apuesta del usuario
    global.db.data.users[m.sender].diamantes -= bet;

    // Animación de SLOTS
    const symbols = ['🍒', '🍋', '🍉', '🍇', '⭐'];
    const initialMessage = await conn.sendMessage(m.chat, { text: '🎰 **SLOTS** 🎰\n----------------\n⬜ | ⬜ | ⬜\n----------------\nGirando...' });

    for (let i = 0; i < 5; i++) {
        const randomResult = [
            symbols[Math.floor(Math.random() * symbols.length)], 
            symbols[Math.floor(Math.random() * symbols.length)], 
            symbols[Math.floor(Math.random() * symbols.length)]
        ];
        await conn.sendMessage(m.chat, { text: `🎰 **SLOTS** 🎰\n----------------\n${randomResult.join(' | ')}\n----------------\nGirando...`, edit: initialMessage.key });
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Resultado final
    const result = spinSlots();
    const evaluation = evaluateResult(result, bet);
    global.db.data.users[m.sender].diamantes += evaluation.winnings; // Agregar las ganancias al usuario

    await conn.sendMessage(m.chat, { text: `🎰 **SLOTS** 🎰\n----------------\n${result.join(' | ')}\n----------------\n${evaluation.message}\nGanancias: ${evaluation.winnings}`, edit: initialMessage.key });
};

handler.command = ['slots'];
handler.help = ['slots <cantidad>'];
handler.tags = ['games'];

export default handler;