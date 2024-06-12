
const handler = async (m, { conn, args, usedPrefix, command }) => {
    if (args.length < 1) {
        await conn.reply(m.chat, `✧ Ingrese una opción valida, Ejemplo:\n> → *${usedPrefix + command} <antiCall>*`, m);
        return;
    }

    const option = args[0].toLowerCase();
    const options = [
      "self",
      "autoread",
      "autoread2",
      "restrict",
      "antiCall",
      "antiPrivate",
      "modejadibot",
      "antispam",
      "audios_bot",
      "modoia",
      `${global.opts['pconly']}`,
      `${global.opts['pgonly']}`,
      `${global.opts['self']}`
    ];

    if (!options.includes(option)) {
        await conn.reply(m.chat, `✧ La opción seleccionada no es válida, Las opciones disponibles son:\n> → *${options.join('\n> → *')*}*`, m);
        return;
    }

    const chat = global.db.data.chats[m.chat];

    chat[option] = !chat[option];

    await conn.reply(m.chat, `❀ *${option}* ha sido ${chat[option] ? '*activada*' : '*desactivada*'} correctamente.`, m, fake, );
};

handler.help = ['towner <opción>'];
handler.command = ['towner'];
handler.tags = ['owner'];
handler.rowner = true;
handler.registrado = true;

export default handler;
