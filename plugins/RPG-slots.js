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
return { message: '🎉 ¡Jackpot! Ganaste!', winnings: bet * 10 };
} else if (result[0] === result[1] || result[1] === result[2] || result[0] === result[2]) {
return { message: '✨ ¡Casi! Ganaste un pequeño premio.', winnings: bet * 2 };
} else {
return { message: '😞 Mejor suerte la próxima vez.', winnings: 0 };
}
};
const handler = async (m, { conn, args }) => {
const bet = parseInt(args[0]);
if (isNaN(bet) || bet <= 0) {
await conn.reply(m.chat, '✧ Por favor, ingresa una cantidad válida para apostar.', m);
return;
}
const symbols = ['🍒', '🍋', '🍉', '🍇', '⭐'];
let messageId = await conn.reply(m.chat, '🎰 *SLOTS* 🎰\n----------------\n⬜ | ⬜ | ⬜\n----------------\nGirando...', m);
for (let i = 0; i < 5; i++) {
const randomResult = [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]];
await conn.editMessage(m.chat, messageId, '🎰 *SLOTS* 🎰\n----------------\n' + randomResult.join(' | ') + '\n----------------\nGirando...');
await new Promise(resolve => setTimeout(resolve, 500));
}
const result = spinSlots();
const evaluation = evaluateResult(result, bet);
await conn.editMessage(m.chat, messageId, '🎰 *SLOTS* 🎰\n----------------\n' + result.join(' | ') + '\n----------------\n' + evaluation.message + \nGanancias: ${evaluation.winnings});
};
handler.command = ['slots'];
handler.help = ['slots <cantidad>'];
handler.tags = ['rpg'];
export default handler
