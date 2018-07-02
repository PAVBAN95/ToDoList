
module.exports = (app) => {
	
	const UserController = require('../controllers/UserController'),
		  TaskController = require('../controllers/TaskController');

  	app.route('/tasks')
  		.get(TaskController.showAllTasks)
  		.post(TaskController.addTask)

  	app.route('/tasks/:id')
  		.put(TaskController.updateTask)
  		.delete(TaskController.deleteTask)
  		
	app.route('/users')
		.get(UserController.onError)
		.post(UserController.authenticateUser)

	app.route('/register')
		.get(UserController.onError)
		.post(UserController.registerUser)

};





