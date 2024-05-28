import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""

global.owner = [['595983799436', '👑 Owner', true]]

global.contactos = [["595983799436", 'DanixlJs', 1]]

global.suittag = ['595973755967']
global.prems = []
global.mods = []

global.packname = 'Sticker by';
global.botname = 'TheRemCham-MD';
global.author = 'Rem Cham-MD';
global.wm = '💙Rem Cham-MD💙';
global.dev = '👑Developer by 🧑‍💻DanixlJs';
global.team = '👑Developer by 🧑‍💻DanixlJs';
global.vs = '1.0.0-(beta)';

global.img = fs.readFileSync('./Menu.jpg');

global.gp = 'https://chat.whatsapp.com/Kbj38zCqOvqH9KM5bRH1Hb'
global.channel = 'https://whatsapp.com/channel/0029Vaa4kxh4dTnEJ0pwVr1y'

var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda Noche 🌃'; break; case 1: hour = 'Linda Noche 🌃'; break; case 2: hour = 'Linda Noche 🌃'; break; case 3: hour = 'Linda Mañana 🌄'; break; case 4: hour = 'Linda Mañana 🌄'; break; case 5: hour = 'Linda Mañana 🌄'; break; case 6: hour = 'Linda Mañana 🌄'; break; case 7: hour = 'Linda Mañana 🌅'; break; case 8: hour = 'Linda Mañana 🌄'; break; case 9: hour = 'Linda Mañana 🌄'; break; case 10: hour = 'Linda Día 🌤'; break; case 11: hour = 'Linda Día 🌤'; break; case 12: hour = 'Linda Día 🌤'; break; case 13: hour = 'Linda Día 🌤'; break; case 14: hour = 'Linda Tarde 🌆'; break; case 15: hour = 'Linda Tarde 🌆'; break; case 16: hour = 'Linda Tarde 🌆'; break; case 17: hour = 'Linda Tarde 🌆'; break; case 18: hour = 'Linda Noche 🌃'; break; case 19: hour = 'Linda Noche 🌃'; break; case 20: hour = 'Linda Noche 🌃'; break; case 21: hour = 'Linda Noche 🌃'; break; case 22: hour = 'Linda Noche 🌃'; break; case 23: hour = 'Linda Noche 🌃'; break;}

global.saludo = "" + hour;

global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];

global.botdate = `${moment.tz('America/Asuncion').format('DD/MM/YY')}`;
global.bottime = `${moment.tz('America/Asuncion').format('HH:mm:ss')}`;

global.multiplier = 100;

global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
