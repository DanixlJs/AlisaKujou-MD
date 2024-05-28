import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw 'Ingrese un usuario de TikTok para obtener su perfil.
  const res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
  conn.sendFile(m.chat, res, 'error.jpg', `Aqui tienes el perfil de  $*{text}*`, m, false);
};

handler.help = ['pptiktok <username>'];
handler.tags = ['downloader'];
handler.register = true;
handler.command = /^(pptiktok)$/i;

export default handler;
