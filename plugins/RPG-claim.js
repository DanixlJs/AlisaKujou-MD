let handler = async (m, {conn}) => {
  if (!global.db.data.chats[m.chat].rpg) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.')
  let time = global.db.data.users[m.sender].dailytime + 86400000
  if (new Date - global.db.data.users[m.sender].dailytime < 86400000) return conn.reply(m.chat, `✧ Espera *${msToTime(time - new Date())}* para  volver a reclamarlo.`, m, )
global.db.data.users[m.sender].dinero += `${global.db.data.users[m.sender].premium ? '200000' : '100000'}`
conn.reply(m.chat, `❀ *REWARD DIARIO*\n✰ Reclamaste tu recompensa diaria y obtuviste *${global.db.data.users[m.sender].premium ? '200000' : '100000'} ${global.botcoins}*.`, m, fake, )
global.db.data.users[m.sender].dailytime = new Date * 1
}
handler.help = ['daily']
handler.tags = ['rpg']
handler.command = ['daily']
handler.registrado = true
export default handler
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? '0' + hours : hours
minutes = (minutes < 10) ? '0' + minutes : minutes
seconds = (seconds < 10) ? '0' + seconds : seconds
return hours + ' Hora(s) ' + minutes + ' Minuto(s)'
}
