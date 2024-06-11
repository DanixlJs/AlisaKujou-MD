import { promises as fs } from 'fs';
import path from 'path';

async function handler(message, { conn }, extra) => {
  const targetJid = message.mentionedJid && message.mentionedJid[0]
    ? message.mentionedJid[0]
    : message.chat
      ? conn.user.jid
      : message.sender;

  const targetUser = `${targetJid.split('@')[0]}`;

  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(message.chat, {
      text: "✧ Este comando solo se puede usar en el Bot Principal.*"
    }, {
      quoted: message
    });
  } else {
    await conn.sendMessage(message.chat, {
      text: "❀ Eliminando Datos del SubBot."
    }, {
      quoted: message
    });
  }

  try {
    await fs.rmdir(path.join('./JadiBotSessions/', targetUser), {
      recursive: true,
      force: true
    });

    await conn.sendMessage(message.chat, {
      text: "❀ Se cerró la sesión y se eliminaron todos los Datos del SubBot."
    }, {
      quoted: message
    });
  } catch (error) {
    console.error("✧ Error ⪼", error);
  }
};

handler.help = ['delbot'];
handler.command = ['delbot'];
handler.tags = ['jadibot'];
handler.registrado = true;
handler.private = true;

export default handler;
