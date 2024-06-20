const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!global.db.data.chats[m.chat].game) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
if ( m.sender === conn.user.jid) return;
    let user = global.db.data.users[m.sender];
    let quantity = args[0] ? parseInt(args[0]) : 0;
    const diamondPrice = 500;
    if (command === 'buyall') {
        quantity = Math.floor(user.alisacoins / diamondPrice);
    }
    if (isNaN(quantity) || quantity <= 0) {
        return conn.reply(m.chat, `✧ Por favor, ingresa una cantidad válida, Ejemplo:\n> *${usedPrefix}buy 5*`, m);
    }
    const totalPrice = quantity * diamondPrice;
    if (user.alisacoins < totalPrice) {
        return conn.reply(m.chat, `✧ No tienes suficientes ${global.botcoins} para comprar *${quantity}* diamantes.\n> Te faltan *${(totalPrice - user.alisacoins)}* ${global.botcoins}`, m);
    }
    user.alisacoins -= totalPrice;
    user.diamantes += quantity;
    await conn.reply(m.chat, `❀ Has comprado *${quantity}* diamantes por *${totalPrice}* ${global.botcoins}.\n> ✰ Ahora tienes *${user.diamantes}* diamantes y *${user.alisacoins}* ${global.botcoins}`, m, fake, );
};
handler.help = ['buy <cantidad>', 'buyall'];
handler.tags = ['rpg'];
handler.command = ['buy', 'buyall'];
handler.registrado = true;
export default handler;
