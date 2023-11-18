const axios = require('axios');
const apikey = require('../tokens/news.json');

const generalNewsUK = function generalNews (bot) {
console.log(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${apikey}`)
        // axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${apikey}`).then(res => {
        //     if (res.status != 'ok') throw new Error('generalNewsUK API is not working');
        //    });

};

const newsByCategory = function newsByCategory (bot) {


};

const newsBySource = function newsBySource (bot) {

};

const newsByCountry = function newsByCountry (bot){

};

const controlNews = function controlNews (bot, message){
    try {
        generalNewsUK()

    } catch (error) {
        console.log(error)
        
    }
};

module.exports = {
    controlNews
};