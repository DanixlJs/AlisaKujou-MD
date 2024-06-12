const handler = async (m, {conn, text, usedPrefix, command, groupMetadata}) => {
  const user = global.db.data.users[m.sender];
  const time = user.reportime + 30000;

  if (new Date - user.reportime < 30000) throw `✧ Espera *${msToTime(time - new Date())}* para volver a enviar otro reporte.`;

  if (!text) throw `✧ Por favor escribe el reporte que quieras enviar a los Moderadores.`;

  if (text.length < 10) throw `✧ El reporte es demasiado corto, mínimo 10 caracteres.`;

  if (text.length > 1000) throw `✧ El límite del reporte es de 1000 caracteres.`;

  const teks = `❀ 𝗥𝗘𝗣𝗢𝗥𝗧𝗘 𝗥𝗘𝗖𝗜𝗕𝗜𝗗𝗢\n\n✰ *Usuario ⪼* wa.me/${m.sender.split`@`[0]}\n◈ *Mensaje ⪼* ${text}\n◈ *Grupo ⪼* ${groupMetadata.subject}\n◈ *ID ⪼* ${groupMetadata.id}\n\n➤ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\n✰ *Nombre ⪼* ${global.botname}\n◈ *Versión ⪼* ${global.vs}`;

conn.reply('595983799436@s.whatsapp.net', teks, m, fake, );

conn.reply('120363284046748076@g.us', teks, m, fake, );

  conn.reply(m.chat, '❀ El reporte se envió correctamente a los Moderadores, de ser necesario recibirá una respuesta.', m, fake, );
  user.reportime = new Date * 1;
};

handler.help = ['report <texto>', 'reportar <texto>'];
handler.tags = ['info'];
handler.command = ['report', 'reportar'];
handler.group = true,
handler.registrado = true;

export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) * 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) * 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' Minuto(s) ' + seconds + ' Segundo(s)';
}
