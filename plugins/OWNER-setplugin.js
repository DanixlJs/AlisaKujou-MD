import fs from 'fs';

const handler = async (m, { conn, args, usedPrefix }) => {
if ( m.sender === conn.user.jid) return
    if (args.length < 2) {
        await conn.reply(m.chat, `✧ Asegúrate de usarlo de la siguiente manera, Ejemplo:\n> *${usedPrefix}setplugin <archivo> "código"*`, m);
        return;
    }

    const pluginName = args[0].toLowerCase();
    const pluginPath = `./plugins/${pluginName}.js`;

    if (!fs.existsSync(pluginPath)) {
        await conn.reply(m.chat, '✧ No existe ningún plugin con ese nombre.', m);
        return;
    }

    const code = m.text.split(/["“”]/)[1];

    if (!code) {
        await conn.reply(m.chat, '✧ No se encontró código en el comando. Asegúrate de incluir el código entre comillas.', m);
        return;
    }

    fs.writeFileSync(pluginPath, code);

    await conn.reply(m.chat, `❀ Código del plugin *${pluginName}* actualizado correctamente.`, m, fake, );
};

handler.help = ['setplugin <archivo> "código"'];
handler.command = ['setplugin'];
handler.rowner = true;
handler.tags = ['owner'];
handler.registrado = true;

export default handler;