// Require
const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=da7b91697bd5e09aed80ae27d4d103be`);

    if (resp.data.cod === '400') {
        throw new Error('No son validos los datos')
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}