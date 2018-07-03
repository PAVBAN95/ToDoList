
var React = require('react')
var axios = require('axios');
var {FormGroup, FormControl, ControlLabel, HelpBlock, Button, InputGroup, Glyphicon, Alert, Text} = require('react-bootstrap');
var styles = require('../styles/form.css');
var Redirect = require('react-router-dom').Redirect;


var getUsersHost = "http://localhost:3000/users",
	validateUserHost = "http://localhost:3000/login";


class Login extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			user : {
				name : "User",
				message : "Hello Mr. Strange!",
				isValid : false
			}
		}
	}

	renderRedirect(){
		console.log("In redirect")
		if(this.state.user.isValid){
			console.log("Valid User in redirect");
			return
				<Redirect to="/profile"/>
		}
	}

	handleFormSubmission(){
		let userData = {
			username : this.username.value,
			password : this.password.value
		}

		axios.post(validateUserHost, userData)
			.then((response)=>{
				console.log(response)
				if(response.data.isValid){
					this.setState({
						user : {
							name : response.data.name,
							message :response.data.message,
							isValid : true
						}
					});
				}
				else{
					this.setState({
						user : {
							name : "Invalid User",
							message :response.data.message,
							isValid : false
						}
					})
				}
			}).catch((error)=>{	
				console.log(error);
			})
	}

	render(){
		return(
			<div>
				
				{this.renderRedirect()}  

				<Alert bsStyle="success">
				 	{this.state.user.message} {this.state.user.isValid}
				</Alert>
				<form className={styles.login}>
			        <FormGroup
			          controlId="formBasicText"
			        >
			          <ControlLabel>Login</ControlLabel>	
			         
			          <InputGroup>
			          	  <InputGroup.Addon>
					        <Glyphicon glyph="user" />
					      </InputGroup.Addon>
				          <FormControl
				            type="text"
				            inputRef={input => this.username = input}
				            placeholder="Username or email"
				          />
				        </InputGroup>
				      <InputGroup>
			          	  <InputGroup.Addon>
					        <Glyphicon glyph="lock" />
					      </InputGroup.Addon>
				          <FormControl
				            type="password"
				            inputRef={input => this.password = input}
				            placeholder="Password"
				            name
				          />
				        </InputGroup>  
			          
			          <Button className={styles.mybutton} onClick={this.handleFormSubmission.bind(this)}>Login</Button>
			         <div className={styles.message}>Haven't registered yet?</div> <Button href="/register" className={styles.btnSignup}> Register </Button>  
			        </FormGroup>
			      </form>
		    </div>  
		)
	}
}

module.exports = Login;