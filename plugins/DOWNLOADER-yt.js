import ytdl from 'ytdl-core';
import fs from 'fs';
import path from 'path';

const handler = async (m, { conn, args, usedPrefix }) => {
    if (!args[0]) {
        await conn.reply(m.chat, `✧ Ingresa el Link del video que quieras descargar.`, m);
        return;
    }

    const url = args[0];

    if (!ytdl.validateURL(url)) {
        await conn.reply(m.chat, '✧ Ingresa un enlace válido de YouTube.', m);
        return;
    }

    try {
        const info = await ytdl.getInfo(url);
        const videoTitle = info.videoDetails.title.replace(/[\/\\?%*:|"<>]/g, '-');

        const filePath = path.resolve(__dirname, './tmp', `${videoTitle}.mp4`);
        
        const videoStream = ytdl(url, { quality: 'highestvideo' });

        videoStream.pipe(fs.createWriteStream(filePath));

        videoStream.on('end', async () => {
            await conn.sendFile(m.chat, filePath, `${videoTitle}.mp4`, `❀ *YOUTUBE DL*\n✰ *Título ⪼* ${videoTitle}`, m);
            fs.unlinkSync(filePath);
        });

        videoStream.on('error', (error) => {
            console.log('✧ Error ⪼', error);
            m.reply('✧ Ocurrió un error inesperado.');
        });

    } catch (error) {
        console.log('✧ Error ⪼', error);
        m.reply('✧ Ocurrió un error inesperado.');
    }
};

handler.help = ['yt <link>'];
handler.tags = ['downloader'];
handler.command = ['yt', 'youtube'];
handler.registrado = true;
handler.diamantes = 10;

export default handler;
