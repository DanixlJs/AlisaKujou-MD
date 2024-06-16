import axios from 'axios';

let intervalId = null;
let previousCommitSHA = '';
let previousUpdatedAt = '';
let previousCommitUser = '';

const owner = 'DanixlJs';
const repo = 'AlisaKujou-MD';

const checkRepoUpdates = async (conn, m) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
    const { sha, commit: { message }, html_url, author: { login } } = response.data[0];

    if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
      previousCommitSHA = sha;
      previousUpdatedAt = message;
      previousCommitUser = login;

      const updateMessage = `❀ *ANUNCIO*\n> El Repositorio ha sido actualizado.\n✰ *Repositorio ⪼* ${html_url}\n◈ *Mensaje de Commit ⪼* ${message}\n◈ *Realizado por ⪼* ${login}`;

      conn.sendMessage(m.chat, { text: updateMessage }, { quoted: m });
    }
  } catch (error) {
    console.error('✧ Error ⪼', error);
    conn.sendMessage(m.chat, { text: '✧ Error al verificar el repositorio.' }, { quoted: m });
  }
};

const startRepoUpdateChecker = (conn, m) => {
  conn.sendMessage(m.chat, { text: `❀ Se han activado las notificaciones de Actualización.` }, { quoted: m });

  checkRepoUpdates(conn, m);

  intervalId = setInterval(() => checkRepoUpdates(conn, m), 10000); 
};

const stopRepoUpdateChecker = (conn, m) => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    conn.sendMessage(m.chat, { text: `✧ Se han desactivado las notificaciones de Actualización.` }, { quoted: m });
  } else {
    conn.sendMessage(m.chat, { text: `✧ Las notificaciones de actualización no estaban activadas.` }, { quoted: m });
  }
};

const handler = async (m, { conn, command }) => {
  if (command.startsWith('gitonupdate')) {
    startRepoUpdateChecker(conn, m);
  } else if (command === 'gitoffupdate') { 
    stopRepoUpdateChecker(conn, m);
  }
};

handler.command = ['gitonupdate', 'gitoffupdate'];
handler.registrado = true;
handler.rowner = true;
handler.group = true;

export default handler;
