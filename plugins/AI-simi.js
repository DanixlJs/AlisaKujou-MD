import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {text, command, args, usedPrefix}) => {
  if (!text) return conn.reply(m.chat, `✧ Ingresa un texto para empezar a hablar con ${global.botname}`, m, fake, )

m.react('🗣️')
  try {
    const api = await fetch('https://api.simsimi.net/v2/?text=' + text + '&lc=es');
    const resSimi = await api.json();
    conn.reply(m.chat, resSimi.success, m, fake, )
  } catch {
    try {
      if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
      if (text.includes('hola')) text = text.replace('hola', 'Hello');
      if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
      const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
      const resu = await reis.json();
      const nama = m.pushName || '1';
      const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
      const res = await api.json();
      const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
      const resu2 = await reis2.json();
      conn.reply(m.chat, resu2[0][0][0], m, fake, )
    } catch {
      throw `✧ Ocurrió un error inesperado.`;
    }
  }
};

handler.help = ['simi <texto>', 'bot <texto>']
handler.tags = ['ai']
handler.command = ['bot', 'simi']
handler.group = true
handler.register = true

export default handler