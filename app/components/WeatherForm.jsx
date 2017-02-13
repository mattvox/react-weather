var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (event) {
        event.preventDefault();

        var location = this.refs.location.value;

        if (location) {
            this.refs.location.value = null;
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type='text' ref='location'/>
                <button>Get Weather</button>
            </form>
        );
    }
});

module.exports = WeatherForm;
