const mongoose = require('mongoose'),
	Task = mongoose.model('TaskDetails');


exports.showAllTasks = (req, res)=>{
	Task.find({}, (err, tasks)=>{
		if(err)
			res.json(err)
		else{
			res.json(tasks);
			console.log("Tasks are ")
			console.log(tasks);
		}
	})
}

exports.addTask = (req, res)=>{

	let task = new Task(req.body);

	task.save( (err,task)=>{
		if(err){
			console.log("Somethings went wrong!")
			res.json(err)
		}
		else{
			res.json({
				message : task.title + " added successfully "
			})
		}
	})
}	

exports.updateTask = (req, res)=>{
	let status = Task.findOneAndUpdate(
		{ id   : req.params.id},
		{ $set : { content : "Revised Content 2 !"} },
		{ upsert : true},
		(err) => {
			if(err)
				res.json(err)
			else
				res.json({
					message : "Task Successfully Updated"
				})
		}
	)
}

exports.deleteTask = (req, res)=>{

	Task.remove({id : req.params.id},
		(err)=>{
			if(err){
				res.json(err)
			}
			else{
				res.json({
					message : "Task Removed"
				});
			}
		}
	)
}	



	