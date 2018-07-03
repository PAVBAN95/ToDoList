
var React = require('react')
var {FormGroup, FormControl, ControlLabel, HelpBlock, Button, Alert} = require('react-bootstrap');
var axios = require('axios');
var styles = require('../styles/form.css');

var postDataHost = "http://localhost:3000/register";

			
class SignUp extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			user : {
				isError : false,
				message : ""
			}
		}
	}

	handleFormSubmission(){
		if(this.password.value != this.repassword.value){
			this.setState({
				user :{
					message : "Password doesn't match" 
				}
			})
			return;
		}
		let userData = {
			username : this.userName.value,
			name : this.fullName.value,
			email : this.email.value,
			password : this.password.value
		}
		axios.post(postDataHost, userData)
		  .then((response) =>{
		  	console.log(response);
		  	this.setState({
	  			user : {
	  				message : response.data.message
	  			}
	  		})
		  	console.log(response)
		  })
		  .catch(function (error) {
		  	console.log(">>>>>>>>>>>Error")
		    console.log(error);
		  }); 
	}

	render(){
		return(
			<div>
			<Alert bsStyle="success">
				 	{this.state.user.message}
				</Alert>
				<form className={styles.login}>
			        <FormGroup
			          controlId="formBasicText"
			        >

			          <ControlLabel>Register</ControlLabel>
			          ~{"\n"}
			          
			          <ControlLabel>Full Name</ControlLabel>
			          <FormControl
			            type="text"
			            label="Name"
			            inputRef = {input => this.fullName = input}
			            placeholder="Full Name"
			          />

			          <ControlLabel>Email</ControlLabel>
			          <FormControl
			            type="email"
			            inputRef = {input => this.email = input}
			            placeholder="Enter your email address"
			          />

			          <ControlLabel>Username</ControlLabel>
			          <FormControl
			            type="text"
			            inputRef = {input => this.userName = input}
			            placeholder="Choose a Username"
			          />
			         
			          <ControlLabel>Password</ControlLabel>
			          <FormControl
			            type="password"
			            inputRef = {input => this.password = input}
			            placeholder="Choose your Password"
			          />

			          <ControlLabel>Reenter Password</ControlLabel>
			          <FormControl
			            type="password"
			            inputRef = {input => this.repassword = input}
			            placeholder="Reenter Password"
			          />
			          <Button className={styles.mybutton}  onClick={this.handleFormSubmission.bind(this)}>Signup</Button>
			        </FormGroup>
			      </form>
		    </div> 
		)
	}
}

module.exports = SignUp;