const axios = require('axios');
const key = require('../tokens/weatherAPI.json').token


const weatherController = async function weatherController (bot, message) {
    try {
        let location = message.text.split(/in/ig)[1]
        let {weather, emoji} = await weatherUpdate(location)
        // let test = await weatherForcast(location,1)
        const params = {
            icon_emoji: `:thermometer:`
        };
        bot.postMessageToChannel('general', `${weather}`, params);
    } catch (error) {
        console.log(error)
    }


};

const weatherUpdate = async function weatherUpdate  (location){
    let weatherReport = [];
 let {weather, emoji} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`).then(res => {
     let { main , description } = res.data.weather[0];
     let { sunrise , sunset} = res.data.sys;
     let { temp , feels_like, temp_min , temp_max , humidity } = res.data.main;
     let name = res.data.name;
     let weather = `The current weather in ${name} is ${description} with high of ${temp_max} and a low of ${temp_min} but it feels like ${feels_like} and humidity of ${humidity}. The sunset will be at ${new Date(sunset * 1000)}.`
     let emoji = main.toLowerCase();
     return {weather, emoji};
});
return {weather, emoji};
};


// dont have access
const weatherForcast = async function weatherForcast (location, days){

    let {lat, lon} = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${key}`).then(res => {
    
    let {lat,lon} = res.data[0]
    return {lat, lon}
    })

    let weather = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${days}&appid=${key}`).then(res => {
    
    })

};

module.exports = {
    weatherController
};