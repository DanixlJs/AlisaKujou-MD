let handler = async (m, { conn, text, usedPrefix, command}) => {
let user = global.db.data.users;
if (user.premium) return m.reply(`✧ Ya eres un Usuario Premium.`); 
let Shop = `❀ *TIENDA - SHOP*
✰ Bienvenido a la tienda ヾ(❀╹◡╹)ﾉﾞ

❀ *ARTÍCULOS*
✰ _Pase Nivel 1 🏷️_
◈ *Tiempo:* 5 minutos
◈ *Precio:* 670.000 ${global.botcoins}
◈ *_${usedPrefix}pass1_*

✰ _Pase Nivel 2 🏷️_
◈ *Tiempo:* 10 minutos
◈ *Precio:* 1.000.000 ${global.botcoins}
◈ *_${usedPrefix}pass2_*

✰ _Pase Nivel 3 🏷️_
◈ *Tiempo:* 1 hora
◈ *Precio:* 10.000 Diamantes
◈ *_${usedPrefix}pass3_*

◈ _Pase Nivel 4 💎_
◈ *Tiempo:* 1 mes
◈ *Precio:* 2 USD
◈ *Tienda:* ${global.patreon}
`;
if (command === 'premium' && !isPrems) conn.reply(m.chat, Shop, m, fake, );
if (command === 'pass1') {
if (user.dinero < 670000) return m.reply('✧ No tienes suficientes ${global.botcoins} para comprar éste Producto.');
user.dinero -= 670000;
user.premiumTime += 300000;
user.premium = true;
conn.reply(m.chat, '❀ Felicidades, ahora eres un usuario premium por 5 minutos.', m, fake, );
};
if (command === 'pass2') {
if (user.dinero < 1000000) return m.reply('✧ No tienes suficientes ${global.botcoins} para comprar éste Producto.');
user.dinero -= 1000000;
user.premiumTime += 600000;
user.premium = true;
conn.reply(m.chat, '❀ Felicidades, ahora eres un usuario premium por 10 minutos.', m, fake, );
};
if (command === 'pass3') {
if (user.diamantes < 10000) return m.reply('✧ No tienes suficientes Diamantes para comprar éste Producto.');
user.diamantes -= 10000;
user.premiumTime += 3600000;
user.premium = true;
conn.reply(m.chat, '❀ Felicidades, ahora eres un usuario premium por 1 hora.', m, fake, );
}
};
handler.registrado = true;
handler.help = ['premium'];
handler.command = ['premium', 'pass1', 'pass2', 'pass3'];
handler.tags = ['info'];
export default handler;
