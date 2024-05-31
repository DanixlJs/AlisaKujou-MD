const handler = async (m, {conn, isOwner, isROwner}) => {
if (!isOwner && !isROwner) throw `⧼✦⧽ 𝔼𝕤𝕥𝕖 𝕔𝕠𝕞𝕒𝕟𝕕𝕠 𝕤𝕠𝕝𝕠 𝕡𝕦𝕖𝕕𝕖 𝕤𝕖𝕣 𝕦𝕤𝕒𝕕𝕠 𝕡𝕠𝕣 𝕖𝕝 𝕕𝕦𝕖ñ𝕠 𝕕𝕖𝕝 𝔹𝕠𝕥.`; 
    
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

conn.sendFile(m.chat, global.icons, 'img.jpg', '⧼✿⧽ 𝔽𝕖𝕝𝕚𝕔𝕚𝕕𝕒𝕕𝕖𝕤 𝕚𝕟𝕧𝕒𝕕𝕚𝕤𝕥𝕖 ℙ𝕠𝕝𝕠𝕟𝕚𝕒, 𝔸𝕝𝕖𝕞𝕒𝕟𝕚𝕒 𝕖𝕤𝕥𝕒𝕣𝕚𝕒 𝕠𝕣𝕘𝕦𝕝𝕝𝕠𝕤𝕠 𝕕𝕖 𝕥𝕚.', fkontak);
}

handler.command = ['polonia'];
export default handler;