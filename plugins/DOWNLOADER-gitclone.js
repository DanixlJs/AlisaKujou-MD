import fetch from 'node-fetch'
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, `✧ Ingresa el Link de un Repositorio de GitHub.`, m)
  }
  if (!regex.test(args[0])) {
    return conn.reply(m.chat, `✧ El enlace ingresado no es un nlace válido.`, m).then(_ => m.react('✖️'))
  }
  let [_, user, repo] = args[0].match(regex) || []
  let sanitizedRepo = repo.replace(/.git$/, '')
  let repoUrl = `https://api.github.com/repos/${user}/${sanitizedRepo}`
  let zipUrl = `https://api.github.com/repos/${user}/${sanitizedRepo}/zipball`
  await m.react('🕓')
  try {
    let [repoResponse, zipResponse] = await Promise.all([
      fetch(repoUrl),
      fetch(zipUrl),
    ])
    let repoData = await repoResponse.json()
    let filename = zipResponse.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    let type = zipResponse.headers.get('content-type')
await conn.sendFile(m.chat, await zipResponse.buffer(), filename, null, m)
await m.react('✅')
  } catch (e){
m.reply('✧ Ocurrió un error inesperado.')
console.log(e)
  }
}
handler.help = ['gitclone <enlace>']
handler.tags = ['downloader']
handler.command = ['gitclone']
handler.registrado = true 
export default handler