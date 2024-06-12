const handler = async (m, { conn, args, usedPrefix, command }) => {
    if (args.length < 1) {
        await conn.reply(m.chat, `✧ Ingrese una opción valida, Ejemplo:\n> → *${usedPrefix + command} <modoadmin>*`, m);
        return;
    }

    const option = args[0].toLowerCase();
    const options = [
        "welcome",
        "detect",
        "detect2",
        "antidelete",
        "modohorny",
        "reaction",
        "autosticker",
        "audios",
        "antiLink",
        "antiLink2",
        "antiviewonce",
        "antiToxic",
        "antiTraba",
        "antiArab",
        "antiArab2",
        "antiporno",
        "modoadmin",
        "simi",
        "game",
        "autolevelup"
    ];

    if (!options.includes(option)) {
        await conn.reply(m.chat, `✧ La opción seleccionada no es válida, Las opciones disponibles son:\n> → ${options.join('\n> → ')}`, m);
        return;
    }

    const chat = global.db.data.chats[m.chat];

    chat[option] = !chat[option];

    await conn.reply(m.chat, `❀ *${option}* ha sido ${chat[option] ? '*activada*' : '*desactivada*'} correctamente.`, m, fake, );
};

handler.help = ['toggle <opción>'];
handler.command = ['toggle'];
handler.tags = ['grupo'];
handler.admin = true;
handler.registrado = true;

export default handler;
