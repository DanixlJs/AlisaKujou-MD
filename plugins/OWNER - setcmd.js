const handler = async (m, {conn, text, usedPrefix, command}) => {
  global.db.data.sticker = global.db.data.sticker || {};
  if (!m.quoted) throw 'Responda a un Sticker o Imagen...';
  if (!m.quoted.fileSha256) throw 'Solo se puede usar con Stikers o Imágenes.';
  if (!text) throw `Responda a un Stiker o Imagen...`;
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) throw 'Solo el Dueño del Bot puede usar esta función.';
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`*Cmd* agregado con éxito.`);
};
handler.command = ['setcmd', 'addcmd'];
handler.tags = ['owner'];
handler.help = ['setcmd <texto>'];
handler.rowner = true;
export default handler;
