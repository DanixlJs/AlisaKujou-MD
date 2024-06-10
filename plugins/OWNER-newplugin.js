import fs from 'fs';

const handler = async (m, { text, conn, args, usedPrefix }) => {
    if (!text) {
        await conn.reply(m.chat, `✧ Ingresa un nombre para el nuevo plugin.`, m);
        return;
    }

    const pluginName = text;
    const pluginPath = `./plugins/${text}.js`;

    if (fs.existsSync(pluginPath)) {
        await conn.reply(m.chat, '✧ Ya existe un plugin con ese nombre.', m);
        return;
    }

    fs.writeFileSync(pluginPath, '//New Plugin');

    await conn.reply(m.chat, `❀ Plugin *${pluginName}* creado correctamente.`, m, fake, );
};

handler.help = ['newplugin <nombre>'];
handler.command = ['newplugin'];
handler.tags = ['owner'];
handler.rowner = true;
handler.registrado = true;

export default handler;