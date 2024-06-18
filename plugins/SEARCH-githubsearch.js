import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) return m.reply(`✧ Ingresa un texto para realizar la búsqueda, Ejemplo:\n> *${usedPrefix + command} AlisaKujou-MD*`);
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  const str = json.items.map((repo, index) => {
  return `*${1 + index}.*
❀ *Nombre ⪼* ${repo.full_name}${repo.fork ? ' (fork)' : ''}
✰ *Enlace ⪼* ${repo.html_url}
◈ *Creado el ⪼* ${formatDate(repo.created_at)}
◈ *Actualizado el ⪼* ${formatDate(repo.updated_at)}
◈ *Clonar ⪼* $ git clone ${repo.clone_url}
> → 👀 ${repo.watchers} → 🖇️ ${repo.forks} → 🌟 ${repo.stargazers_count}
${repo.description ? `◈ *Descripción ⪼*\n${repo.description}` : ''}`.trim()}).join('\n\n');
conn.sendMessage(m.chat, { text: str.trim() }, { quoted: m })
};
handler.help = ['githubsearch <usuario>', 'gitsearch <usuario>'];
handler.tags = ['search'];
handler.command = ['githubsearch', 'gitsearch'];
handler.registrado = true;
export default handler;
function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
}
