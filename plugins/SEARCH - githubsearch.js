import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {

  if (!text) throw `⧼✦⧽ 𝕌𝕤𝕠 ℂ𝕠𝕣𝕣𝕖𝕔𝕥𝕠:\n→ *${usedPrefix + command} RemCham-MD*`;
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  const str = json.items.map((repo, index) => {
  return `*${1 + index}.*
✰ *ℕ𝕠𝕞𝕓𝕣𝕖:* ${repo.full_name}${repo.fork ? ' (fork)' : ''}
◈ 𝕌𝕣𝕝: ${repo.html_url}
◈ ℂ𝕣𝕖𝕒𝕕𝕠 𝕖𝕝: ${formatDate(repo.created_at)}
◈ 𝔸𝕔𝕥𝕦𝕒𝕝𝕚𝕫𝕒𝕕𝕠 𝕖𝕝: ${formatDate(repo.updated_at)}
◈ ℂ𝕝𝕠𝕟𝕖: $ git clone ${repo.clone_url}
→ ${repo.watchers} → ${repo.forks} → ${repo.stargazers_count}
${repo.description ? `◈ 𝔻𝕖𝕤𝕔𝕣𝕚𝕡𝕔𝕚𝕠𝕟:\n${repo.description}` : ''}`.trim()}).join('\n\n');

conn.sendMessage(m.chat, { text: str.trim() }, { quoted: m })
};


handler.help = ['githubsearch <usuario>', 'gitsearch <usuario>'];
handler.tags = ['search'];
handler.command = ['githubsearch', 'gitsearch'];
handler.register = true;

export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
}