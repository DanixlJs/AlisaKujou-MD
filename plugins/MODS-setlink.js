import fs from 'fs';

const handler = async (m, { conn, args }) => {
if (m.sender === conn.user.jid) return;
  if (args.length < 2) {
    return conn.reply(m.chat, '✧ Debes proporcionar una categoría y un enlace.', m);
  }

  const category = args[0].toLowerCase();
  const link = args[1];

  const dbPath = './media/database/db.json';
  const dbData = JSON.parse(fs.readFileSync(dbPath));

  if (!(category in dbData.links)) {
    return conn.reply(m.chat, `✧ La categoría *${category}* no es válida.`, m);
  }

  dbData.links[category].push(link);

  fs.writeFileSync(dbPath, JSON.stringify(dbData, null, 2));

  conn.reply(m.chat, `❀ Enlace agregado a la categoría *${category}*.`, m);
};

handler.help = ['setlink <categoría> <enlace>'];
handler.tags = ['mods'];
handler.command = ['setlink'];
handler.group = true;
handler.mods = true;

export default handler;