import fetch from 'node-fetch';

const handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) {
        return conn.reply(m.chat, `✧ Ingresa un enlace para descargar la imagen o video.`, m);
    }

    const url = args[0];
    try {
        const response = await fetch(url);
        if (!response.ok) throw '✧ Error al descargar el archivo.';

        const buffer = await response.buffer();
        const contentType = response.headers.get('content-type');

        if (contentType.startsWith('image/')) {
            await conn.sendMessage(m.chat, { image: buffer, caption: `❀ Imagen descargada desde:\n> *${url}*` }, { quoted: m });
        } else if (contentType.startsWith('video/')) {
            await conn.sendMessage(m.chat, { video: buffer, caption: `❀ Video descargado desde:\n> *${url}*` }, { quoted: m });
        } else {
            throw '✧ Tipo de archivo no soportado, solo se pueden descargar imágenes o videos.';
        }
    } catch (error) {
        console.error(error);
        await conn.reply(m.chat, error.toString(), m);
    }
};

handler.help = ['g <link>'];
handler.tags = ['mods'];
handler.command = ['g'];
handler.mods = true;
handler.registrado = true;

export default handler;
