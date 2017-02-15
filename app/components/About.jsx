var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About component</h3>
//         );
//     }
// });

var About = (props) => {
    return (
      <div>
          <h1 className='page-title text-center'>About</h1>
          <p>Shabby chic bushwick try-hard keffiyeh aesthetic, vegan schlitz vape messenger bag health goth gochujang. Chambray art party semiotics snackwave. Raclette vaporware shoreditch tote bag, heirloom mustache disrupt vinyl schlitz thundercats whatever sartorial beard chillwave succulents. Cray bespoke gluten-free organic locavore shoreditch. Enamel pin ethical tattooed fashion axe.</p>
      </div>
    );
};

module.exports = About;
