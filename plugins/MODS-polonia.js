const handler = async (m, {conn}) => {
    
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

conn.sendFile(m.chat, global.icons, 'img.jpg', '❀ Felicidades invadiste Polonia, Alemania estaría orgulloso de ti.', fkontak);
}

handler.command = ['polonia'];
handler.mods = true;

export default handler;