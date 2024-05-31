import cp, {exec as _exec} from 'child_process';
import {promisify} from 'util';
import fs from 'fs';
const exec = promisify(_exec).bind(cp);
const handler = async (m, {conn, isROwner, usedPrefix, command, text}) => {
  const ar = Object.keys(plugins);
  const ar1 = ar.map((v) => v.replace('.js', ''));
  if (!text) throw `⧼✦⧽ 𝕀𝕟𝕘𝕣𝕖𝕤𝕒 𝕖𝕝 𝕟𝕠𝕞𝕓𝕣𝕖 𝕕𝕖𝕝 ℙ𝕝𝕦𝕘𝕚𝕟.`;
  if (!ar1.includes(text)) return m.reply(`⧼✦⧽ ℕ𝕠 𝕤𝕖 𝕖𝕟𝕔𝕠𝕟𝕥𝕣𝕠 𝕖𝕝 ℙ𝕝𝕦𝕘𝕚𝕟, 𝕧𝕖𝕣𝕚𝕗𝕚𝕢𝕦𝕖 𝕢𝕦𝕖 𝕤𝕖𝕒 𝕔𝕠𝕣𝕣𝕖𝕔𝕥𝕠.`);
  let o;
  try {
    o = await exec('cat plugins/' + text + '.js');
  } catch (e) {
    o = e;
  } finally {
    const {stdout, stderr} = o;
    if (stdout.trim()) {
      const aa = await conn.sendMessage(m.chat, {text: stdout}, {quoted: m});
      await conn.sendMessage(m.chat, {document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, {quoted: aa});
    }
    if (stderr.trim()) {
      const aa2 = await conn.sendMessage(m.chat, {text: stderr}, {quoted: m});
      await conn.sendMessage(m.chat, {document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, {quoted: aa2});
    }
  }
};

handler.help = ['getplugin <archivo>'];
handler.tags = ['owner'];
handler.command = ['getplugin'];
handler.rowner = true;

export default handler;
