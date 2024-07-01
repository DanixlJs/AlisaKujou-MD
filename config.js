// IMPORTACIONES
import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs';

global.botnumber = "";
global.confirmCode = "";

// GLOBAL - OWNERS
global.owner = [
['595983799436', '👑𝗢𝘄𝗻𝗲𝗿(DanixlJs)', true],
['573012482597']]

// GLOBAL - CONTACTOS
global.contactos = [
["595983799436", '👑𝗢𝘄𝗻𝗲𝗿(DanixlJs)', 1]]

// GLOBAL - OTROS
global.suittag = ['5217203190618']
global.prems = ['5215536599708']
global.mods = ['5491157436824', '5215536599708']

// GLOBAL - IMG
global.img = fs.readFileSync('./logo.jpg');

// GLOBAL - LINKS
global.md = 'https://github.com/DanixlJs/AlisaKujou-MD';
global.gp = 'https://chat.whatsapp.com/Kbj38zCqOvqH9KM5bRH1Hb';
global.patreon = 'https://patreon.com/DanixlJs';
global.channel = 'https://whatsapp.com/channel/0029Vaa4kxh4dTnEJ0pwVr1y';

// PREFIJO 
global.prefix = new RegExp('^[/.#!]');

// NOTA: Cuando Más Alto, más difícil será subir de nivel.
global.multiplier = 500;

// VARIADOS
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
];

// NO TOCAR
const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.green('❀ Archivo "config.js" actualizado.'));
  import(`${file}?update=${Date.now()}`);
});
