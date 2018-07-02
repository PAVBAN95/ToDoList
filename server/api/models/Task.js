const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({

	id : {
		type : Number,
		unique : true
	},
	title : {
		type : String,
		required : "Please enter the title of the task to display "
	},
	description : {
		type : String,
	},

	deadline : {
		type : Date
	}
})

module.exports = mongoose.model('TaskDetails', TaskSchema);