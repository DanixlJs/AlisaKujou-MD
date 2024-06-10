import fs from 'fs';
import path from 'path';

const dbPath = './anime/database/db.json';
const loadDB = (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
};
const saveDB = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

let animes = loadDB(dbPath);

const handler = async (m, { conn, args }) => {
    if (args.length < 2) {
        await conn.reply(m.chat, '❀ Uso incorrecto. Ejemplo: /adds <Nombre del Anime> = <Tag>', m);
        return;
    }

    const [animeName, tag] = args.join(' ').split('=').map((str) => str.trim());
    const animeId = Math.floor(100000 + Math.random() * 900000); // ID único de 6 dígitos
    const anime = {
        id: animeId.toString(),
        name: animeName,
        tag,
        characters: [],
    };

    animes.push(anime);
    saveDB(dbPath, animes);
    await conn.reply(m.chat, `❀ El anime ${animeName} ha sido agregado correctamente a la base de datos.`, m);
};

handler.help = ['adds <Nombre del Anime> = <Tag>'];
handler.tags = ['anime'];
handler.command = ['adds'];
handler.rowner = true;

export default handler;