const handler = async (m, { conn, args, usedPrefix, command }) => {
if ( m.sender === conn.user.jid) return;
    if (!m.quoted) {
        return conn.reply(m.chat, `✧ Responde a una imagen para establecerla de Perfil.`, m);
    }

    const mime = (m.quoted.mimetype || '');
    if (!/image\/(jpe?g|png)/.test(mime)) {
        return conn.reply(m.chat, '✧ Solo se permiten imágenes en formato JPG o PNG.', m);
    }

    const image = await m.quoted.download();
    if (!image) {
        return conn.reply(m.chat, '✧ Ocurrió un error inesperado.', m);
    }

    try {
        await conn.updateProfilePicture(conn.user.jid, image);
        await conn.reply(m.chat, '✧ La foto de perfil ha sido actualizada correctamente.', m, fake, );
    } catch (error) {
        console.error(error);
        await conn.reply(m.chat, '✧ Ocurrió un error inesperado.', m);
    }
}

handler.help = ['setppbot'];
handler.tags = ['owner'];
handler.command = ['setppbot'];
handler.owner = true; 
handler.registrado = true;

export default handler;
