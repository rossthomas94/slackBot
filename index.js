const slackBot = require('slackbots');
const slackToken = require('./tokens/slack.json');
const users = require('./config/users.json');
const {jokes, quotes, weather, news } = require('./controllers');



// const spotify;
// const cocktails;
// const urbanDic
// const movie;
// const time;
// const google;

const bot = new slackBot({
    token: slackToken.token,
    name: slackToken.name
});

bot.on('start', () => {
    const params = {
        icon_emoji: ':smiley:'
    };

    // bot.postMessageToChannel('general', 'Hello', params);
});

bot.on('error', err => console.log(err))

bot.on('message', data => {

    if(data.type != 'message' || data.subtype == 'bot_message' ){
        return;
    };

    handleMessageChannel(data);
});

function handleMessageChannel(message) {
    console.log(message)
    
    if(message.text.includes(' hi')){
        console.log(message.text)
        const params = {
            icon_emoji: ':wave:'
        };
        bot.postMessageToChannel('general', `hey there, ${users[message.user]}`, params);
    } else if (message.text.includes(' joke')){
        jokes.generateJoke(bot);
    } else if (message.text.includes(' quote')){
        quotes.generateQuote(bot)
    }else if (message.text.includes(' weather')){
        weather.weatherController(bot,message)
    } else if (message.text.includes(' news')){
        news.controlNews(bot,message)
    } ;
};

