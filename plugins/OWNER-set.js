var handler = async (m, { conn, args }) => {
if (m.sender === conn.user.jid) return;
  if (args.length < 2) {
    return conn.reply(m.chat, '✧ Ingresa una categoría y el texto correspondiente.', m);
  }
  const categoria = args[0].toLowerCase();
  const texto = args.slice(1).join(' ');
  const botConfig = global.db.data.settings[conn.user.jid] || {};
  switch (categoria) {
    case 'botname':
      botConfig.botname = texto;
      break;
    case 'botwm':
      botConfig.botwm = texto;
      break;
    case 'botcoins':
      botConfig.botcoins = texto;
      break;
    default:
      return conn.reply(m.chat, '✧ La categoría que ingresaste no es válida.', m);
  }
  global.db.data.settings[conn.user.jid] = botConfig;
  conn.reply(m.chat, '❀ Configuración actualizada correctamente.', m);
};

handler.command = ['set'];
handler.help = ['set <categoría> <texto>'];
handler.tags = ['owner'];
handler.registrado = true;
handler.rowner = true;

export default handler;