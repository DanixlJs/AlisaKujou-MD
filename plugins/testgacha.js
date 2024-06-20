import fs from 'fs'
import path from 'path'

const db = './src/gacha/database.json'
const db_load = (path) => (fs.readFileSync(path, 'utf8'))
const db_save = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2))
}
const series = db_load(db)

let characteres = db_load(db)

const handler = async (m, {conn, args, command, usedPrefix}) => {
    if (command === 'adds') {
    if (args.length < 2) {
        await m.reply(`Asegurate de usarlo de la siguiente manera, Ejmplo:\n> *${usedPrefix + command} <nombre> = <tag>*`)
        return
    }

    const [serie, tag] = args.join(' ').split('=').map((str) => str.strim())
    const id = Math.floor(100000 + Math.random() * 900000)
    const anime = {
        name: serie,
        tag: tag,
        id: id,
        characteres: [],
    }

    series.push(anime)
    db_save(db, series)
    await conn.reply(m.chat, `${serie} Se agregó correctamente a la Base de Datos.`)
}
    if (command === 'addc') {
        if (args.length < 2) {
            await m.reply(`Asegurate de usarlo de la siguiente manera, Ejemplo:\n> *${usedPrefix + command} <id> <character> = <tag>*`)
            return
        }

    const aid = args[0]
    const ct = args.slice(1).join(' ').split('\n').map(line => line.split('=').map(str => str.strim()))

    for (const [cname, ctag] of ct) {
        const character = {
            cname: cname,
            ctag: ctag,
            aid: aid,
            value: 50,
            claimed: false,
            voteTime: 0,
        }
    characteres.push(character)
    }
    db_save(db, characteres)
    await m.reply(`Personajes agregados al Anime con ID *${aid}*`)
    }
}

handler.command = ['adds', 'addc']
handler.help = ['adds <name> = <tag>', 'addc <id> <name> = <tag>']
handler.registrado = true
handler.rowner = true

export default handler
