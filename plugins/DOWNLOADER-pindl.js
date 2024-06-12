import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text) return m.reply('✧ Ingresa un enlace de Pinterest para descargar.');

    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*).)+[a-z]{2,}|' + 
      '((\\d{1,3}.){3}\\d{1,3}))' + 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
      '(\\#[-a-z\\d_]*)?$','i');

    if (!urlPattern.test(text)) return m.reply('✧ Ingresa un enlace de Pinterest válido.');

    let res = await axios.get(`https://api-starlights-team.koyeb.app/api/pindl?url=${text}`);
    let { type, url: sms } = res.data;

    if (type === 'image') {
      await conn.sendMessage(m.chat, { image: { url: sms }, quoted: m });
    } else if (type === 'video') {
      await conn.sendMessage(m.chat, { video: { url: sms }, quoted: m });
    } else {
      m.reply('✧ El tipo de Archivo no es compatible.');
    }
  } catch (error) {
    m.reply('✧ Ocurrió un error inesperado.');
    console.error(error);
  }
};

handler.tags = ['downloader'];
handler.help = ['pindl <link>'];
handler.command = ['pindl'];
handler.registrado = true;
handler.diamantes = 5;

export default handler;
