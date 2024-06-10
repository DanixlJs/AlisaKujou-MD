import fs from 'fs';
import path from 'path';


const charactersPath = './anime/characters.json';
const haremPath = './anime/harem.json';
const loadDB = (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
};
const saveDB = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

let characters = loadDB(charactersPath);
let harems = loadDB(haremPath);

const handler = async (m, { conn }) => {
    if (!m.quoted || !m.quoted.characterId) {
        await conn.reply(m.chat, '❀ Debes responder al mensaje de un personaje con /claim para reclamarlo.', m);
        return;
    }

    const characterId = m.quoted.characterId;
    const character = characters.find((char) => char.id === characterId);

    if (!character) {
        await conn.reply(m.chat, `❀ No se encontró información para el personaje con ID ${characterId}.`, m);
        return;
    }

    if (character.claimed) {
        await conn.reply(m.chat, `❀ El personaje ${character.name} ya ha sido reclamado por otro usuario.`, m);
        return;
    }

    character.claimed = true;
    saveDB(charactersPath, characters);

    const userHarem = harems[m.sender] || { user: m.sender, characters: [] };
    userHarem.characters.push(character.name);
    harems[m.sender] = userHarem;
    saveDB(haremPath, harems);

    await conn.reply(m.chat, `❀ Has reclamado el personaje ${character.name} exitosamente.`, m);
};

handler.help = ['test2'];
handler.tags = ['anime'];
handler.command = ['test2'];
handler.rowner = true;

export default handler;