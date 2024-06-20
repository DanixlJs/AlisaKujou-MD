const handler = async (m, {conn}) => {
  if (!global.db.data.chats[m.chat].game) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  conn.reply(m.chat, `❀ *TIENES QUE CUMPLIR*\n> ✰ *${pickRandom(global.bucin)}*`, m, fake, );
};
handler.help = ['reto'];
handler.tags = ['rpg'];
handler.command = ['reto'];
handler.registrado = true;
export default handler;
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
global.bucin = ['Envía una selfie con una cara graciosa', 'Canta tu canción favorita y envía el audio', 'Habla en un idioma inventado durante 1 minuto y envía el audio', 'Haz una imitación de algún famoso y envía el video', 'Envía un mensaje con los ojos cerrados', 'Escribe un poema corto sobre el último alimento que comiste y envíalo', 'Baila una canción sin música y envía el video', 'Envía una foto de lo primero que encuentres en tu refrigerador', 'Envía un mensaje de amor a la última persona con la que chateaste', 'Haz 10 saltos de tijera y envía el video', 'Imita el sonido de tu animal favorito y envía el audio', 'Habla como un robot durante 2 minutos y envía el audio', 'Dibuja un retrato de uno de los miembros del grupo y envía la foto', 'Envía una foto tuya usando un filtro gracioso', 'Escribe tu nombre con el codo y envía la foto', 'Envía una foto de tus pies', 'Habla como un pirata durante 1 minuto y envía el audio', 'Escribe una historia corta de terror y envíala', 'Envía una foto de la vista desde tu ventana', 'Dibuja un gato con los ojos cerrados y envía la foto', 'Graba un video haciendo una voltereta o una pirueta', 'Envía un mensaje solo usando emojis', 'Haz 20 sentadillas y envía el video', 'Envía un video cantando una canción de cuna', 'Envía una foto tuya haciendo una pose de yoga', 'Haz un peinado loco y envía la foto', 'Escribe una palabra con la mano opuesta a la que usas normalmente y envía la foto', 'Envía una foto de tu plato de comida más reciente', 'Haz una mueca divertida y envía la foto', 'Imita el sonido de un instrumento musical y envía el audio', 'Envía una foto tuya usando ropa al revés', 'Crea un sombrero con papel y envía la foto', 'Envía un mensaje de voz cantando el abecedario', 'Dibuja un paisaje en 1 minuto y envía la foto', 'Envía un video diciendo un trabalenguas', 'Envía una foto tuya sosteniendo un objeto raro', 'Baila como si nadie te estuviera mirando y envía el video', 'Envía una foto tuya usando gafas de sol en interiores', 'Graba un video diciendo un chiste', 'Envía un mensaje solo usando palabras que empiecen con la misma letra', 'Escribele a tu Ex y dile que la extrañas muchísimo y envía captura', 
];
