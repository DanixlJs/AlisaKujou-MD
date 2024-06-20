let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`✧ Por favor ingresa una opción.`);
  let args = text.split(' ');
  let option = args[0].toLowerCase();
  let options = [
  "self",
  "autoread",
  "antiCall",
  "antiPrivate",
  "modejadibot",
  "antispam",
  "modoia",
  "pconly",
  "gconly",
];
  if (!options.includes(option)) {
    return m.reply(`✧ La opción *${option}* no es válida, Use *${usedPrefix}config* para ver las opciones disponibles.`);
  }
  let target = conn.user.jid;
  if (!global.db.data.settings[target]) global.db.data.settings[target] = {};
  if (command === 'oon' || command === 'oenable') {
    global.db.data.settings[target][option] = true;
    conn.sendMessage(m.chat, { text: `❀ La opción *${option}* ha sido activada.` }, { quoted: m });
  } else if (command === 'ooff' || command === 'odisable') {
    global.db.data.settings[target][option] = false;
    conn.sendMessage(m.chat, { text: `❀ La opción *${option}* ha sido desactivada.` }, { quoted: m });
  }
};

handler.help = ['oon <opción>', 'ooff <opción>'];
handler.tags = ['grupo'];
handler.command = ['oon', 'oenable', 'ooff', 'odisable'];
handler.registrado = true;
handler.rowner = true;

export default handler;