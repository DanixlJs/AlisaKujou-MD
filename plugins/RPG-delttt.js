import MessageType from '@whiskeysockets/baileys';
const handler = async (m, {conn, usedPrefix, command}) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  const room = Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender));
  if (room == undefined) return conn.reply(m.chat, `✧ No estás en ninguna sala, usa *${usedPrefix}ttt <texto>* para crear una nueva.`, m, fake, );
  delete conn.game[room.id];
  await conn.reply(m.chat, '❀ Se eliminó la Sala correctamente.', m, fake, );
};
handler.command = ['delttt'];
handler.help = ['delttt'];
handler.group = true;
handler.registrado = true;
handler.fail = null;
export default handler;
