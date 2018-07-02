
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name : {
		type : String,
		required : "Please enter your full name"
	},
	username : {
		type : String,
		required : "Please choose a username",
		unique : true

	},	
	password:{
		type : String,
		required : "Please enter your password"
	}
	// ,
	// tasks : [{
	// 	title : String,
	// 	description : String,
	// 	time : Date
	// }]
})

module.exports = mongoose.model('UserDetails', UserSchema);