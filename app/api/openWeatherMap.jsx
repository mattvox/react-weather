var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8dc7bba3fd47f3a58cb1e4bc97eec765&units=imperial&type=accurate';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        console.log(requestURL);

        return axios.get(requestURL).then(function (res) {
            if (res.data.cod && res.data.message) {
              console.log(res.data);
                throw new Error(res.data.message);
            } else {
              console.log(res.data);
                return res.data;
            }
        }, function (res) {
          console.log(res.data);
            throw new Error(res.data.message);
        });
    }
};
