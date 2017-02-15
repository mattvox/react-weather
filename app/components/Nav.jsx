var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  onSearch: function (event) {
    event.preventDefault();

    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.location.value = null;
      window.location.hash = '#/?location=' + encodedLocation;
    }

  },
  render: function () {
    return (
        <nav className='top-bar'>
            <div className='top-bar-left'>
              <ul className='menu'>
                <li className='menu-text'>
                  <strong>React Weather</strong>
                </li>
                <li>
                  <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>get weather </IndexLink>
                </li>
                <li>
                  <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>about </Link>
                </li>
                <li>
                  <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>examples </Link>
                </li>
              </ul>
            </div>

            <div className='top-bar-right'>
              <form onSubmit={this.onSearch}>
                <ul className='menu'>
                  <li>
                    <input type='search' ref='location' placeholder='Zip Code...'/>
                  </li>
                  <li>
                    <input type='submit' className='button' value='Get Weather'/>
                  </li>
                </ul>
              </form>
            </div>
        </nav>
    );
  }
});

module.exports = Nav;
