var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        };
    },
    handleSearch: function (location) {
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then( (res) => {
          this.setState({
              location: res.name,
              temp: res.main.temp,
              isLoading: false
          });
        }, (err) => {
            this.setState({
                isLoading: false,
                errorMessage: err.message
            });
        });

    },
    render: function () {
        var { isLoading, temp, location, errorMessage } = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        function renderError () {
            console.log(typeof errorMessage, errorMessage);
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                  );
            }
        }

        return (
            <div>
                <h1 className='text-center'>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
