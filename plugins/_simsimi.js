import translate from '@vitalets/google-translate-api';
import axios from 'axios';
import fetch from 'node-fetch';
const handler = (m) => m;

handler.before = async (m) => {
  const chat = global.db.data.chats[m.chat];
  if (chat.simi) {
    if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
    let textodem = m.text;
    try {
      const ressimi = await simitalk(textodem);
      await m.conn.sendMessage(m.chat, { text: ressimi.resultado.simsimi }, { quoted: fkontak });
    } catch {
      throw '⧼✦⧽ 𝕆𝕔𝕦𝕣𝕣𝕚𝕠́ 𝕦𝕟 𝕖𝕣𝕣𝕠𝕣 𝕚𝕟𝕖𝕤𝕡𝕖𝕣𝕒𝕕𝕠.';
    }
    return !0;
  }
  return true;
};
export default handler;

async function simitalk(ask, apikeyyy = "iJ6FxuA9vxlvz5cKQCt3", language = "es") {
    if (!ask) return { status: false, resultado: { msg: "⧼✦⧽ 𝔻𝕖𝕓𝕖𝕤 𝕚𝕟𝕘𝕣𝕖𝕤𝕒𝕣 𝕦𝕟 𝕥𝕖𝕩𝕥𝕠 𝕡𝕒𝕣𝕒 𝕙𝕒𝕓𝕝𝕒𝕣 𝕔𝕠𝕟 𝕊𝕚𝕞𝕊𝕚𝕞𝕚." }};
    try {
        const response1 = await axios.get(`https://delirios-api-delta.vercel.app/tools/simi?text=${encodeURIComponent(ask)}`);
        const trad1 = await translate(`${response1.data.data.message}`, {to: language, autoCorrect: true});
        if (trad1.text == 'indefinida' || response1 == '' || !response1.data) trad1 = XD // Se usa "XD" para causar error y usar otra opción.  
        return { status: true, resultado: { simsimi: trad1.text }};        
    } catch {
        try {
            const response2 = await axios.get(`https://anbusec.xyz/api/v1/simitalk?apikey=${apikeyyy}&ask=${ask}&lc=${language}`);
            return { status: true, resultado: { simsimi: response2.data.message }};       
        } catch (error2) {
            return { status: false, resultado: { msg: "⧼✦⧽ 𝕋𝕠𝕕𝕒𝕤 𝕝𝕒𝕤 𝔸ℙ𝕀'𝕤 𝕗𝕒𝕝𝕝𝕒𝕣ó𝕟, 𝕀𝕟𝕥é𝕟𝕥𝕒𝕝𝕠 𝕕𝕖 𝕟𝕦𝕖𝕧𝕠 𝕞á𝕤 𝕥𝕒𝕣𝕕𝕖.", error: error2.message }};
        }
    }
}