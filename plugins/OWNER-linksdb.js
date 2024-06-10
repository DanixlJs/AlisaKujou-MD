import fs from 'fs';
import path from 'path';

const dbPath = './media/database/db.json';
const loadDB = (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
};

const handler = async (m, { conn, args }) => {
    const category = args[0];
    if (!category) {
        await conn.reply(m.chat, '✧ Por favor, proporciona una categoría (video o imagen).', m);
        return;
    }

    const db = loadDB(dbPath);
    const links = db.links && db.links[category] ? db.links[category] : [];
    const count = links.length;

    await conn.reply(m.chat, `❀ Hay *${count}* links en la categoría *${category}*.`, m, fake, );
};

handler.help = ['linksdb <categoria>'];
handler.tags = ['owner'];
handler.command = ['linksdb'];
handler.registrado = true;

export default handler;
