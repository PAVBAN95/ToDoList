
const React = require('react');
const styles = require('../styles/style.css');
var {Nav,Navbar,NavItem, NavDropdown, MenuItem} = require('react-bootstrap');


class Header extends React.Component{
	
	render(){
		return(
			<Navbar inverse collapseOnSelect className={styles.header}>
			  <Navbar.Header >
			    <Navbar.Brand className={styles.brand}>
			      <a href="/">ToDo App</a>
			    </Navbar.Brand>
			    <Navbar.Toggle className={styles.black}/>
			  </Navbar.Header>
			  <Navbar.Collapse className={styles.link}>
			    <Nav >
			      <NavItem eventKey={1} href="#" >
			        Create a ToDo
			      </NavItem>
			    </Nav>
			    <Nav pullRight>
			      <NavItem eventKey={1} href="/login">
			      Login/Register
			      </NavItem>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		)
	}
}

module.exports = Header;