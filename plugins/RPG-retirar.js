let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  try {
    let user = global.db.data.users[m.sender];
    let [type, amount] = text.split(' ');
    if (command === 'retirar' || command === 'with') {
      if (type === 'diamantes' || type === 'dinero') {
        if (!amount || isNaN(amount) || amount <= 0) {
          m.reply(`✧ Ingrese una cantidad válida de *${type}* para retirar.`);
        }
        amount = parseInt(amount);
        if (type === 'diamantes') {
          if (user.diamantes < amount) {
            m.reply(`✧ No tienes esa cantidad en el Banco.`);
          }
          user.diamantes += amount;
          user.bank -= amount;
        } else if (type === 'dinero') {
          if (user.dinero < amount) {
            m.reply(`✧ No tienes esa cantidad en el Banco.`);
          }
          user.dinero += amount;
          user.bank2 -= amount;
        }
        m.reply(`✧ Has retirado *${amount}* *${type}* del banco.`);
      } else if (type === 'all') {
        let totaldiamantes = user.bank;
        let totalcoins = user.bank2;
        user.diamantes = totaldiamantes;
        user.dinero = totalcoins;
        user.bank = 0;
        user.bank2 = 0;
        m.reply(`✧ Has retirado todos tus Diamantes y ${global.botcoins} del banco.`);
      } else {
        m.reply(`✧ Asegurate de usarlo de la siguiente manera, Ejemplo:\n> *${usedPrefix + command} <tipo> <cantidad>*\n> *${usedPrefix + command} all*`);
      }
    } else {
      m.reply(`✧ Asegurate de usarlo de la siguiente manera, Ejemplo:\n> *${usedPrefix + command} <tipo> <cantidad>*\n> *${usedPrefix + command} all*`);
    }
  } catch (error) {
    console.log(error);
  }
};
handler.help = ['retirar <tipo> <cantidad>', 'retirar all'];
handler.tags = ['rpg'];
handler.command = ['retirar', 'with'];
handler.registrado = true;
export default handler;
