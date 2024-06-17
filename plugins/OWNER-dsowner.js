import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '✧ Usa éste comando en el Bot Principal.'}, {quoted: m });
  }
  await conn.sendMessage(m.chat, {text: '❀ Iniciando eliminación de archivos de Sesión.'}, {quoted: m });
  const sessionPath = './Session/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: '✧ La carpeta de Sesión está vacío o no existe.'}, {quoted: m });
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '✧ Sin archivos para eliminar en la carpeta de Sesión.'}, {quoted: m });
    } else {
      await conn.sendMessage(m.chat, {text: `❀ Se eliminaron *${filesDeleted}* archivos de Sesión.`}, {quoted: m });
    }
  } catch (err) {
    console.error('✧ Error ⪼', err);
    await conn.sendMessage(m.chat, {text: '✧ Ocurrió un error inesperado.'}, {quoted: m });
  }
  await conn.sendMessage(m.chat, {text: `❀ Hola, ahora me vez?`}, {quoted: m });
};
handler.help = ['dsowner'];
handler.tags = ['owner'];
handler.command = ['dsowner'];
handler.rowner = true;
handler.registrado = true;
export default handler;