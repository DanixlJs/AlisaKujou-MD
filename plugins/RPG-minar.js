let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 1000)
let info = `⧼✿⧽ 𝔾𝕖𝕟𝕚𝕒𝕝, 𝕞𝕚𝕟𝕒𝕤𝕥𝕖 *${hasil}* 𝕕𝕖 𝕖𝕩𝕡𝕖𝕣𝕚𝕖𝕟𝕔𝕚𝕒.`
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `⧼✦⧽ 𝔼𝕤𝕡𝕖𝕣𝕒 *${msToTime(time - new Date())}* 𝕡𝕒𝕣𝕒 𝕧𝕠𝕝𝕧𝕖𝕣 𝕒 𝕞𝕚𝕟𝕒𝕣.`  

m.reply(info)
//conn.fakeReply(m.chat, info, '0@s.whatsapp.net', global.wm, 'status@broadcast')

}
handler.help = ['minar']
handler.tags = ['rpg']
handler.command = ['minar']
handler.register = true
handler.fail = null
handler.exp = 0

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}