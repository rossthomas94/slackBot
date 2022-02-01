const axios = require('axios');

const generateQuote = function generateQuote (bot) {
    axios.get('https://type.fit/api/quotes').then(res => {
    let random = Math.floor(Math.random() * (res.data.length - 1 - 0 + 1)) + 0
    let quote = res.data[random].text
    bot.postMessageToChannel('general', `${quote}`, ':laughing:');
   });

};

module.exports = {
    generateQuote,
  };