let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  try {
    let user = global.db.data.users[m.sender];
    let [type, amount] = text.split(' ');
    if (command === 'dep' || command === 'd' || command === 'deposit') {
      if (type === 'diamantes' || type === 'dinero') {
        if (!amount || isNaN(amount) || amount <= 0) {
          m.reply(`✧ Ingrese una cantidad válida de *${type}* para depositar.`);
        }
        amount = parseInt(amount);
        if (type === 'diamantes') {
          if (user.diamantes < amount) {
            m.reply(`✧ No tienes suficientes Diamantes.`);
          }
          user.diamantes -= amount;
          user.bank = amount;
        } else if (type === 'dinero') {
          if (user.dinero < amount) {
            m.reply(`✧ No tienes suficientes ${global.botcoins}`);
          }
          user.dinero -= amount;
          user.bank2 = amount;
        }
        m.reply(`✧ Has depositado *${amount}* *${type}* en tu banco.`);
      } else if (type === 'all') {
        let totalDiamantes = user.diamantes;
        let totaldinero = user.dinero;
        user.bank = totalDiamantes;
        user.bank2 = totaldinero;
        user.diamantes = 0;
        user.dinero = 0;
        m.reply(`✧ Has depositado todos tus Diamantes y ${global.botcoins} en el banco.`);
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
handler.help = ['dep <tipo> <cantidad>', 'dep all'];
handler.tags = ['rpg'];
handler.command = ['dep', 'd', 'deposit'];
handler.registrado = true;
export default handler;
