var React = require('react');
var { Link, IndexLink } = require('react-router');

// var Nav = React.createClass({
//     render: function () {
//         return (
//             <nav>
//                 <h2>ReactWeather</h2>
//                 <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>get weather </IndexLink>
//                 <IndexLink to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>about </IndexLink>
//                 <IndexLink to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>examples </IndexLink>
//             </nav>
//         );
//     }
// });

var Nav = (props) => {
  return (
      <nav>
          <h2>ReactWeather</h2>
          <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>get weather </IndexLink>
          <IndexLink to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>about </IndexLink>
          <IndexLink to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>examples </IndexLink>
      </nav>
  );
};

module.exports = Nav;
