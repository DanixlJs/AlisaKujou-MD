import fs from 'fs';

const handler = async (m, { conn, args }) => {
  if (args.length < 1) {
    return conn.reply(m.chat, '✧ Debes proporcionar una categoría.', m);
  }

  const category = args[0].toLowerCase();

  const dbPath = './media/database/db.json';
  const dbData = JSON.parse(fs.readFileSync(dbPath));

  if (!(category in dbData.links) || dbData.links[category].length === 0) {
    return conn.reply(m.chat, `✧ No hay enlaces en la categoría *${category}*.`, m);
  }

  const randomIndex = Math.floor(Math.random() * dbData.links[category].length);
  const randomLink = dbData.links[category][randomIndex];

  conn.reply(m.chat, randomLink, m);
};

handler.help = ['getlink <categoría>'];
handler.tags = ['owner'];
handler.command = ['getlink'];
handler.group = true;
handler.rowner = true;

export default handler;