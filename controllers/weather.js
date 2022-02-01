const axios = require('axios');
const { weather } = require('.');
const key = require('../tokens/weatherAPI.json').token


const weatherController = async function weatherController (bot, message) {
    try {
        let report, emoji = await weatherUpdate('swansea')
        bot.postMessageToChannel('general', `${report}`, ':laughing:');
    } catch (error) {
        console.log(error)
    }


};

const weatherUpdate = function weatherUpdate (location){
 const weather, emoji = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`).then(res => {
     console.log(res.data)
     let { main , description } = res.data.weather[0];
     let { sunrise , sunset} = res.data.sys;
     let { temp , feels_like, temp_min , temp_max , humidity } = res.data.main;
     let name = res.data.name;
     let d = new Date(0)
     let weather = `The current weather in ${name} is ${description} with high of ${temp_max} and a low of ${temp_min} but it feels like ${feels_like} and humidity of ${humidity}. The sunset will at ${new Date(sunset)}.`
     let emoji = main.tooLowerCase();
     return weather, emoji;
});
return weather,emoji;
};

const weatherForcast = function weatherForcast (location){
    console.log('htt')
};

module.exports = {
    weatherController
};