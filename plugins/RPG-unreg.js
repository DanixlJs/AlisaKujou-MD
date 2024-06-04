import {createHash} from 'crypto';

const handler = async function(m, {args, conn, usedPrefix}) {
  if (!args[0]) throw `✧ Ingrese su número de serie.`;
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw `✧ Verifique que sea correcto, Use:\n> → *${usedPrefix}myns* para saber su número de serie.`;
  user.registrado = false;
  conn.reply(m.chat, `❀ Registro eliminado.`, m, fake, );
};

handler.help = ['unreg <serie>'];
handler.tags = ['rpg'];
handler.command = ['unreg'];
handler.registrado = true;

export default handler;

