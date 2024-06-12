
const handler = async (m, { conn, args, usedPrefix, command }) => {
    if (args.length < 1) {
        await conn.reply(m.chat, `✧ Ingrese una opción valida, Ejemplo:\n> → *${usedPrefix + command} <antiCall>*`, m);
        return;
    }

    const option = args[0].toLowerCase();
    const options = [
      "autoread",
      "autoread2",
      "restrict",
      "antiCall",
      "antiPrivate",
      "modejadibot",
      "antispam",
      "audios_bot",
      "modoia"
    ];

    if (!options.includes(option)) {
        await conn.reply(m.chat, `✧ La opción seleccionada no es válida, Las opciones disponibles son:\n> → ${options.join('\n> → ')}`, m);
        return;
    }

    const bot = global.db.data.settings[conn.user.jid];

    bot[option] = !bot[option];

    await conn.reply(m.chat, `❀ *${option}* ha sido ${bot[option] ? '*activada*' : '*desactivada*'} correctamente.`, m, fake, );
};

handler.help = ['towner <opción>'];
handler.command = ['towner'];
handler.tags = ['owner'];
handler.rowner = true;
handler.registrado = true;

export default handler;
