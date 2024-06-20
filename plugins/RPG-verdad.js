const handler = async (m, {conn}) => {
  if (!global.db.data.chats[m.chat].game) return m.reply('✧ Los comandos de RPG han sido desactivados en este grupo.');
  conn.reply(m.chat, `❀ *RESPONDE CON LA VERDAD*\n> ✰ *${pickRandom(global.verdad)}*`, m, fake, );
};
handler.help = ['verdad'];
handler.tags = ['rpg'];
handler.command = ['verdad'];
handler.registrado = true;
export default handler;
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
global.verdad = ['Cual es tu mayor miedo', 'Alguna vez has mentido para salir de una situación embarazosa', 'Qué es lo más vergonzoso que te ha pasado en público', 'Cual es tu mayor secreto', 'Has tenido un amor no correspondido', 'Alguna vez has roto una promesa importante', 'Cual es el sueño más extraño que has tenido', 'Qué es lo más rebelde que has hecho en tu vida', 'Cual ha sido tu peor cita', 'Alguna vez has espiado a alguien sin que se diera cuenta', 'Cual es la cosa más rara que te gusta comer', 'Te has sentido atraído/a por alguien del mismo sexo', 'Qué es lo más loco que harías por amor', 'Has robado algo alguna vez', 'Cual es tu mayor arrepentimiento', 'Qué harías si te tocasen 10 millones de dólares', 'Alguna vez te has enamorado de la pareja de un/a amigo/a', 'Qué es lo más embarazoso que le has dicho a alguien por error', 'Alguna vez has fingido estar enfermo/a para evitar hacer algo', 'Cual es la peor mentira que has dicho', 'Cuál es tu película favorita y por qué', 'Alguna vez has tenido un sueño con alguien de este grupo', 'Cuál es el lugar más extraño donde has ido al baño', 'Alguna vez te han descubierto haciendo algo vergonzoso', 'Cuál es tu canción favorita para cantar en la ducha', 'Si pudieras ser otra persona por un día, ¿quién serías?', 'Alguna vez has enviado un mensaje de texto a la persona equivocada', 'Qué es lo más raro que has hecho por dinero', 'Cuál es el hábito más extraño que tienes', 'Alguna vez has hecho trampa en un examen', 'Cuál es tu peor hábito', 'Alguna vez has fingido estar dormido/a para evitar hablar con alguien', 'Cuál es tu mayor fantasía', 'Alguna vez te has arrepentido de ayudar a alguien', 'Qué es lo más infantil que todavía haces', 'Alguna vez has usado la cuenta de redes sociales de otra persona sin su permiso', 'Cuál es tu mayor inseguridad', 'Alguna vez has tenido una pelea física con alguien', 'Qué es lo más loco que has hecho mientras estabas solo/a en casa', 'Cuál es tu talento oculto',
];
