import fs from 'fs';
import path from 'path';

const dbPath = './src/gacha/database.json';

const db_load = (path) => {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
}

const db_save = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

let series = db_load(dbPath);

const handler = async (m, { conn, args, command, usedPrefix }) => {
    if (command === 'adds') {
        if (args.length < 2) {
            await m.reply(`Asegúrate de usarlo de la siguiente manera, Ejemplo:\n> *${usedPrefix + command} <nombre> = <tag>*`);
            return;
        }

        const [serie, tag] = args.join(' ').split('=').map((str) => str.trim());
        const id = Math.floor(100000 + Math.random() * 900000);
        const anime = {
            name: serie,
            tag: tag,
            id: id,
            characters: [],
        }

        series.push(anime);
        db_save(dbPath, series);
        await conn.reply(m.chat, `${serie} se agregó correctamente a la Base de Datos.`);
    }

    if (command === 'addc') {
        if (args.length < 3) {
            await m.reply(`Asegúrate de usarlo de la siguiente manera, Ejemplo:\n> *${usedPrefix + command} <id> <nombre> = <tag>*`);
            return;
        }

        const aid = parseInt(args[0], 10); // Obtener el ID como número
        const [name, tag] = args.slice(1).join(' ').split('=').map(str => str.trim()); // Obtener nombre y tag

        console.log(`Buscando anime con ID: ${aid}`); // Agregar depuración
        console.log(`Base de datos: ${JSON.stringify(series, null, 2)}`); // Mostrar base de datos

        // Verificar si el ID existe en la base de datos
        const anime = series.find(anime => anime.id === aid);
        if (!anime) {
            await m.reply(`El ID ${aid} no se encontró en la base de datos.`);
            return;
        }

        console.log(`Anime encontrado: ${JSON.stringify(anime, null, 2)}`); // Agregar depuración

        const character = {
            name: name,
            tag: tag,
            aid: aid,
            value: 50,
            claimed: false,
            voteTime: 0,
        }

        anime.characters.push(character);

        db_save(dbPath, series);
        await m.reply(`Personaje agregado al anime *${anime.name}* con ID *${aid}*`);
    }
}

handler.command = ['adds', 'addc'];
handler.help = ['adds <nombre> = <tag>', 'addc <id> <nombre> = <tag>'];
handler.registrado = true;
handler.rowner = true;

export default handler;
