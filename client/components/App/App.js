const React = require('react');
const {Provider} = require('react-redux');
const Header = require('./Header/index.js'),
	  Footer = require('./Footer/index.js'),
	  ToDo  = require('./ToDo/index.js');
const style = require('./styles/style.css');
const axios = require('axios');	  


class List extends React.Component{

	constructor(props){
		super(props);
	}
	render(){
		let list  = this.props.data;
		return(
			<div>
    		  {list.map(c => <ToDo data={c} />)}
    	 	</div> 
		)
	}
} 

class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			count : 0,
			data  : {},
			isError : false
		}
	}

	componentDidMount(){
		axios.get('http://localhost:3000/tasks')
			.then((response)=>{
				console.log("Data is ");
				console.log(response)
				this.setState({
					data : response.data,
					count : response.data.length,
					loaded : true
				})
			}).catch((error)=>{
				console.log("Error is ")
				console.log(error)
				this.setState({
					isError : true
				})
			})
	}

	componentWillUnmount(){

	}

	render(){
		return(
			<div>
				<Header/>
				<div className={style.subheader}> Complete your ToDos </div>
				<div> No of todo is {this.state.count}</div>
				{ this.state.isError ? <div> There is an error while fetching list </div> : <div> {this.state.count ? <List data={this.state.data}/> : <div>You don't have any task pending</div>} </div> }
				<Footer/>
			</div>
		)
	}
}

module.exports = App;