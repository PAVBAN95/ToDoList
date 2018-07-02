
const express 	= require('express'),
	mongoose 	= require('mongoose'),
	cors 		= require('cors'),
	bodyParser 	= require('body-parser');

const app = express();

app.use(cors());
let PORT = process.env.PORT | 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const UserModel = require('./api/models/User'),
	  TaskModel = require('./api/models/Task');

const routes = require('./api/routes/Routes')(app);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoList');


app.all("/*", (req, res, next)=> {
	res.header("Access-Control-Allow-Origin", "http://localhost:8081"); // restrict it to the required domain
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	res.header(
		"Access-Control-Allow-Headers",
		"Content-type,Accept,X-Access-Token,X-Key"
	);

	if (req.method == "OPTIONS") {
		res.status(200).end();
	} 
	else {
		next();
	}

});

app.get('/', (req, res)=>{
	res.send("Hello User")
})

app.use( (req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(PORT, ()=>{
	console.log("Server is listening on port "+PORT);
})
