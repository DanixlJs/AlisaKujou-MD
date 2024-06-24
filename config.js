// IMPORTACIONES
import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs'; 
import moment from 'moment-timezone';

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
global.suittag = ['595973755967']
global.prems = []
global.mods = ['595985665263', '51979946825', '51986707393']

// GLOBAL - IMG
global.img = fs.readFileSync('./logo.jpg');
global.img2 = fs.readFileSync('./media/AhoraQue.png');

// GLOBAL - LINKS
global.md = 'https://github.com/DanixlJs/AlisaKujou-MD';
global.gp = 'https://chat.whatsapp.com/Kbj38zCqOvqH9KM5bRH1Hb';
global.patreon = 'https://patreon.com/DanixlJs';
global.channel = 'https://whatsapp.com/channel/0029Vaa4kxh4dTnEJ0pwVr1y';

// GLOBAL - DATOS
global.botdate = `${moment.tz('America/Asuncion').format('DD/MM/YY')}`;
global.bottime = `${moment.tz('America/Asuncion').format('HH:mm:ss')}`;

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

//Apis De La Bot
global.openai_key = 'sk-0';
global.openai_org_id = 'org-3';
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['Gata_Dios'];
global.itsrose = ['4b146102c4d500809da9d1ff'];

global.APIs = {
  ApiEmpire: 'https://api-brunosobrino.zipponodes.xyz',
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'Gata_Dios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'}


global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;

// NO TOCAR
const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.green('❀ Archivo "config.js" actualizado.'));
  import(`${file}?update=${Date.now()}`);
});
