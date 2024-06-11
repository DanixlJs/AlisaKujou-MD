  const aa = {quoted: m, userJid: conn.user.jid};
  const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: msg, contextInfo: {externalAdReply: {title: wm, body: dev, thumbnail: img, sourceUrl: channel}}}}, aa);
  if (msg) return conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id});
};

const file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'handler.js\''));
  if (global.reloadHandler) console.log(await global.reloadHandler());

  if (global.conns && global.conns.length > 0 ) {
    const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
    for (const userr of users) {
      userr.subreloadHandler(false)
    }
  }

});
