const Discord = require('discord.js'); 

const client = new Discord.Client();

client.once('ready' , () => {
console.log('online')
})


client.login("your bot token here");
