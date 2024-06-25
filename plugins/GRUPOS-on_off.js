let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`✧ Por favor ingresa una opción.`);
  let option = text;
  let options = [
  "welcome",
  "detect",
  "antidelete",
  "nsfw",
  "autosticker",
  "antiLink",
  "antiLink2",
  "antiunavez",
  "antiToxic",
  "antiTraba",
  "antiArab",
  "rpg",
  "antolevelup",
  "modoadmin",
  "antiNsfw",
  "simi",
];
  if (!options.includes(option)) {
    return m.reply(`✧ La opción *${option}* no es válida.\n> Use *${usedPrefix}config* para ver las opciones disponibles.`);
  }
  let target = m.chat;
  if (!global.db.data.chats[target]) global.db.data.chats[target] = {};
  if (command === 'on' || command === 'enable') {
    global.db.data.chats[target][option] = true;
    conn.sendMessage(m.chat, { text: `❀ La opción *${option}* ha sido activada.` }, { quoted: m });
  } else if (command === 'off' || command === 'disable') {
    global.db.data.chats[target][option] = false;
    conn.sendMessage(m.chat, { text: `❀ La opción *${option}* ha sido desactivada.` }, { quoted: m });
  }
};

handler.help = ['on <opción>', 'off <opción>'];
handler.tags = ['grupo'];
handler.command = ['on', 'enable', 'off', 'disable'];
handler.registrado = true;
handler.group = true;
handler.admin = true;

export default handler;
