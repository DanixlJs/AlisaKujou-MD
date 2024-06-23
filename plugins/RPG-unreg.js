import {createHash} from 'crypto';
const handler = async function(m, {args, conn, usedPrefix}) {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  if (!args[0]) return m.reply(`✧ Ingrese su número de serie.`);
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) return m.reply(`✧ Verifique que sea correcto, Use:\n> *${usedPrefix}myns* para saber su número de serie.`);
  user.registrado = false;
  conn.reply(m.chat, `❀ Registro eliminado.`, m, fake, );
};
handler.help = ['unreg <serie>'];
handler.tags = ['rpg'];
handler.command = ['unreg'];
handler.registrado = true;
export default handler;
