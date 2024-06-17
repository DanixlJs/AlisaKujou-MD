let handler = async (m, { conn, text, usedPrefix, command, isPrems}) => {
     if (isPrems) return m.reply(`✧ Ya eres un Usuario Premium.`);
     let noPrem = `❀ Puedes adquirir tu Pase Premium en nuestro Patreon.\n> ${global.patreon}\n\n✰ Con tu Compra recibiras un Pase Premium y tambien los siguientes Articulos.\n◈ Diamantes\n◈ AlisaCoins\n◈ Experiencia\n◈ Y mas.`;
     if (!isPrems) conn.reply(m.chat, `${noPrem}`, m, fake, );
}

handler.registrado = true;
handler.help = ['premium'];
handler.command = ['premium'];
handler.tags = ['info'];

export default handler;
