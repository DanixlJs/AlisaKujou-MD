import axios from "axios";

let handler = async (m, { conn, usedPrefix, text }) => {
  if (!text)
    return conn.reply(
      m.chat,
      "*🚩 𝙸𝚗𝚐𝚛𝚎𝚜𝚊 𝚕𝚘 𝚚𝚞𝚎 𝚍𝚎𝚜𝚎𝚊𝚜 𝚋𝚞𝚜𝚌𝚊𝚛 𝚎𝚗 𝚃𝚒𝚔𝚃𝚘𝚔.*",
      m,
    );
  await m.react("💙");
  try {
    let response = await axios.get(`https://delirius-api-oficial.vercel.app/api/tiktoksearch?query=${encodeURIComponent(text)}`);
    let results = response.data.meta;
    if (!results.length)
      return conn
        .reply(
          m.chat,
          "No se encontraron resultados, intenta con un nombre más corto.",
          m,
        )
        .then((_) => m.react("✖️"));
     const push = await Promise.all(selectedResults.map(async (result) => ({
        body: { text: null },
        footer: { text: `💥 Ofc Daniel` },
        header: {
            title: result.title,
            hasMediaAttachment: true,
            videoMessage: await createVideo(result.nowm)
        },
        nativeFlowMessage: { buttons: [] }
    })));

    const msgContent = {
        viewOnceMessage: {
            message: {
                messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                interactiveMessage: {
                    body: { text: '💥 *TIKTOK SEARCH* 💥' },
                    footer: { text: null },
                    header: { hasMediaAttachment: false },
                    carouselMessage: { cards: push }
                }
            }
        }
    }
    const msg = generateWAMessageFromContent(m.chat, msgContent, {});
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
} catch (error) {
    console.log(error);
    m.react("❌");
  }
};
handler.help = ["tiktoksearch"];
handler.tags = ["search"];
handler.command = ["tiktoksearch", "tiks"];
handler.register = true;
export default handler;