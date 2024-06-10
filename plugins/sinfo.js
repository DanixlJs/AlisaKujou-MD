import fs from 'fs';
import path from 'path';


const dbPath = './anime/database/db.json';
const loadDB = (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
};

let animes = loadDB(dbPath);

const handler = async (m, { conn, args }) => {
    if (args.length !== 1) {
        await conn.reply(m.chat, '❀ Uso incorrecto. Ejemplo: /sinfo <Nombre del Anime>', m);
        return;
    }

    const animeName = args[0];
    const anime = animes.find((anime) => anime.name.toLowerCase() === animeName.toLowerCase());

    if (!anime) {
        await conn.reply(m.chat, `❀ No se encontró información para el anime ${animeName}.`, m);
        return;
    }

    const message = `
Anime: ${anime.name}
Tag: ${anime.tag}
ID: ${anime.id}
N° Personajes: ${anime.characters.length}
    `;

    await conn.reply(m.chat, message, m);
};

handler.help = ['sinfo <Nombre del Anime>'];
handler.tags = ['anime'];
handler.command = ['sinfo'];
handler.rowner = true;

export default handler;