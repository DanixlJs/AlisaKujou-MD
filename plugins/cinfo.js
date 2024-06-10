import fs from 'fs';
import path from 'path';


const charactersPath = './anime/characters.json';
const loadDB = (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
};

let characters = loadDB(charactersPath);

const handler = async (m, { conn, args }) => {
    if (args.length !== 1) {
        await conn.reply(m.chat, '❀ Uso incorrecto. Ejemplo: /cinfo <Nombre del Personaje>', m);
        return;
    }

    const characterName = args[0];
    const character = characters.find((char) => char.name.toLowerCase() === characterName.toLowerCase());

    if (!character) {
        await conn.reply(m.chat, `❀ No se encontró información para el personaje ${characterName}.`, m);
        return;
    }

    const message = `
Nombre: ${character.name}
Tag: ${character.source}
ID: ${character.id}
Fuente: ${character.source}
Valor: ${character.value}
    `;

    await conn.reply(m.chat, message, m);
};

handler.help = ['cinfo <Nombre del Personaje>'];
handler.tags = ['anime'];
handler.command = ['cinfo'];
handler.rowner = true;

export default handler;