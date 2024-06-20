import TicTacToe from '../lib/tictactoe.js';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  
  if (!global.db.data.chats[m.chat].game) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  conn.game = conn.game ? conn.game : {};
  if (Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('✧ Todavía estás en juego.');
  if (!text) return m.reply(`✧ Ingresa un nombre para la sala.`);
  let room = Object.values(conn.game).find((room) => room.state === 'WAITING' && (text ? room.name === text : true));
  if (room) {
    await m.reply('❀ Inicia el juego.');
    room.o = m.chat;
    room.game.playerO = m.sender;
    room.state = 'PLAYING';
    const arr = room.game.render().map((v) => {
      return {
        X: '✖️',
        O: '⭕',
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
      }[v];
    });
    const str = `❀ *TRES EN RAYAS*
✖️ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}
> → Turno de @${room.game.currentTurn.split('@')[0]}
`.trim();
    if (room.x !== room.o) await conn.sendMessage(room.x, {text: str, mentions: this.parseMention(str)}, {quoted: m});
    await conn.sendMessage(room.o, {text: str, mentions: conn.parseMention(str)}, {quoted: m});
  } else {
    room = {
      id: 'tictactoe-' + (+new Date),
      x: m.chat,
      o: '',
      game: new TicTacToe(m.sender, 'o'),
      state: 'WAITING'};
    if (text) room.name = text;
    const imgplay = `https://cope-cdnmed.agilecontent.com/resources/jpg/8/9/1590140413198.jpg`;
    conn.reply(m.chat, `✧ Esperando oponente, para eliminar la sale usa.\n> → *${usedPrefix}delttt*\n◈ Para unirte a la sala usa.\n> → *${usedPrefix + command} ${text}*`, m, fake, );
    conn.game[room.id] = room;
  }
};
handler.command = ['ttt', 'tictactoe']
handler.help = ['ttt <nombre>']
handler.registrado = true
handler.group = true 
export default handler;
