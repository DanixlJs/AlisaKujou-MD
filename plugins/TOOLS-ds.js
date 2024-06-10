import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '✧ Solo se puede ejecutar en el Bot Principal.'}, {quoted: fkontak});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = './AlisaSession/';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '✧ No se encontró ningún archivo que incluya la ID del chat.'}, {quoted: fkontak});
    } else {
      await conn.sendMessage(m.chat, {text: `❀ Se eliminaron *${filesDeleted}* archivos de sesión.`}, {quoted: fkontak});
    }
  } catch (err) {
    console.error('✧ Error al leer la carpeta o los archivos de sesión:', err);
    await conn.sendMessage(m.chat, {text: '✧ Ocurrió un error al eliminar los archivos de sesión.'}, {quoted: fkontak});
  }
  await conn.sendMessage(m.chat, {text: `❀ Hola, ahora me vez?`}, {quoted: fkontak});
};

handler.help = ['ds'];
handler.tags = ['tools'];
handler.command = ['ds'];
handler.registrado = true;

export default handler;