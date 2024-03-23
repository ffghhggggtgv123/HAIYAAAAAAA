const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const express = require('express');
const moment = require('moment');
const readline = require('readline-sync');
const num = parseFloat((Math.random() * 0.2 + 0.1 + Number.EPSILON).toFixed(1));
const operator = Math.random() < 0.3 ? '+' : '-';
const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'));
app.listen(port, () =>
  console.log(`Your app is listening at http://localhost:${port}`)
);

const client = new Client({
  checkUpdate: false
});

client.on('ready', async () => {
  if (global.dataWeather && global.dataWeather.current_weather) {
    global.temp = global.dataWeather.current_weather.temperature;
    global.wind = global.dataWeather.current_weather.windspeed;
  } else {
    global.temp = 25;
    global.wind = 3.5;
  }

  setInterval(() => {
    const created = moment().format('YYYY-MM-DD HH:mm:ss ');

    const change = ['https://media.discordapp.net/attachments/1160072155476795392/1220979139192946730/gojo-satoru-gojo.gif?ex=6610e86f&is=65fe736f&hm=22a9cdf54b91058d5c01dfc6d9c479790194d9d58795d5b9edf96d48d9c52e00&=&width=467&height=262'];
    const poop = ['https://media.discordapp.net/attachments/1160072155476795392/1220978941230055464/2Q.png?ex=6610e840&is=65fe7340&hm=03da98bb2d5eb8d3cda88709ccbc9d6303a4e722ced29135da2897798b5fc84a&=&format=webp&quality=lossless&width=200&height=188'];
    const change2 = ['HI ', 'My name', 'is', 'queencat'];
    const change3 = ['⏰', '⏰', '⏰', '⏰'];
    const iooi = ['Join Ntts discord', '〝✅〞Join ntts discord', '〝✅〞Still join ntts discord'];
    const iiio = ['https://discord.gg/ntts'];
    const yyyt = ['Sub to ntts ig', 'Sub to him lol', 'ok sub now'];
    const ddds = ['https://www.youtube.com/NoTextToSpeech?sub_confirmation=1'];

    // Randomize data
    const tyyy = yyyt[Math.floor(Math.random() * yyyt.length)];
    const sddd = ddds[Math.floor(Math.random() * ddds.length)];
    const oooi = iiio[Math.floor(Math.random() * iiio.length)];
    const ioii = iooi[Math.floor(Math.random() * iooi.length)];
    const popp = poop[Math.floor(Math.random() * poop.length)];
    const ssss = change[Math.floor(Math.random() * change.length)];
    const dwada = change2[Math.floor(Math.random() * change2.length)];
    const ap = change3[Math.floor(Math.random() * change3.length)];


    const r = new Discord.RichPresence()
      .setApplicationId('928000104378548224')
      .setType('LISTENING')
      .setURL('https://youtu.be/xTZk2G9-6co?si=xpE-kzJivOITFzmQ')
      .setState(`${dwada}`)
      .setName(`Hi`)
      .setDetails(`${ap}${getTime()} ${moment().format('- DD/MM/YYYY')}`)
      .setAssetsSmallImage(`${popp}`)
      .setAssetsLargeImage(`${ssss}`)
      .setAssetsLargeText(`🌡️ ${operator === '+' ? (global.temp + num).toFixed(1) : (global.temp - num).toFixed(1)} °C | 🍃 ${operator === '+' ? (global.wind + num).toFixed(1) : (global.wind - num).toFixed(1)} m/s`)
      .addButton(`${ioii}`, `${oooi}`)
      .addButton(`${tyyy}`, `${sddd}`)
      .setAssetsSmallText(`ping : ${Math.round(client.ws.ping)}`)
      .setStartTimestamp(Date.now())
      .setEndTimestamp(Date.now());

    client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline
    client.user.setActivity(r);
  }, 2 * 1000);

  console.log(`${client.user.username} Is Ready!`);
});


function getDate() {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }).split(' ')[0].replaceAll(',', '');
}

function getTime() {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }).split(' ')[1].replaceAll(',', '');
}

// Login
client.login(process.env['token']);
