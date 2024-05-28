const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `Para saber el Texto use *${usedPrefix}listcmd*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw 'Solo el Dueño del Bot puede usar está función.';
  delete sticker[hash];
  m.reply(`*Cmd* eliminado con éxito.`);
};
handler.command = ['delcmd'];
handler.tags = ['owner'];
handler.help = ['delcmd'];
handler.rowner = true;
export default handler;
