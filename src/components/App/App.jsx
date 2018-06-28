var React = require('react');

var Header = require('./Header/Header.jsx')
var Footer = require('./Footer/Footer.jsx')


class App extends React.Component{
	render(){
		return(
			<div>
				<Header/>
				<Footer/>
			</div>
		)
	}
}

module.exports = App;