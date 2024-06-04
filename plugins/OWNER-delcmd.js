const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `✧ Use *${usedPrefix}listcmd* para ver la lista de CMD's agregados.`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '✧ No tienes permiso para usar ésta función.';
  delete sticker[hash];
  m.reply(`❀ CMD eliminado con éxito.`);
};

handler.command = ['delcmd <cmd>'];
handler.tags = ['owner'];
handler.help = ['delcmd'];
handler.rowner = true;

export default handler;
