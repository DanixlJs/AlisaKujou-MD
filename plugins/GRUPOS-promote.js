let handler = async (m, {conn, usedPrefix, text}) => {
  if (isNaN(text) && !text.match(/@/g)) {
  } else if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }
  if (!text && !m.quoted)
    return conn.reply(
      m.chat,
      '✧ Etiqueta al usuario que quieras ascender.',
      m
    );
  if (number.length > 13 || (number.length < 11 && number.length > 0))
    return conn.reply(m.chat, `✧ El número no es válido.`, m);
  try {
    if (text) {
      var user = number + "@s.whatsapp.net";
    } else if (m.quoted.sender) {
      var user = m.quoted.sender;
    } else if (m.mentionedJid) {
      var user = number + "@s.whatsapp.net";
    }
  } catch (e) {
  } finally {
    conn.groupParticipantsUpdate(m.chat, [user], "promote");
    m.react('✅');
  }
};
handler.help = ['promote <@tag>'];
handler.tags = ['grupo'];
handler.command = ['promote'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
handler.fail = null;
export default handler;
