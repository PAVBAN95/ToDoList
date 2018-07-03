const config = {

	APP: {
		SERVER_PORT : process.env.PORT | 3000,
		CLIENT_PORT : process.env.PORT | 8081
	},
	DB: {
		host: 'localhost',
		port: 27017,
		name: 'ToDoList'
	}
};

module.exports = config;
