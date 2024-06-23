import Scraper from "@SumiFX/Scraper"
const handler = async (m, { conn, text }) => {
if (!text) return m.reply(`✧ Ingresa el nombre de la canción que quieras descargar.`)
try {
let { title, artist, album, published, thumbnail, dl_url } = await Scraper.spotify(text)
let txt = `❀ *SPOTIFY - SEARCH*\n✰ *Nombre ⪼* ${title}\n◈ *Artista ⪼* ${artist}\n◈ *Álbum ⪼* ${album}\n◈ *Publicado ⪼* ${published}\n> Descargando su canción, espere un momento.`
await conn.sendFile(m.chat, thumbnail, 'icon.jpg', txt, m)
await conn.sendFile(m.chat, dl_url, title + '.mp3', `✰ *Titulo ⪼* ${title}\n◈ *Artista ⪼* ${artist}`, m, )
} catch (e){
  console.log(e)
  m.reply('✧ Ocurrió un error inesperado.')
}
}
handler.help = ['spotify <texto>']
handler.tags = ['downloader']
handler.command = ['spotify']
handler.registrado = true
handler.diamantes = 1
export default handler