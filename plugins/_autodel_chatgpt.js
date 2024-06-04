const INACTIVITY_TIMEOUT_MS = 30 * 60 * 1000;

async function deleteInactiveUserData(m) {
  const user = global.chatgpt.data.users[m.sender];
  if (!user) return;

  const lastUpdateTime = user.lastUpdate || 0;
  const currentTime = new Date().getTime();

  if (currentTime - lastUpdateTime > INACTIVITY_TIMEOUT_MS) {
    delete global.chatgpt.data.users[m.sender];
  }
}

export async function all(m) {
  const user = global.chatgpt.data.users[m.sender];

  if (user) {
    user.lastUpdate = new Date().getTime();
    global.chatgpt.data.users[m.sender] = user;
  } else {
    return;
  }

  setTimeout(() => deleteInactiveUserData(m), INACTIVITY_TIMEOUT_MS);
}