import Starlights from '@StarlightsTeam/Scraper'
let handler = async (m, {conn, text}) => {
    try {
    if (!text) return m.reply('✧ Ingresa un texto para realizar la busqueda.')
    await m.react('🕐')
    let {dl_url, author, likes} = await Starlights.tiktokvid(text)
    let txt = `❀ *SEARCH - TIKTOK*\n✰ *Titulo ⪼* ${text}\n◈ *Autor ⪼* ${author}\n◈ *Likes ⪼* ${likes}`
    conn.sendFile(m.chat, dl_url, text + '.mp4', txt, m, fake, )
    m.react('☑️')
} catch (e){
        m.reply('✧ Ocurrió un error inesperado.')
        console.log(e)
}
}
handler.help = ['tiktoksearch <texto>']
handler.command = ['tiktokvid', 'tiktoksearch', 'ttv']
handler.registrado = true
handler.tags = ['search', 'downloader']
export default handler
