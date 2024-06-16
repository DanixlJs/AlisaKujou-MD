const handler = async (m, {conn}) => {
if (m.sender === conn.user.jid) return

conn.sendFile(m.chat, global.icons, 'img.jpg', '❀ Felicidades invadiste Polonia, Alemania estaría orgulloso de ti.', m,);
}

handler.command = ['polonia'];
handler.mods = true;

export default handler;