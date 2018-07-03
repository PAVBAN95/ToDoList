
const React = require('react');

const {ButtonGroup, ButtonToolbar, Button, Glyphicon} = require('react-bootstrap');
const style = require('../styles/style.css');
const classNames = require('classnames');


class Deadline extends React.Component {
     
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};
	}

	componentWillMount() {
		console.log("Deadline is ")
		console.log(this.props.deadline)
		this.getTimeUntil(this.props.deadline);
	}
	
	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
	}  

	addLeadingZero(number){
		if(number < 10)
			number = '0' +  number;

		return number;
	}
	
	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		if(time < 0) {
			this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
		} 
		else {
			let seconds = Math.floor((time/1000)%60),
				minutes = Math.floor((time/1000/60)%60),
				hours = Math.floor((time/(1000*60*60))%24),
				days = Math.floor(time/(1000*60*60*24));
			
			days = this.addLeadingZero(days)
			hours = this.addLeadingZero(hours)
			minutes = this.addLeadingZero(minutes)
			seconds = this.addLeadingZero(seconds)

			this.setState({
				days, 
				hours, 
				minutes, 
				seconds
			});
		}
	}

	render(){
		return(
			<div className={style.reminderDate}>
				<div className={classNames({[style.inline]:true, [style.time]:true})}>{this.state.days} Days : </div>
				<div className={classNames({[style.inline]:true, [style.time]:true})}>{this.state.hours} Hrs :</div>
				<div className={classNames({[style.inline]:true, [style.time]:true})}>{this.state.minutes} Min :</div>
				<div className={classNames({[style.inline]:true, [style.time]:true})}>{this.state.seconds} Sec</div>
			</div>	
		)
	}
}

class ToDo extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			deadline : this.props.deadline 
		}
	}

	render(){
		return(
			<div className={style.cardWrapper}>
				<div className={style.toDoUtility}>
					<ButtonToolbar className={style.right}>
						<ButtonGroup>
							<Button className={style.border0}><Glyphicon glyph="pencil" /></Button>
							<Button className={style.border0}><Glyphicon glyph="trash" /></Button>
						</ButtonGroup>
					</ButtonToolbar>		
				</div>
				<div className={style.toDoCard}>
					<div className={style.toDoHeader}>
						<div className={style.toDoTitle}>{this.props.data.title}</div>
						<Button className={style.markDone}>Mark Done</Button>
					</div>
					<div className={style.clear}></div>
					<div className={style.toDoBody}>{this.props.data.description}</div>
					<Deadline deadline={this.props.data.deadline} />
					<div className={style.clear}></div>
				</div>
			</div>			
		)
	}
} 

module.exports = ToDo;