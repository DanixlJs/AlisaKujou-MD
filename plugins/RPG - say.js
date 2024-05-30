const handler = async (m, {conn, text}) => {
if (!text) throw `⧼✦⧽ 𝕌𝕤𝕠 ℂ𝕠𝕣𝕣𝕖𝕔𝕥𝕠:\n→ *{usedPrefix} <texto>*`;
    m.reply(text)}

handler.command = ['say'];
handler.register = true;
handler.tags = ['rpg'];
handler.help = ['say <texto>'];

export default handler;