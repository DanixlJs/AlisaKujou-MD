import fs from 'fs';
import path from 'path';


const charactersPath = './anime/characters.json';
const loadDB = (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
};
const saveDB = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

let characters = loadDB(charactersPath);

const handler = async (m, { conn, args }) => {
    if (args.length < 2) {
        await conn.reply(m.chat, '❀ Uso incorrecto. Ejemplo: /addc <ID del Anime> Personaje1 = Tag\nPersonaje2 = Tag', m);
        return;
    }

    const animeId = args[0];
    const animeCharacters = args.slice(1).join(' ').split('\n').map(line => line.split('=').map(str => str.trim()));

    for (const [characterName, tag] of animeCharacters) {
        const character = {
            id: animeId,
            name: characterName,
            source: tag,
            value: 0,
            claimed: false,
            vote: 0,
        };
        characters.push(character);
    }

    saveDB(charactersPath, characters);
    await conn.reply(m.chat, `❀ Los personajes han sido agregados correctamente al anime con ID ${animeId}.`, m);
};

handler.help = ['addc <ID del Anime> Personaje1 = Tag\nPersonaje2 = Tag'];
handler.tags = ['anime'];
handler.command = ['addc'];
handler.rowner = true;

export default handler;