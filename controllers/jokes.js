const axios = require('axios');

const generateJoke = function generateJoke(bot){
    console.log('tell jokes')
    let jokes = [icndp, jokeapi, yomama];
    let random = Math.floor(Math.random() * (jokes.length - 1 - 0 + 1)) + 0
    jokes[random](bot)
};

const icndp = function icndp (bot) {
    axios.get('https://api.icndb.com/jokes/random').then(res => {
       const joke = res.data.value.joke
       bot.postMessageToChannel('general', `${joke}... sooo funny`, ':laughing:');
   });
};

const jokeapi = function jokeapi (bot) {
    axios.get('https://v2.jokeapi.dev/joke/Any').then(res => {
        console.log(res)
        if (res.data.setup){
            const setup = res.data.setup;
            const delivery =  res.data.delivery;
            bot.postMessageToChannel('general', `${setup}...`, ':question:');
            setTimeout(() =>  bot.postMessageToChannel('general', `${delivery}...`, ':laughing:'), 3000);
        } else {
            const joke = res.data.joke;
            bot.postMessageToChannel('general', `${joke}...`, ':laughing:');
        };
       
    });
};

const yomama = function yomama(bot) {
    axios.get('https://api.yomomma.info/').then(res => {
       const joke = res.data.joke
       bot.postMessageToChannel('general', `${joke}... ouch`, ':flushed:');
   });
};

module.exports = {
    generateJoke
  };
  