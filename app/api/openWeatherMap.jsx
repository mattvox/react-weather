var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8dc7bba3fd47f3a58cb1e4bc97eec765&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&zip=${encodedLocation}`;

        return axios.get(requestURL).then(function (res) {
            return res.data;
        }).catch(function (err) {
            throw new Error (err.response.data.message);
        });
    }
};
