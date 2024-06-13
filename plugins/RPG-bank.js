let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    let user = global.db.data.users[m.sender];
    let [type, amount] = text.split(' ');

    if (command === 'dep' || command === 'd') {
      if (type === 'diamantes' || type === 'alisacoins') {
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
        } else if (type === 'alisacoins') {
          if (user.alisacoins < amount) {
            m.reply(`✧ No tienes suficientes AlisaCoins.`);
          }
          user.alisacoins -= amount;
          user.bank2 = amount;
        }

        m.reply(`✧ Has depositado *${amount}* *${type}* en tu banco.`);
      } else if (type === 'all') {
        let totalDiamantes = user.diamantes;
        let totalAlisaCoins = user.alisacoins;

        user.bank = totalDiamantes;
        user.bank2 = totalAlisaCoins;
        user.diamantes = 0;
        user.alisacoins = 0;

        m.reply(`✧ Has depositado todos tus Diamantes y AlisaCoins en el banco.`);
      } else {
        m.reply(`✧ Asegurate de usarlo de la siguiente manera, Ejemplo:\n> → *${usedPrefix + command} <tipo> <cantidad>*\n> → *${usedPrefix + command} all*`);
      }
    } else {
      m.reply(`✧ Asegurate de usarlo de la siguiente manera, Ejemplo:\n> → *${usedPrefix + command} <tipo> <cantidad>*\n> → *${usedPrefix + command} all*`);
    }
  } catch (error) {
    console.log(error);
  }
};

handler.help = ['dep <tipo> <cantidad>', 'dep all'];
handler.tags = ['rpg'];
handler.command = ['dep'];
handler.registrado = true;

export default handler;
