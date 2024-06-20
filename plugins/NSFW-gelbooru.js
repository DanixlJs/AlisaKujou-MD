import fetch from 'node-fetch';
const handler = async (m, { conn, args, usedPrefix }) => {
    if (!args[0]) {
          if (!db.data.chats[m.chat].modohorny && m.isGroup) return m.reply(`✧ Los comandos *NSFW* están desactivados en este grupo.\n> *${usedPrefix}on modohorny* para activarlos si eres Administrador.`);
        await conn.reply(m.chat, '✧ Ingresa un tag para realizar la búsqueda.', m);
        return;
    }
    const tag = args[0];
    const url = `https://gelbooru.com/index.php?page=dapi&s=post&q=index&json=1&tags=${tag}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); 
        if (!data || !data.post || !data.post.length) {
            await conn.reply(m.chat, `✧ No hubo resultados para *${tag}*`, m);
            return;
        }
        const randomImage = data.post[Math.floor(Math.random() * data.post.length)];
        const imageUrl = randomImage.file_url;
        await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: `❀ *GELBOORU SEARCH*\n✰ *Resultados para:*\n> ${tag}`, mentions: [m.sender] });
    } catch (error) {
        console.error(error);
        await conn.reply(m.chat, '✧ Ocurrió un error inesperado.', m);
    }
};
handler.help = ['gb <tag>', 'gelbooru <tag>'];
handler.command = ['gb', 'gelbooru'];
handler.tags = ['nsfw', 'search', 'anime'];
handler.registrado = true;
handler.diamantes = 2;
export default handler;
