const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata, conn}) {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  let texto =`❀ *I LOVE YOU*
✰ ${toM(a)}
◈ Deberias Casarte con 
✰ ${toM(b)}
> Hacen Una Bonita Pareja 💓`
   m.reply(texto, null, { mentions: [a, b], });
}
handler.help = ['formarpareja'];
handler.tags = ['rpg'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
handler.registrado = true;
export default handler;
