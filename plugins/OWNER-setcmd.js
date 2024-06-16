const handler = async (m, {conn, text, usedPrefix, command}) => {
if ( m.sender === conn.user.jid) return

  global.db.data.sticker = global.db.data.sticker || {};

  if (!m.quoted) return m.reply('✧ Responde a un Sticker para agregarle el Comando.');
  if (!m.quoted.fileSha256) return m.reply('✧ Responde a un Sticker o Imagen.');
  if (!text) return m.reply(`✧ Ingresa el comando que quieras poner.`);
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) return m.reply('✧ No tienes permiso para usar ésta función.');
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`❀ CMD agregado con éxito.`);
};

handler.command = ['setcmd', 'addcmd'];
handler.tags = ['owner'];
handler.help = ['setcmd <texto>'];
handler.rowner = true;

export default handler;
